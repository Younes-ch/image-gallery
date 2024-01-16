import NavBar from "@/components/ui/navbar";
import GalleryGrid from "./components/GalleryGrid";
import GalleryHeading from "./components/GalleryHeading";
import ImageTypeSelector from "./components/ImageTypeSelector";
import SortSelector from "./components/SortSelector";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col items-center gap-4 select-none">
        <GalleryHeading />
        <div className="flex flex-wrap gap-3 justify-center">
          <ImageTypeSelector />
          <SortSelector />
        </div>
        <GalleryGrid />
      </div>
    </>
  );
}

export default App;
