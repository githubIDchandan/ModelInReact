
import { useEffect } from "react";


const ShowModel=({trackmodelvalue})=>{

    useEffect(()=>{
        document.body.style.overflowY="hidden";
        return()=>{
            document.body.style.overflowY="scroll";
        }
       })
       
    return(
       <div>
        <div className="modelWrapper"></div>
        <div className="modelParent">
            <div className="modelheader">
            <h1 className="header">Modal Header</h1>
            <button className="modelbtn" onClick={trackmodelvalue}>X</button>
            </div>
            <div className="modelpara"> 
            <h4 className="para">Hello World!</h4>
            <h4 className="para">Modals are awesome!</h4>
            </div>
            <h3 className="modelfooter">Modal Footer</h3>
            
        </div>
       </div>
    )
}

export default ShowModel;