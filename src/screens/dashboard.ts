import styles from "./dashboard.css"
import Options, { Attribute } from '../Components/Options/Option';
import { addObserver, appState, dispatch } from '../store/index';
import Character, {AttributeAr} from "../Components/Armado/Armado"
import { BackgroundActions } from '../types/store';
import armado from '../Components/Armado/Armado';
import option from '../Components/Options/Option';



class Dashboard extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
		addObserver(this);
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) this.shadowRoot.innerHTML = `<style>${styles}</style>`;

		const options = this.ownerDocument.createElement("my-options") as option;
		options.setAttribute(Attribute.image1, "https://i.pinimg.com/564x/2e/bd/9b/2ebd9b346f9581ddfbb109e37bfd082b.jpg");
		options.setAttribute(Attribute.image2, "https://i.pinimg.com/564x/ca/70/31/ca7031c7597376b95d84c21687e59168.jpg");
		options.setAttribute(Attribute.image3, "https://i.pinimg.com/564x/01/a8/86/01a8865072c6b3ac0f466657075d6fb5.jpg");

		const optionsone = this.ownerDocument.createElement("my-options") as option;
		optionsone.setAttribute(Attribute.image1, "https://i.pinimg.com/564x/ba/e7/2a/bae72a8650477755c4b0215c8883dd33.jpg");
		optionsone.setAttribute(Attribute.image2, "https://i.pinimg.com/564x/b9/74/0e/b9740e22007171da873cbb59fd44fac3.jpg");
		optionsone.setAttribute(Attribute.image3, "https://i.pinimg.com/564x/b5/45/b6/b545b65282e6df46ec023b5fa7b5c06b.jpg");

		const optionstwo = this.ownerDocument.createElement("my-options") as option;
		optionstwo.setAttribute(Attribute.image1, "https://i.pinimg.com/564x/79/1a/c3/791ac3fe2ce0c01dfb963301dac2a2fb.jpg");
		optionstwo.setAttribute(Attribute.image2, "https://i.pinimg.com/564x/8c/28/aa/8c28aa38b2cff13ed12128f558707abe.jpg");
		optionstwo.setAttribute(Attribute.image3, "https://i.pinimg.com/564x/23/7d/f7/237df7556dab6f9372ade09009cf5bcc.jpg");

		const optionsdiv = this.ownerDocument.createElement("div");
		optionsdiv.appendChild(options);
		optionsdiv.appendChild(optionstwo);
		optionsdiv.appendChild(optionsone);
		this.shadowRoot?.appendChild(optionsdiv)

		const character = this.ownerDocument.createElement("my-armado") as armado;
		character.setAttribute(AttributeAr.first, appState.first);
		character.setAttribute(AttributeAr.second, appState.second);
		character.setAttribute(AttributeAr.third, appState.third);
        this.shadowRoot?.appendChild(character);

	}
}

customElements.define('app-dashboard', Dashboard);