import React from "react";

export default function ChangerText({ children,  ...rest}){
    return(
        <div {...rest} className="changer-text">
        {children}
        </div>
    )
}