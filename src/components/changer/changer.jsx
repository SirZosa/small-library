import React from "react";

export default function Changer({ children, ...rest}){
    return(
        <div {...rest} className="changer">
            {children}
        </div >
    )
}