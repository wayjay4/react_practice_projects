import './App.css';
import Accordion from "./components/Accordion";
import RandomColor from "./components/RandomColor";
import StarRating from "./components/StarRating";
import ImageSlider from "./components/ImageSlider";

function App() {
  return (
      <div className={"App h-full w-full"}>
          {/*<Accordion />*/}
          {/*<RandomColor />*/}
          {/*<StarRating numberOfStars={10} />*/}
          <ImageSlider url={"https://picsum.photos/v2/list"} page={1} limit={10} />
      </div>
  );
}

export default App;
