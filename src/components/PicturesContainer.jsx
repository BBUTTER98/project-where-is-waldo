import { useSelector } from "react-redux";
import PictureContainer from "./PictureContainer";
function PicturesContainer(){
    const data = useSelector(state=>state.pokemons);

    const pictures = data.map((data)=> <PictureContainer name={data.name} key={data.name} difficulty={data.difficulty} checked={data.checked}/>)
    return <div id="pictures-container">
        {pictures}
    </div>
}
export default PicturesContainer