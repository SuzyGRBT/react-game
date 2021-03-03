import React from 'react'

function Image({ src, cardId }) {
    return <img src={src} alt='card' width='100%' cardid={cardId} />
}

export default Image