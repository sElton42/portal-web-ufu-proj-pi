import React from "react";

const ResultDisplayVagasOpts = (props) => (
    <option>
            {props.tipo + " - " + props.area + " - " + props.empresa + " - " + props.local}
    </option>
)

export default ResultDisplayVagasOpts;