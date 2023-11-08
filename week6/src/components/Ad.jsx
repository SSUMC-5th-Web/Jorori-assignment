import React, { useState } from "react";
import AdPage from "./AdPage";

export default function Ad() {
    
    const [on, setOn] = useState(true);
    
    const makeOn = () => {
        setOn(true);
    };
    const makeOff = () =>{
        setOn(false);
    };
    

    return <div>
        {on ? <AdPage/> : <> </>}
        <button onClick={on ? makeOff : makeOn}>
            {on? "광고 안보기" : "광고 보기"}
        </button>
    </div>;
}
