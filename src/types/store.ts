export type Observer = { render: () => void } & HTMLElement;

export type AppState = {
	first: string;
	second: string;
	third: string;
};

export enum BackgroundActions {
	'CHANGEFIRST' = 'CHANGEFIRST',
	'CHANGESECOND' = 'CHANGESECOND',
	'CHANGETHIRD' = 'CHANGETHIRD'
}

export interface FirstAction {
	action: BackgroundActions.CHANGEFIRST;
	payload: "white";
}

export interface SecondAction {
	action: BackgroundActions.CHANGESECOND;
	payload: "white";
}

export interface ThirdAction {
	action: BackgroundActions.CHANGETHIRD;
	payload: "white";
}

export type Actions = FirstAction | SecondAction | ThirdAction;