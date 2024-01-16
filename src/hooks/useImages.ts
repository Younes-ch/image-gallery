import Image from "@/entities/Image";
import APIClient, { FetchResponse } from "@/services/api-client";
import { ImageQuery } from "@/stores/imageQueryStore";
import { useInfiniteQuery } from "@tanstack/react-query";
import { AxiosError } from "axios";
import ms from "ms";

const apiClient = new APIClient<Image>();

const useImages = (imageQuery: ImageQuery) => useInfiniteQuery<FetchResponse<Image>, AxiosError>({
    queryKey: ["images", imageQuery],
    queryFn: ({ pageParam = 1 }) => apiClient.getAll({
        params: {
            q: imageQuery.query,
            image_type: imageQuery.imageType,
            order: imageQuery.sortOrder,
            safesearch: true,
            page: pageParam
        }
    }),
    getNextPageParam: (lastPage, allPages) => {
        return lastPage.hits.length >= 1 ? allPages.length + 1 : undefined;
    },
    staleTime: ms('24h'),
    retry: 1,
});

export default useImages;
