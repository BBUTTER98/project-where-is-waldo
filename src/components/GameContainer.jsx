import Board from "./Board"

function GameContainer(){
    return <div id="container">
        <h1 id="board-header">Click anywhere to start</h1>
        <Board />
    </div>
}
export default GameContainer