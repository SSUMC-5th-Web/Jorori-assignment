import React, { useState } from "react";
import AdPage from "./AdPage";

export default function Ad() {
    
    const [on, setOn] = useState(true);
    const [btn, setBtn] = useState("광고 안보기");
    const turnOn = () =>{
        setOn(true);
        setBtn("광고 안보기");

    };
    const turnOff = () =>{
        setOn(false);
        setBtn("광고 보기");
    };

    return <div>
        {on ? <AdPage/> : <> </>}
        <button onClick={on ? turnOff : turnOn}>
            {btn}
        </button>
    </div>;
}
