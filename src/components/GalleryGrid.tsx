import useImages from "@/hooks/useImages";
import ImageCard from "./ImageCard";
import { Skeleton } from "./ui/skeleton";
import imageQueryStore from "@/stores/imageQueryStore";
import React from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { BookmarkCheck } from "lucide-react";

const SkeletonGrid = () => {
  const skeletons = new Array(16).fill(1);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-3">
      {skeletons.map((_, index) => (
        <div key={index} className="flex flex-col gap-2">
          <Skeleton className="w-full h-[150px] rounded-sm" />
          <div className="flex gap-3 justify-center items-center">
            <Skeleton className="h-12 w-14 rounded-full" />
            <Skeleton className="w-full h-[20px] rounded-md" />
          </div>
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
    <div className="container">
      {error && error.response?.status !== 400 ? (
        <h1 className="text-destructive scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-center">
          An error has occured.
        </h1>
      ) : (
        <InfiniteScroll
          dataLength={fetchedImagesCount}
          next={() => fetchNextPage()}
          hasMore={!!hasNextPage}
          loader={
            error && error?.response?.status === 400 ? (
              <Alert className="my-8 select-none">
                <BookmarkCheck className="h-10 w-5" />
                <AlertTitle>Woo hoo!</AlertTitle>
                <AlertDescription>
                  You have seen it all.
                </AlertDescription>
              </Alert>
            ) : (
              <SkeletonGrid />
            )
          }
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
