import style from './Option.css';
import { appState, dispatch } from '../../store/index';
import { changeFirst, changeSecond, changeThird } from '../../store/action';
export enum Attribute {
    "image1" = "image1",
    "image2" = "image2",
    "image3" = "image3"
}

export default class option extends HTMLElement{
    image1?: string;
    image2?: string;
    image3?: string;
    
    
    static get observedAttributes(){
        const attrs: Record<Attribute,null> = {
            image1: null,
            image2: null,
            image3: null
        }
        return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, _: unknown, newValue: string) {
		this[propName] = newValue;
		this.render();
	}

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	connectedCallback() {
		this.render();

		const image1 = this.shadowRoot?.querySelector('.image1');
        image1?.addEventListener('click',  () => {
			dispatch( 
				changeFirst(
					this.image1
				)
			);
			console.log("click")
		});

		const image2 = this.shadowRoot?.querySelector('.image2');
        image2?.addEventListener('click',  () => {
			dispatch( 
				changeSecond(
					this.image2
				)
			);
			console.log(appState)
		});

		const image3 = this.shadowRoot?.querySelector('.image3');
        image3?.addEventListener('click',  () => {
			dispatch( 
				changeThird(
					this.image3
				)
			);
			console.log(appState)
		});
		
	}

	mount() {
		this.render();
	}

	render() {
		if (this.shadowRoot)
			this.shadowRoot.innerHTML = `<style>${style}</style>
		    <div>
			<img class="image1" src="${this.image1}">
			<img class="image2" src="${this.image2}">
			<img class="image3" src="${this.image3}">
			</div>
        `;

	
	}
}

customElements.define('my-options', option);