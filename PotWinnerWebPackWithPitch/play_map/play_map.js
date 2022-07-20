class PlayMap extends HTMLElement {
    constructor() {
    super();
    const width = this.getAttribute("width") || "100%";
    const height = this.getAttribute("height") || "100%";
    const url = import.meta.url;
    const urlPrefix = url.substring(0, url.length - 11);
    this.innerHTML = `
<iframe
  style="height: ${height}; width: ${width}; border: none"
  src="${urlPrefix}play_map.html"></iframe>
    `;
    }

    get gameid(){
        return this.getAttribute('gameid');
    }

    set gameid(newValue){
        this.setAttribute('gameid', newValue);
    }

    get key() {
      return this.getAttribute('key');
    }

    set key(newValue) {
      this.setAttribute('key', newValue);
    }

    static get observedAttributes(){
        return ['gameid', 'key'];
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log('Attribute changed callback');
        console.log(name);
        console.log(oldValue);
        console.log(newValue);
        console.log(this.children)
        console.log(this.children[0])
        console.log(this.children[1])
        this.children[1].contentWindow.onPropertyChange(name, oldValue, newValue);
    }
}


customElements.define('play-map', PlayMap);