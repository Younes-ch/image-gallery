import useImages from "@/hooks/useImages";
import ImageCard from "./ImageCard";
import { Skeleton } from "./ui/skeleton";
import imageQueryStore from "@/stores/imageQueryStore";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";

const SkeletonGrid = () => {
  const skeletons = new Array(16).fill(1);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {skeletons.map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Skeleton className="w-[300px] h-[150px] rounded-sm" />
          <Skeleton className="w-[300px] h-[10px] rounded-md" />
          <Skeleton className="w-[300px] h-[10px] rounded-md" />
        </div>
      ))}
    </div>
  );
};

const GalleryGrid = () => {
  const imageQuery = imageQueryStore((store) => store.imageQuery);
  const { data, error, fetchNextPage, hasNextPage } = useImages(imageQuery);

  const fetchedImagesCount =
    data?.pages.reduce((total, page) => total + page.hits.length, 0) || 0;

  return (
    <div className="container mx-auto px-4">
      {error ? (
        <h1 className="text-destructive scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          An error has occured.
        </h1>
      ) : (
        <InfiniteScroll
          dataLength={fetchedImagesCount}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={<SkeletonGrid />}
        >
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {data?.pages.map((page, index) => (
              <React.Fragment key={index}>
                {page.hits.map((image) => (
                  <ImageCard key={image.id} image={image} />
                ))}
              </React.Fragment>
            ))}
          </div>
        </InfiniteScroll>
      )}
    </div>
  );
};

export default GalleryGrid;
