import React, { useState, useEffect, useMemo } from 'react'
import useSound from 'use-sound'
import images from '../utils/img/images'
import correct from '../utils/sound/correct.mp3'
import wrong from '../utils/sound/wrong.mp3'

function Board({counter, setCounter}) {
    const [open, setOpen] = useState([]);
    const [goodGuess, setGoodGuess] = useState([]);
        
    const imagePairsList = [...images, ...images];
    const imagePairs = useMemo(() => shuffle(imagePairsList), [images])
    
    const [correctFlip] = useSound(
        correct, 
        { volume: 0.2 }
        );
        
    const [wrongFlip] = useSound(
        wrong,
        { volume: 0.2 }
    );
   
    function handleChange (index) {
        setOpen((opened) => [...opened, index])
    }

    function shuffle(array) {
         return array.sort(() => 0.5 - Math.random())
    }

    useEffect(() => {
        if (open < 2) return;

        const firstCard = imagePairs[open[0]];
        const secondCard = imagePairs[open[1]];

        if (secondCard && firstCard.id === secondCard.id) {
            setGoodGuess([...goodGuess, firstCard.id], correctFlip())
        }

        if (secondCard && firstCard.id !== secondCard.id) {
            setTimeout(() => wrongFlip(), 400)
        }

        if (open.length === 2) {
            setTimeout(() => {
                setOpen([])
                setCounter(counter + 1)
            }, 1000)
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
                    isFlipped = true;
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