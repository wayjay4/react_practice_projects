import MenuList from "./MenuList";
import './styles.css'

export default function TreeView({ menus = [] }) {
    return (
        <div className="tree-view-container">
            <MenuList list={menus} />
        </div>
    );
}