import React, { useState } from "react";

export default function Player({ playerName, playerValue }) {
    
    const [editOrSave, changeEditOrSave] = useState("Edit");
    const [disabled, changeEditDisabled] = useState(true); 
    const [inputValue, setInputValue] = useState(playerName)
    function changebutton() {

        changeEditOrSave((prevState) => {
            return prevState === "Edit" ? "Save" : "Edit"
        });
        changeEditDisabled(!disabled);
    }

    return (
        <div className="  mb-3 p-3 border border-primary"  >
            <input disabled={disabled} type="text" value={inputValue} placeholder={playerName} readOnly={disabled} onChange={(e) => setInputValue(e.target.value)}></input>
            <h4>{playerValue}</h4>
            <input type="button" onClick={changebutton} value={editOrSave}></input>
        </div>
    );
}
