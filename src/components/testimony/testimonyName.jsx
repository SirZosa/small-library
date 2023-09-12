import React from "react";

export default function TestimonyName({children, ...rest}){
    return (
        <div {...rest} className="testimony-name">
            {children}
        </div>
    )
}