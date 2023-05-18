import { useEffect, useMemo, useState } from "react"
import { useDispatch, useSelector } from "react-redux";
import { addTime } from "../store";

function Timer(){
    const data = useSelector(state=>state.pokemons);
    const time = useSelector(state=>state.time);
    const dispatch = useDispatch()
    const finish = data.filter(pokemon=>pokemon.checked===true);
    
    useEffect(()=>{
        const timer = setInterval(()=>{
            dispatch(addTime())
        },1000)
        if(finish.length===5){
            clearInterval(timer);
        }
        return ()=>{
            clearInterval(timer);
        }
    },[finish])
    return <div className="time">{time}s</div>
}
export default Timer