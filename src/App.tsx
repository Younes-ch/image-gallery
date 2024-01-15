import NavBar from "@/components/ui/navbar";
import GalleryGrid from "./components/GalleryGrid";
import GalleryHeading from "./components/GalleryHeading";
import ImageTypeSelector from "./components/ImageTypeSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col ml-40 mb-5 gap-10 select-none">
        <GalleryHeading />
        <div className="flex gap-5">
          <ImageTypeSelector />
          <SortSelector />
        </div>
      </div>
      <GalleryGrid />
    </>
  );
}

export default App;
