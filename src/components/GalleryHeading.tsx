import imageQueryStore from "@/stores/imageQueryStore";

const GalleryHeading = () => {
  const imageType = imageQueryStore((store) => store.imageQuery.imageType);

  const imageTypeCapitalized = imageType
    ? imageType.charAt(0).toUpperCase() + imageType.slice(1)
    : "";
  return (
    <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
      {imageTypeCapitalized} Images
    </h1>
  );
};

export default GalleryHeading;
