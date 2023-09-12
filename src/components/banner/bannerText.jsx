import React from 'react'
import { TypeContext } from './banner'
import classNames from 'classnames'
export default function BannerText({children, ...rest}){
    const {type} = React.useContext(TypeContext)
    const tp = type ? type : 'neutral'
    const bannerTextClasses = classNames('banner-text', `banner-text-${tp}`)
    return (
        <div className={bannerTextClasses} {...rest}>{children}</div>
    )
}