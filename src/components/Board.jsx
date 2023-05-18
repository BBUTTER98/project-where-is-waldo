import { useEffect, useRef, useState } from "react";
import Select from "./Select";
import { useDispatch, useSelector } from "react-redux";
import { checkedPokemon } from "../store";

function Board() {
	const dispatch = useDispatch();
	const boardRef = useRef(null);
	const [is, setIs] = useState(false);
	const [position, setPosition] = useState({ horizontal: 0, vertical: 0 });
	const data = useSelector((state) => state.pokemons);
	const time = useSelector((state) => state.time);
    const finish = data.filter((pokemon) => pokemon.checked === true);
	useEffect(() => {
		const handlePoinerPosition = (event) => {
			const { pageX, pageY, target } = event;
			if (target.id === "") {
				setPosition({
					horizontal: parseInt(pageX),
					vertical: parseInt(pageY),
				});
			}
			const wynik = data.filter((obj) => {
				if (obj.name === target.id) {
					if (
						position.horizontal > obj.horizontal[0] &&
						position.horizontal < obj.horizontal[1]
					) {
						if (
							position.vertical > obj.vertical[0] &&
							position.vertical < obj.vertical[1]
						) {
							return obj;
						}
					}
				}
			});
			if (wynik.length > 0) {
				dispatch(checkedPokemon(wynik[0].name));
			}
			setIs((previousIs) => !previousIs);	
		};
		boardRef.current.addEventListener("click", handlePoinerPosition);
		return () => {
			boardRef.current.removeEventListener("click", handlePoinerPosition);
		};
	}, [position]);
    useEffect(()=>{
        if (finish.length === 5) {
			alert(`Congratulations, you beat my game with time ${time}`);
		}
    },[finish])
	return (
		<div
			className="board"
			ref={boardRef}
			style={{
				height: "70%",
				width: "900px",
			}}>
			<Select is={is} position={position} />
		</div>
	);
}
export default Board;
