import React, {useState} from 'react';
import {FaStar} from "react-icons/fa";

const StarRating = ({numberOfStars = 5}) => {
    const [rating, setRating] = useState(-1);
    const [currentRating, setCurrentRating] = useState(-1);

    const handleOnMouseOver = (key) => {
        setRating(key);
    };

    const handleOnMouseOut = () => {
        if(currentRating >= 0) setRating(currentRating);
        else setRating(-1);
    };

    const handleOnClick = (key) => {
        setCurrentRating(key);
    };

    return(
        <div className={"flex flex-col justify-start items-center"}>
            <h1 className={"text-2xl"}>StarRating</h1>
            <div
                className={"text-2xl mt-9 flex justify-center items-center gap-4"}
                onMouseLeave={()=>handleOnMouseOut()}
            >
                {
                    [...Array(numberOfStars)].map((_, index)=>{
                        return <FaStar
                            key={index}
                            onMouseOver={()=>handleOnMouseOver(index)}
                            onClick={()=>handleOnClick(index)}
                            className={(index<=rating) ? "text-yellow-400" : "text-gray-300"}
                        />
                    })
                }

            </div>
        </div>
    );
};

export default StarRating;