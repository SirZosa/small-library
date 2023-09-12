import React from "react";
import { AiOutlineArrowDown, AiOutlineArrowLeft, AiOutlineArrowRight, AiOutlineArrowUp} from 'react-icons/ai'
export default function ChangerNext({...rest}){
    return(
        <div {...rest} className="changer-next">
        <AiOutlineArrowRight/>
        </div>
    )
}