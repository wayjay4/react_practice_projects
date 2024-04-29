import React, {useState} from 'react';
import data from "./data";

const Accordion = () => {
    const [selected, setSelected] = useState(null);
    const [multiple, setMultiple] = useState([]);
    const [enableMultiSelect, setEnableMultiSelect] = useState(false);

    const handleSingleSelection = (id) => {
        if(id === selected) setSelected(null);
        else setSelected(id);
    };

    const handleMultiSelection = (id) => {
        const copyMultiple = [...multiple];

        // check if selection is already in list, if so close it, else open it
        const indexFound = copyMultiple.indexOf(id);

        if(indexFound === -1) copyMultiple.push(id);
        else copyMultiple.splice(indexFound,1);

        setMultiple(copyMultiple);
    };

    const handleEnableMultiSelect = () => {
        setEnableMultiSelect(!enableMultiSelect);
        setSelected(null);
        setMultiple([]);
    };

    return (
        <div className={"flex flex-col gap-2 h-[100vh] w-[100vw] items-center px-20"}>
            <h1 className={"text-3xl"}>Accordion</h1>

            <button
                className={"border border-black rounded-xl px-4 py-2 bg-blue-800 text-white"}
                onClick={()=>handleEnableMultiSelect()}
            >
                {enableMultiSelect ? (<span>Disable Mulit-Select</span>) : <span>Enable Multi-Select</span>}
            </button>

            {data && data.length > 0
                ? (
                    data.map((dataItem)=>(
                        <div
                            key={dataItem.id}
                            className={"flex flex-col w-[70%]"}
                            onClick={enableMultiSelect ? ()=>handleMultiSelection(dataItem.id) : ()=>handleSingleSelection(dataItem.id)}
                        >
                            <div className={"flex justify-between border border-amber-500 rounded-lg p-4 bg-indigo-500"}>
                                <h3 className={"text-xl text-white"}>{dataItem.question}</h3>
                                <span className={"text-xl"}>+</span>
                            </div>

                            {enableMultiSelect
                                ? multiple.indexOf(dataItem.id) !== -1 && (
                                    <div className="border border-blue-700 rounded-lg bg-indigo-300 flex text-left p-4">{dataItem.answer}</div>
                                )
                                : selected === dataItem.id && (
                                    <div className="border border-blue-700 rounded-lg bg-indigo-300 flex text-left p-4">{dataItem.answer}</div>
                                )
                            }
                        </div>
                    ))
                )
                : (
                    <div>There is no data</div>
                )
            }
        </div>
    );
};

export default Accordion;