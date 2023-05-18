import { useEffect, useState } from "react";

function Select({is, position}){
    const {horizontal, vertical} = position
    useEffect(()=>{
        
    },[])
    return <div id="select" style={{
        display: is ? "block" : "none",
        left: horizontal ? horizontal+'px' : '0px',
        top: vertical ? vertical+'px' : '0px',
    }}>
        <div id="electrivire">Electrivire</div>
        <div id="butterfly">butterfly</div>
        <div id="weepinbell">weepinbell</div>
        <div id="magnezone">magnezone</div>
        <div id="cloyster">cloyster</div>
    </div>
}
export default Select;