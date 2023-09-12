import React, { Children } from "react";
import { BsQuote } from 'react-icons/bs'
import { BiLogoGithub } from 'react-icons/bi'
import DotPattern from '../../assets/DotPattern.svg'
export default function Testimony({children, src, ...rest}){
    if (src){
        return (
        <div {...rest} className="testimony">
            <img src={src} alt="imgage of src" />
            <div>
                <span className="quote"><BsQuote/></span>
                {children}
            </div>
        </div>
        )
    }
    else{
        return (
        <div {...rest} className="testimony-no-src">
            <img src={DotPattern} alt="Dot pattern img" />
            <div className="testimony-no-src-info">
                <div className="testimony-no-src-organization">
                    <BiLogoGithub/>
                    <h3>Git<span>hub</span></h3>
                </div>
                {children}
            </div>
    </div>
        )
    }
}