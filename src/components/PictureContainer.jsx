import electrivire from "../assets/tabPokemon/electrivire.png";
import cloyster from "../assets/tabPokemon/cloyster.png";
import magnezone from "../assets/tabPokemon/magnezone.png";
import weepinbell from "../assets/tabPokemon/weepinbell.png";
import butterfly from "../assets/tabPokemon/012.png";
import { GoCheck } from "react-icons/go";
import { GoX } from "react-icons/go";
function PictureContainer({ name, checked, difficulty }) {
	const picturesLocations = [
		{ electrivire },
		{ cloyster },
		{ magnezone },
		{ weepinbell },
		{ butterfly },
	];
	const extractedDirectory = picturesLocations.filter((pictureDir) => {
		return Object.keys(pictureDir)[0] === name;
	});
	const icon = checked ? <GoCheck className="react-icon valid"/> : <GoX  className="react-icon invalid"/>
	const color = setColor(difficulty)
	return (
		<div className="picture-container">
			<div className="photo">
				<img
					src={extractedDirectory[0][name]}
					alt={name}
					className="header-pictures"
				/>
			</div>
			<div className="name">{name}</div>
			<div className="icon">
				{icon}
			</div>
			<div className="difficulty" style={{
				borderBottomColor: color,
			}}>{difficulty}</div>
		</div>
	);
}
const setColor = (difficulty)=>{
	let color;
	switch(difficulty){
		case 'very easy':
			color = '#82CD47'
			break;
		case 'easy':
			color = '#379237'
			break;
		case 'medium':
			color = '#EBB02D'
			break;
		case 'hard':
			color = '#E74646'
			break;
		case 'very hard':
			color = '#850000'
			break;
		default:
			color = 'black'
	}
	return color;
}
export default PictureContainer;
