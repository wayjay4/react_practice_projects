import './App.css';
import Accordion from "./components/Accordion";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/ImageSlider";
import LoadMore from "./components/LoadMore";
import TreeView from "./components/TreeView";
import menus from "./components/TreeView/data";

function App() {
  return (
      <div className={"App h-full w-full"}>
          {/*<Accordion />*/}
          {/*<RandomColor />*/}
          {/*<StarRating numberOfStars={10} />*/}
          {/*<ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />*/}
          {/*<LoadMore url={"https://dummyjson.com/products"} limit={20} skip={20} />*/}
          <TreeView menus={menus} />
      </div>
  );
}

export default App;
