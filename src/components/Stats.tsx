import Avatar from "./Avatar.tsx";
import {SchmitterContext} from "../utils/context.ts";
import {useContext} from "react";
import StatsField from "./ui/StatsField.tsx";

const Stats = () => {
    const {user, stats} = useContext(SchmitterContext);

    return (
        <div className={"user-stats"}>
            <div>
                <Avatar/>
                {user.name}
            </div>
            <div className={"stats"}>
                <StatsField name='Followers' value={stats.followers} field='followers'/>
                <StatsField name='Following' value={stats.following} field='following'/>
            </div>
        </div>
    );
};

export default Stats;