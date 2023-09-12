import React from 'react'
import { AiOutlineCloudUpload } from 'react-icons/ai'
export default function Card({children, title, ...rest}){
    return (
        <div className='card' {...rest}>
            <div className='card-icon'><AiOutlineCloudUpload/></div>
            <div className='card-info'>
               {children}
            </div>
        </div>
    )
}