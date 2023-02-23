class GameClock extends HTMLElement {
    constructor() {
    super();
    const width = this.getAttribute("width") || "100%";
    const height = this.getAttribute("height") || "100%";
    const url = import.meta.url;
    const urlPrefix = url.substring(0, url.length - 13);
    this.innerHTML = `
<iframe
  style="height: ${height}; width: ${width}; border: none"
  src="${urlPrefix}game_clock.html"></iframe>
    `;
    }

    get key() {
      return this.getAttribute('key');
    }

    set key(newValue) {
      this.setAttribute('key', newValue);
    }

    get collection() {
      return this.getAttribute('collection');
    }

    set collection(newValue) {
      this.setAttribute('collection', newValue);
    }

    static get observedAttributes() {
      return ['key', 'collection'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      this.children[1].contentWindow.onPropertyChange(name, oldValue, newValue);
    }
}


customElements.define('gp-game-clock', GameClock);