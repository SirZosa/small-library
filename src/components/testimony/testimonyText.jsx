import React from "react";

export default function TestimonyText({children, ...rest}){
    return (
        <div {...rest} className="testimony-text">
            {children}
        </div>
    )
}