export interface IUser {
	_id: string;
	email: string;
	createdAt: string;
}
export interface IAuthPayload {
	email: string;
	password: string;
}
