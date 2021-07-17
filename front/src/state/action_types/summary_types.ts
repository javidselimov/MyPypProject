import { ActionTypes } from './action';
import { Country } from './types';
interface IGlobal {
	NewConfirmed: number;
	TotalConfirmed: number;
	NewDeaths: number;
	TotalDeaths: number;
	NewRecovered: number;
	TotalRecovered: number;
	Date: string;
}

export type SummaryType = {
	Global: IGlobal;
	Countries: Country[];
};
interface ILoad {
	type: ActionTypes.LOAD;
}
interface IError {
	type: ActionTypes.ERROR;
}
interface ISucces {
	type: ActionTypes.SUCCESS;
	payload: SummaryType;
}

export type SummaryAction = ILoad | IError | ISucces;
