import React, {useEffect, useState} from 'react';

const ScrollIndicator = ({url}) => {
    const [products, setProducts] = useState({});
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [percent, setPercent] = useState(50);

    async function fetchProducts(url){
        setLoading(true);
        try{
            const response = await fetch(url);
            const data = await response.json();

            setProducts(data.products);
            setLoading(false);
        } catch (e) {
            console.log('Error: ', e);
            setError(e.message);
        }
    }

    function handleScrollPercentage(){
        const howMuchScrolled = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

        setPercent((howMuchScrolled/height)*100);
    }

    useEffect(() => {
        fetchProducts(url);
    }, [url]);

    useEffect(() => {
        window.addEventListener("scroll", handleScrollPercentage);

        return () => window.removeEventListener("scroll", handleScrollPercentage);
    }, []);

    if(loading){
        return (
            <div>Data is loading! Please wait...</div>
        );
    }

    if(error){
        return (
            <div>There was an error: {error}</div>
        );
    }

    console.log('products:', products);

    return (
        <div className={"flex flex-col w-full"}>
            <div className={"fixed top-0 w-full"}>
                <div className={"bg-green-700 py-6 flex flex-col"}>
                    <h1>Top Row</h1>
                </div>
                <div className={"w-full bg-green-300 h-7 p-0 m-0"}>
                    <div className={`bg-blue-800`} style={{width: `${percent}%`}}>&nbsp;</div>
                </div>
            </div>
            <div className={"flex flex-col justify-top items-center"}>
                {products && products.length > 0
                    ? products.map((product, index)=><p>{product.title}</p>)
                    : null
                }
            </div>
        </div>
    );
};

export default ScrollIndicator;