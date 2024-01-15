import useImages from "@/hooks/useImages";
import ImageCard from "./ImageCard";
import { Skeleton } from "./ui/skeleton";

const SkeletonGrid = () => {
  const skeletons = new Array(16).fill(1, 1, 16);

  return skeletons.map((skeleton, index) => (
    <div className="flex flex-col gap-2">
      <Skeleton key={index} className="w-[300px] h-[150px] rounded-sm" />
      <Skeleton key={index} className="w-[300px] h-[10px] rounded-md" />
      <Skeleton key={index} className="w-[300px] h-[10px] rounded-md" />
    </div>
  ));
};

const GalleryGrid = () => {
  const { data, error, isLoading } = useImages();

  if (error) throw error;

  return (
    <div className="container mx-auto px-4">
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {isLoading ? (
          <SkeletonGrid />
        ) : (
          data?.hits.map((image) => <ImageCard key={image.id} image={image} />)
        )}
      </div>
    </div>
  );
};

export default GalleryGrid;
