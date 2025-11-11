import {useContext} from "react";
import {SchmitterContext} from "../../utils/context.ts";
import type {StatsProps} from "../../App.tsx";

interface Props {
    name: string,
    value: number,
    field:keyof StatsProps
}

const StatsField = ({name, value, field}: Props) => {
    const { changeStats} = useContext(SchmitterContext);
    return (
        <div
            onClick={() => {
                changeStats(field,1);
            }}
            onContextMenu={(e) => {
                e.preventDefault();
                changeStats(field, -1);

            }}

        > {name}: {value}
        </div>
    );
};

export default StatsField;