import React, {useEffect, useState} from 'react';

const RandomColor = () => {
    const [color, setColor] = useState('');
    const [colorType, setColorType] = useState('hex');

    useEffect(() => {
        colorType === 'hex' ? handleCreateRandomHexColor() : handleCreateRandomRgbColor();
    }, [colorType]);

    const randomColorUtility = (length) => {
        return Math.floor(Math.random()*length);
    };

    const handleCreateRandomHexColor = () => {
        const hexValues = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
        let hexColor = '#';

        for(let i = 0; i<6; i++) {
            hexColor += hexValues[randomColorUtility(hexValues.length)];
        }

        setColor(hexColor);
    };

    const handleCreateRandomRgbColor = () => {
        const r = randomColorUtility(256);
        const g = randomColorUtility(256);
        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);
    };

    return (
        <div className={"h-full"} style={{background: `${color}`}}>
            <div className={"flex flex-col justify-start"}>
                <div className={"h-full flex gap-3 justify-between items-start w-[60%] mx-auto"}>
                    <button onClick={()=>setColorType('hex')} className={"border border-blue-600 rounded-lg px-4 py-2 bg-blue-300"}>Create Hex Color</button>
                    <button onClick={()=>setColorType('rgb')} className={"border border-blue-600 rounded-lg px-4 py-2 bg-blue-300"}>Create RGB Color</button>
                    <button onClick={colorType === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor} className={"border border-blue-600 rounded-lg px-4 py-2 bg-blue-300"}>Create Generate Random Color</button>
                </div>
                <div className={"mt-[200px] flex justify-center"}>
                    <h2 className={"text-6xl text-white p-10"}>Color: {color}</h2>
                </div>
            </div>
        </div>
    );
};

export default RandomColor;