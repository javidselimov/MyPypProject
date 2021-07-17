

interface Iload{
    type:"load_corona"
}
interface Isuccess{
    type:'success_corona'
    payload:CoronaType
}
export type CoronaType={
    confirmed: {
    value: number,
    detail: string
    },
    recovered: {
    value: number,
    detail: string
    },
    deaths: {
    value: number,
    detail: string
    },
    lastUpdate: string
    }

export type ActionCoronaTypes = Iload|Isuccess