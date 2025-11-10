import './App.css'
import Body from "./components/Body.tsx";
import Navigation from "./components/Navigation.tsx";
import {useState} from "react";
import {SchmitterContext} from "./utils/context.ts";

export interface StatsProps {
    followers?: number,
    following?: number
}

function App() {
    const [user, setUser] = useState({
        name: 'Monstr',
        avatar: 'https://gravatar.com/avatar/000?d=identicon'
    });
    const [stats, setStats] = useState({
        followers: 42,
        following: 12
    })
    const changeAvatar = (url: string) => {
        setUser({...user, avatar: url || user.avatar})
    }
    const changeName = (name: string) => {
        setUser({...user, name: name})
    }

    function increment(value: number) {
        return ++value;
    }

    function decrement(value: number) {
        return --value;
    }

    const changeStats = (callback: (value: number) => number, field: number, fieldName: keyof StatsProps) => {
        const newStats1 = callback(field);
        if (newStats1 > -1) {
            setStats({...stats, [fieldName]: newStats1})
        }
    }


    return (
        <div className={"app"}>
            <SchmitterContext value={{user, stats, changeAvatar, changeName, changeStats, increment, decrement}}>
                <Navigation/>
                <Body/>
            </SchmitterContext>
        </div>
    )
}

export default App
