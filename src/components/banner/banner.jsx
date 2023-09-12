import React from 'react'
import classNames from 'classnames'
import { BiSolidCheckCircle, BiErrorAlt } from 'react-icons/bi'
import { AiFillWarning } from 'react-icons/ai'
import { BsInfoLg } from 'react-icons/bs'

const TypeContext = React.createContext()

export default function Banner({children, type, ...rest}){
    const tp = type ? type : 'neutral'
    const color = type === 'success' ? 'green' : type === 'warning' ? 'yellow' : type === 'error' ? 'red' : 'blue'
    const allClasses = classNames('banner', `color-${color}`)
    const bannerTextClasses = classNames('banner-text', `banner-text-${tp}`)
    return (
        <TypeContext.Provider value={{type}}>
        <div className={allClasses} {...rest}>
            {children}
        </div>
        </TypeContext.Provider>
    )
}

export { TypeContext }