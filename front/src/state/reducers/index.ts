import { combineReducers } from 'redux';

import { summaryReducer } from './summaryReducer';
import reducer from './user';
import { WeatherReducer } from './weatherReducer';
import { Youtubereducer } from './youtubereducers';
import { Newsreducer} from './newsreducers';
import { coronareducer } from './coronareducers';

export const rootreducer = combineReducers({
	summary: summaryReducer,
	users: reducer,
	weather: WeatherReducer,
	youtube: Youtubereducer,
	news:Newsreducer,
	corona:coronareducer
});

export type State = ReturnType<typeof rootreducer>;
