import React, {useState} from "react";

function TypeMe() {
    const [inputValue, setInputValue] = useState('');
    const [showMessage, setShowMessage] = useState(false);

    function handleInputChange(e) {
        setInputValue(e.target.value);
    }

    function handleBlur() {
        if (inputValue === "") {
            setShowMessage(true);
        }
        else {
            setShowMessage(false);
        }
    }

    return (
        <div className="typeme">
            <input type="text" value={handleInputChange} onBlur={handleBlur} />
            {showMessage && <p style={{color : "red"}}>Please type in here!</p>}
        </div>
    );
}

export default TypeMe