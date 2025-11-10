import {useContext} from "react";
import {SchmitterContext} from "../utils/context.ts";

interface Props {
    size?: string
}

const Avatar = ({size}: Props) => {
    const {user, changeAvatar, changeName} = useContext(SchmitterContext);
    return (
        <img
            onClick={() => {
                const url = prompt('Enter Avatar');
                changeAvatar(url!);
            }}
            className={`user-avatar ${size ?? ''}`} src={user.avatar} alt={user.name}
            onContextMenu={() => {
                const name = prompt('Enter Name');
                changeName(name!);
            }}
        />
    );
};

export default Avatar;