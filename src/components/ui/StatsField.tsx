import {useContext} from "react";
import {SchmitterContext} from "../../utils/context.ts";
import type {StatsProps} from "../../App.tsx";

interface Props {
    name: string,
    value: number,
    field:keyof StatsProps
}

const StatsField = ({name, value, field}: Props) => {
    const { changeStats,increment,decrement} = useContext(SchmitterContext);
    return (
        <div
            onClick={() => {
                changeStats(increment, value,field);
            }}
            onContextMenu={() => {
                changeStats(decrement, value,field);

            }}

        > {name}: {value}
        </div>
    );
};

export default StatsField;