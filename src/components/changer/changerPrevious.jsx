import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from 'react-icons/ai'
export default function ChangerPrevious({...rest}){
    return(
        <div {...rest} className="changer-previous">
        <AiOutlineArrowLeft/>
        </div>
    )
}