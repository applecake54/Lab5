import { BackgroundActions } from '../types/store';

export const changeFirst = (payload: any) => {
	return {
		action: BackgroundActions.CHANGEFIRST,
		payload,
	};
};

export const changeSecond = (payload: any) => {
	return {
		action: BackgroundActions.CHANGESECOND,
		payload,
	};
};

export const changeThird = (payload: any) => {
	return {
		action: BackgroundActions.CHANGETHIRD,
		payload,
	};
};