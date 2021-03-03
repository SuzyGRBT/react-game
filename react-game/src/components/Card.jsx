import React, { useEffect, useState } from 'react'
import Image from './Image'

function Card({ imageUrl, cardId, handleChange, closeCard }) {
    const [isFlipped, setIsFlipped] = useState(false)

    function flipCardImage() {
        setIsFlipped(true)
    }

    useEffect(() => {
        setIsFlipped(false)
    }, [closeCard])

    return (
        <div 
            className={`card ${ isFlipped ? "flipped" : ""} `} 
            onClick={() => {
                flipCardImage()
                handleChange()
            }}
        >
            <div className='flipCard'>
                <div className='front'> 
                    <Image src={imageUrl} cardid={cardId} /> 
                </div>
                <div className='back' />
            </div>
        </div>
    )
}

export default Card