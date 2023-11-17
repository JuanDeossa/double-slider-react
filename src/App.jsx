import { MultiRangeSlider } from "./MultiRangeSlider/MultiRangeSlider";

function App() {
  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "gray",
        display: "grid",
        placeContent: "center",
      }}
    >
      <MultiRangeSlider
        min={1}
        max={10}
        defaultMin={3}
        defaultMax={5}
        onChange={(e) => {console.log(e)}}
      />
    </div>
  );
}

export default App;
