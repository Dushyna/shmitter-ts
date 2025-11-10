import type {StatsProps} from "../App.tsx";

export interface IContext {
    user:{name: string, avatar: string},
    stats:{followers: number,
        following: number},
    changeAvatar(url:string):void,
    changeName(name:string):void,
    changeStats(callback: (value: number) => number, field: number, fieldName: keyof StatsProps):void,
    increment(value: number):number,
    decrement(value: number):number
}