import { coronareducer, initialState } from './coronareducers';
import { ActionCoronaTypes } from '../action_types/corona_actions';

describe('testing corona  reducer', () => {
	test('test load state', () => {
		let action: ActionCoronaTypes = {
			type: `load_corona`,
         };
        
		let expected = coronareducer(initialState, action);

		expect(expected).toStrictEqual({
			loading:true
		});
	});
    test('test success state',()=>{
        let newpay={
            confirmed: {
            value: 10,
            detail: 'string'
            },
            recovered: {
            value: 3,
            detail: 'string'
            },
            deaths: {
            value: 4,
            detail: 'string'
            },
            lastUpdate: 'string'
            }
        let action:ActionCoronaTypes={
            type:'success_corona',
            payload:newpay
         
        }
        let expected = coronareducer(initialState,action)
        expect(expected).toStrictEqual({
			loading:false,
            payload:action.payload

		});
    })
});
