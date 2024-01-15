import NavBar from "@/components/ui/navbar";
import GalleryGrid from "./components/GalleryGrid";
import ImageTypeSelector from "./components/ImageTypeSelector";

function App() {
  return (
    <>
      <NavBar />
      <div className="flex flex-col ml-40 mb-5 gap-10 select-none">
          <ImageTypeSelector />
      </div>
      <GalleryGrid />
    </>
  );
}

export default App;
