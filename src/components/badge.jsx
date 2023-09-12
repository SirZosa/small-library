import React from 'react'
import classNames from 'classnames'
export default function Badge({children, color, shape, size, ...rest}){
    const clr = color ? color : 'gray'
    const form = shape ? shape : 'square'
    const sz = size ? size : 'medium' 
    const allClasses = classNames('badge', `color-${clr}`, `badge-${form}`, `font-${sz}`)
    return (
        <h3 className={allClasses} {...rest}>{children}</h3>
    )
}