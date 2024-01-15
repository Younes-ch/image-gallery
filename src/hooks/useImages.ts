import Image from "@/entities/Image";
import APIClient from "@/services/api-client";
import { ImageQuery } from "@/stores/imageQueryStore";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Image>();

const useImages = (imageQuery: ImageQuery) => useQuery({
    queryKey: ["images", imageQuery],
    queryFn: () => apiClient.getAll({
        params: {
            q: imageQuery.query,
        }
    }),
});

export default useImages;
