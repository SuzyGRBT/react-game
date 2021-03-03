import React, { useState, useEffect, useMemo } from 'react'
import { Button } from 'antd'
import useSound from 'use-sound'
import Card from './Card'
import images from '../utils/img/images'
import correct from '../utils/sound/correct.mp3'
import wrong from '../utils/sound/wrong.mp3'

function Board({counter, setCounter, isFlipped}) {
    const [open, setOpen] = useState([]);
    const [goodGuess, setGoodGuess] = useState([]);
    const [board, setBoard] = useState([]);
    const [isClicked, setIsClicked] = useState(false);

    const [correctFlip] = useSound(
        correct, 
        { volume: 0.2 }
        );
        
    const [wrongFlip] = useSound(
        wrong,
        { volume: 0.2 }
    );

    const imagePairsList = [...images, ...images];

    let imagePairs = useMemo(() => shuffle(imagePairsList).map(image => ({imageUrl: image.url, cardId: image.id})), [images]);

    function shuffle(array) {
        return array.sort(() => 0.5 - Math.random())
    }
       
    function handleChange (index) {
        setOpen((opened) => [...opened, index])
    }
        
    // let isFlipped = true;
    const gameCards = imagePairs.map((image, index) => {

        if (open.includes(index)) {
            isFlipped = true
            
        };
            
        if (goodGuess.includes(image.cardId)) {
            isFlipped = true;
            console.log(open)
        };

        return(
            <Card 
                // onClick={() => handleChange(index)} 
                key={index}
                closeCard={isFlipped}
                // isFlipped={isFlipped}
                imageUrl={image.imageUrl}
                handleChange={() => handleChange(index)}
        />)
    })

    function generateBoard() {
        setCounter(0);
        shuffle(imagePairs);
        setIsClicked(true);
        setBoard(gameCards);
    }

    useEffect(() => {
        if (open < 2) return;

        const firstCard = imagePairs[open[0]];
        const secondCard = imagePairs[open[1]];

        if (secondCard && firstCard.cardId === secondCard.cardId) {
            setGoodGuess([...goodGuess, firstCard.cardId], correctFlip())
        }

        if (secondCard && firstCard.cardId !== secondCard.cardId) {
            setTimeout(() => {
                wrongFlip();
                // isFlipped = false;
            }, 400)
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
            <Button className='buttonGame' type="primary" onClick={() => generateBoard()}>New Game</Button>
            <div className='gameBoard'>
                { !isClicked ? board : gameCards }
            </div>
        </div>
    )
}

export default Board