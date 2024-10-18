
import React from "react";
import ReactDOM from "react-dom/client";
import Model from "./Model";




const AppLayout=()=>{
    return(
        <div>
            <Model/>
        </div>
    )
}


const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>)