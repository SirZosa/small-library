import React from "react";

export default function TestimonyOrganization({children, ...rest}){
    return(
        <div {...rest} className="testimony-organization">
            {children}
        </div>
    )
}