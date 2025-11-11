import type {StatsProps} from "../App.tsx";

export interface IContext {
    user:{name: string, avatar: string},
    stats:{followers: number,
        following: number},
    changeAvatar(url:string):void,
    changeName(name:string):void,
    changeStats( fieldName: keyof StatsProps,sum:number):void,

}