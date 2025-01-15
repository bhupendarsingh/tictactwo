import React, { useState } from "react";

export default function PlayBox({player1, player2}) {
    const [playerTurn, changePlayer] = useState("X")
    const [gameArray, markclick] = useState([
        ["-", "-", "-"],
        ["-", "-", "-"],
        ["-", "-", "-"]]);

    const [checkBoxOff, setCheckBoxOff] = useState(false);
    
    let activePlayerName;
    if(playerTurn==="X"){
        activePlayerName= player1;
    }
    else{activePlayerName=player2}
    
    function updateCheckBoxOff() {
        setCheckBoxOff(!checkBoxOff);
    }
    function resetgame() {
        markclick([
            ["-", "-", "-"],
            ["-", "-", "-"],
            ["-", "-", "-"]]);
        setCheckBoxOff(false);
        changePlayer("X");
    }
    function youWon(arrayDummy) {
        alert(`${activePlayerName} has won`);
        updateCheckBoxOff();
        markclick(arrayDummy)
        return;
    }

    function handleClick(rowIndex, colIndex) {          // main function to deal with all the button clicks in the playbox

        if (gameArray[rowIndex][colIndex] !== "-") {    //if wrong check box is pressed  which is already has been checked
            alert("Cant click there, already marked");
            return;
        }

        const arrayDummy = gameArray.map(row => [...row]);  //creates dummyarray
        arrayDummy[rowIndex][colIndex] = playerTurn;        //value changed in dummy array here       

        if (arrayDummy[rowIndex].every(colCheck => (colCheck === playerTurn))) { //checks fro the horizontal win
            youWon();
        }

        let checkWinBlocks = true                        // a variable which when true will use used later to call win function
        for (let i = 0; i < 3; i++) {                    // column win code starts
            if (arrayDummy[i][colIndex] !== playerTurn) {
                checkWinBlocks = false
            }
        }
        let checkWinDiag1 = true  
        for (let i=0 , j=0; i < 3 && j<3; i++, j++) {                    // diagnol left to down right
            if ((arrayDummy[i][i] !== playerTurn)) {
                checkWinDiag1 = false
            }
        }


        let checkWinDiag2 = true 
        for (let i = 0; i < 3; i++) {                    // column right to down left
            if (arrayDummy[2-i][i] !== playerTurn) {
                checkWinDiag2 = false
            }
        }


     
        if (checkWinBlocks||checkWinDiag1||checkWinDiag2) {
            youWon(arrayDummy);
             
        }                                                    // column win code Ends

        changePlayer((turn) => (turn === "X" ? "O" : "X"));   //change the player turn variable
        markclick(arrayDummy);                                //main array is changed with this

    }
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <table className="table table-bordered" >
                {gameArray.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {row.map((col, colIndex) => (
                            <button disabled={checkBoxOff} onClick={() => handleClick(rowIndex, colIndex)} >
                                <td className="text-center align-middle p-3 border border-primary" key={colIndex}>{col}</td>
                            </button>
                        ))}</tr>
                ))}
            </table>
            <button onClick={resetgame}>reset game</button>
        </div>
    )
}