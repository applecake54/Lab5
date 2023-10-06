import { AppState } from '../types/store';

import { Actions, BackgroundActions } from '../types/store';
import { appState } from './index';

export const reducer = (currentAction: Actions, currentState: AppState): AppState => {
	console.log(currentAction);
	const { action, payload } = currentAction;

	switch (action) {
		case BackgroundActions.CHANGEFIRST:
		  return {
			...currentState,
			first: payload,
		  };

		  case BackgroundActions.CHANGESECOND:
		  return {
			...currentState,
			second: payload,
		  };

		  case BackgroundActions.CHANGETHIRD:
		  return {
			...currentState,
			third: payload,
		  };
		default:
		  return currentState;
	  }

};