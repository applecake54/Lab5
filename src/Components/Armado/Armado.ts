import style from './Armado.css';
import { addObserver, dispatch } from '../../store/index';
import { changeFirst, changeSecond, changeThird } from '../../store/action';

export enum AttributeAr {
    "first" = "first",
    "second" = "second",
    "third" = "third"
}

export default class armado extends HTMLElement{
    first?: string;
    second?: string;
    third?: string;
    
    
    static get observedAttributes(){
        const attrs: Record<AttributeAr, null> = {
            first: null,
            second: null,
            third: null
        }
        return Object.keys(attrs);
    }
    
    attributeChangedCallback(propName: AttributeAr, _: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();
		const btn = this.shadowRoot?.querySelector('button');
	}

	mount() {
		this.render();
	}
    render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${style}</style>
            <section>
            <img src="${this.first}"  >
            <img src="${this.second}" >
            <img src="${this.third}" >
            </section>
        `;
	}
}

customElements.define("my-armado", armado);