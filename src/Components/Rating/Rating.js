import React from 'react';

function Rating({ rating }) {
    const maxStars = 5;
    const filledStars = parseInt(rating); 
    const emptyStars = maxStars - filledStars

return(
    <div className='stars'>
       {Array.from({ length: filledStars }, (_, i) => (
                <span
                    className='filled-star'
                    key={'full-star' + i}>
                    &#9733;
                </span>
                  
            ))}
        {Array.from({ length: emptyStars }, (_, i) => (
                <span
                    className='empty-star'
                    key={'empty-star' + i}>
                    &#9733; 
                </span>
            ))}
    </div>
)
}

export default Rating;
