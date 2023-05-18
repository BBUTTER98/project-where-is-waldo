import PicturesContainer from "./PicturesContainer";
import Timer from "./Timer";
import Title from "./Title";

function Header(){
    return <div id="header">
        <Title />
        <PicturesContainer />
        <Timer />
    </div>
}
export default Header;