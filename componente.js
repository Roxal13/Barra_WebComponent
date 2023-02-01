class BarraProgreso extends HTMLElement {
  constructor (value = 80, max = 100) {
    super();
    let meter = document.createElement('meter');
    let span = document.createElement('span')
    this.value = this.getAttribute('value') || value;
    this.max = this.getAttribute('max') || max;
    meter.value = this.value;
    meter.max = this.max;
    span.textContent = this.value + "%";
    this.append(meter, span);
  }

  static get observedAttributes() {
    return ['value', 'max'];
  }

  attributeChangedCallback(name, old, now) {
    console.log(name, old, now);
    if (now>=0) this.innerHTML = now;
    else now = old;
  }

  get value() { return this.getAttribute('value'); }
  set value(v) { this.setAttribute('value',v); }

  get max() { return this.getAttribute('max'); }
  set max(m) { this.setAttribute('max',m); }
}

customElements.define('barra-progreso', BarraProgreso);