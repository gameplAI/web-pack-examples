class MarketHistory extends HTMLElement {
    constructor() {
    super();
    const width = this.getAttribute("width") || "100%";
    const height = this.getAttribute("height") || "100%";
    const url = import.meta.url;
    const urlPrefix = url.substring(0, url.length - 17);
    console.log("Constructor");
    console.log(urlPrefix);
    this.innerHTML = `
<iframe
  style="height: ${height}; width: ${width}; border: none"
  src="${urlPrefix}market_history.html"></iframe>
    `;
    }

    get betid() {
      return this.getAttribute('betid');
    }
    
    set betid(newValue) {
      this.setAttribute('betid', newValue);
    }

    get target() {
      return this.getAttribute('target');
    }
    
    set target(newValue) {
      this.setAttribute('target', newValue);
    }

    get oddstype() {
      return this.getAttribute('oddstype');
    }

    set oddstype(newValue) {
      this.setAttribute('oddstype', newValue);
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
      return ['betid', 'target', 'key', 'oddstype', 'collection'];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
      if (this.children[1] != null) {
        console.log("Changing");
        this.children[1].contentWindow.onPropertyChange(name, oldValue, newValue);
      }
      console.log("End");
    }
}


customElements.define('market-history', MarketHistory);