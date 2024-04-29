import { useState } from "react";
import MenuList  from "./MenuList";
import {FaMinus, FaPlus} from 'react-icons/fa'

export default function MenuItem({ item }) {
    const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

    function handleToggleChildren(label) {
        setDisplayCurrentChildren({
            ...displayCurrentChildren,
            [label]: !displayCurrentChildren[label],
        });
    }

    return (
        <li>
            <div className="menu-item flex gap-4">
                <p className={"flex ml-4 pl-4"}>{item.label}</p>
                {item && item.children && item.children.length ? (
                    <span onClick={() => handleToggleChildren(item.label)}>
                        {
                            displayCurrentChildren[item.label] ? <FaMinus color="#fff" size={25} /> : <FaPlus color="#fff" size={25} />
                        }
                    </span>
                ) : null}
            </div>

            {item && item.children && item.children.length > 0 && displayCurrentChildren[item.label] ? (
                <div className={"ml-10"}>
                    <MenuList list={item.children} />
                </div>
            ) : null}
        </li>
    );
}