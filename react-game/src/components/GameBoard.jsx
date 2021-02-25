import React, { useState, useEffect } from 'react'
import images from '../img/images'

function Board() {
    const [open, setOpen] = useState([]);
    const [goodGuess, setGoodGuess] = useState([]);

    const imagePairs = [...images, ...images];

    function handleChange (index) {
        setOpen((opened) => [...opened, index])
    }

    useEffect(() => {
        if (open < 2) return;

        const firstCard = imagePairs[open[0]];
        const secondCard = imagePairs[open[1]];

        if (secondCard && firstCard.id === secondCard.id) {
            setGoodGuess([...goodGuess, firstCard.id])
        }

        if (open.length === 2) {
            setTimeout(() => setOpen([]), 1000)
        }
    }, [open]);

    return (
        <div className='board'>
            {imagePairs.map((image, index) => {

                let isFlipped = false;

                if (open.includes(index)) {
                    isFlipped = true
                };
                if(goodGuess.includes(image.id)) {
                    isFlipped = true
                };

                return (
                    <div 
                    className={`card ${isFlipped ? "flipped" : ""} `} 
                    key={index}
                    onClick={() => handleChange(index)}
                    >
                        <div className='flipCard'>
                            <div className='front'>
                                <img src={image.url} alt='card' width='100%' /> 
                            </div>
                            <div className='back' />
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Board