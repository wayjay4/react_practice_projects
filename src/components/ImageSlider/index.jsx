import React, {useEffect, useState} from 'react';
import {BsArrowLeftCircleFill, BsArrowRightCircleFill} from "react-icons/bs";

function ImageSlider({url, page=1, limit=10}) {
    const [images, setImages] = useState({});
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [currentSlide, setCurrentSlide] = useState(0)

    async function fetchImages(url){
        try {
            setLoading(true);
            const response = await fetch(`${url}?page=${page}&limit=${limit}`);
            const data = await response.json();

            if (data) {
                setImages(data);
            }

            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.log('error:', e);
            setError(e.message);
        }
    }

    function handleCircleClick(index){
        setCurrentSlide(index);
    }

    function handleLeftArrowClick(){
        if(currentSlide === 0) setCurrentSlide(images.length-1);
        else setCurrentSlide(currentSlide-1)
    }

    function handleRightArrowClick(){
        if(currentSlide === images.length-1) setCurrentSlide(0);
        else setCurrentSlide(currentSlide+1)
    }

    useEffect(() => {
        if(url) fetchImages(url).then();
    }, []);

    if(loading){
        return (
            <div>
                The content is loading. Please wait.
            </div>
        );
    }

    if(error){
        return (
            <div>
                There was an error: {error}
            </div>
        );
    }

    console.log('images:', images);
    console.log('currentSlide:', currentSlide);

    return (
        <div className={"relative m-auto flex justify-center items-center w-[600px] h-450px border border-gray-400 rounded-lg"}>
            <BsArrowLeftCircleFill
                className={"absolute w-[2rem] h-[2rem] text-white left-[1rem]"}
                onClick={()=>handleLeftArrowClick()}
            />
            {images && images.length > 0
                ? images.map((image, index) => {
                    console.log('index: ', index);
                    console.log(index === currentSlide);
                    return (
                        <img
                            key={image.id}
                            src={image.download_url}
                            alt={image.download_url}
                            className={"rounded-[0.5rem] w-full h-full"}
                            style={(index !== currentSlide) ? {display: 'none'} : {}}
                        />
                    );
                })
                : null
            }
            <BsArrowRightCircleFill
                className={"absolute w-[2rem] h-[2rem] text-white right-[1rem]"}
                onClick={()=>handleRightArrowClick()}
            />

            <div className={"absolute bottom-[1rem] flex gap-2"}>
                {images && images.length > 0
                    ? images.map((_, index)=>{
                        return <div
                            className={`rounded-3xl w-[1rem] h-[1rem] ${index === currentSlide ? 'bg-orange-600' : 'bg-gray-300'}`}
                            onClick={()=>handleCircleClick(index)}
                        />
                    })
                    : null
                }
            </div>
        </div>
    );
}

export default ImageSlider;