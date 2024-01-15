import useImages from "@/hooks/useImages";
import ImageCard from "./ImageCard";
import { Skeleton } from "./ui/skeleton";
import imageQueryStore from "@/stores/imageQueryStore";

const SkeletonGrid = () => {
  const skeletons = new Array(16).fill(1);

  return skeletons.map((_, index) => (
    <div key={index} className="flex flex-col gap-2">
      <Skeleton className="w-[300px] h-[150px] rounded-sm" />
      <Skeleton className="w-[300px] h-[10px] rounded-md" />
      <Skeleton className="w-[300px] h-[10px] rounded-md" />
    </div>
  ));
};

const GalleryGrid = () => {
  const imageQuery = imageQueryStore((store) => store.imageQuery);
  const { data, error, isLoading } = useImages(imageQuery);

  return (
    <div className="container mx-auto px-4">
      {error ? (
        <h1 className="text-destructive scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          An error has occured.
        </h1>
      ) : (
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {isLoading ? (
            <SkeletonGrid />
          ) : (
            data?.hits.map((image) => (
              <ImageCard key={image.id} image={image} />
            ))
          )}
        </div>
      )}
    </div>
  );
};

export default GalleryGrid;
