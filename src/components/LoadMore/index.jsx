import React, {useEffect, useState} from 'react';

function LoadMore({url, limit=20, skip=20}){
    const [products, setProducts] = useState([]);
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    async function fetchProducts(url){
        try{
            setLoading(true);
            const toSkip = count * skip;
            const response = await fetch(`${url}?limit=${limit}&skip=${toSkip}`);
            const result = await response.json();

            if (result && result.products && result.products.length) {
                setProducts((prevData) => {
                    // Filter out products from prevData that are not present in result.products
                    // const filteredPrevData = prevData.filter((prevProduct) => !result.products.some((newProduct) => newProduct.id === prevProduct.id));

                    // Concatenate the filtered prevData with result.products
                    return [...prevData, ...result.products];
                });
            }
            setLoading(false);
        } catch (e) {
            console.log('Error:', e);
            setError(e.message);
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchProducts(url);
    }, [count]);

    if(loading){
        return <div>Loading, please wait.</div>
    }

    if(error){
        return <div>There was an error: {error}</div>
    }

    return (
        <div className={"flex flex-col"}>
            <div className={"flex flex-wrap"}>
                {products && products.length > 0
                    ? products.map((product, index)=>{
                        return (
                            <div
                                key={index}
                                className={"flex flex-row"}
                            >
                                <div className={"flex flex-col justify-between gap-4 border border-gray-800 rounded-lg w-[300px] p-4 m-5"}>
                                    <div className={"flex flex-col justify-start items-center contain-content"}>
                                        <img
                                            src={product.images[0]}
                                            alt={"product image"}
                                            className={"w-[200px] h-[200px]"}
                                        />
                                    </div>
                                    <hr />
                                    <p className={"mt-5"}>{product.description}</p>
                                    <p><strong>Price:</strong> ${product.price}</p>
                                </div>
                            </div>);
                        })
                    : null
                }
            </div>
            <div className={"mt-4"}>
                <button
                    className={`border border-blue-600 px-4 py-2 ${count*skip >= 100 ? 'pointer-events-none bg-gray-400' : ''}`}
                    onClick={()=>setCount(count+1)}
                >
                    Load More
                </button>
            </div>
        </div>
    );
}

export default LoadMore;