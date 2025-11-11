import {createContext} from "react";
import type {IContext} from "./types";

export const SchmitterContext = createContext<IContext>({
    user: {
        name: 'Monstr',
        avatar: 'https://gravatar.com/avatar/000?d=identicon'
    },
    stats: {
        followers: 42,
        following: 12
    },
    changeAvatar() {
    },
    changeName() {
    },
    changeStats() {
    }

});