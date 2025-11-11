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


    const changeStats = (fieldName: keyof StatsProps, sum: number) => {
        const res = stats[fieldName] + sum;

        setStats(prevState => ({...prevState, [fieldName]: res > 0 ? res : 0}))
        if (Math.random() > 0.5) {
            setStats(prevState => ({...prevState, [fieldName]: (res + sum) > 0 ? res+sum : 0}))
        }

    }


    return (
        <div className={"app"}>
            <SchmitterContext value={{user, stats, changeAvatar, changeName, changeStats}}>
                <Navigation/>
                <Body/>
            </SchmitterContext>
        </div>
    )
}

export default App
