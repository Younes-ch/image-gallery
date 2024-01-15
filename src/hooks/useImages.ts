import Image from "@/entities/Image";
import APIClient from "@/services/api-client";
import { useQuery } from "@tanstack/react-query";

const apiClient = new APIClient<Image>();

const useImages = () => useQuery({
    queryKey: ["images"],
    queryFn: apiClient.getAll,
});

export default useImages;
