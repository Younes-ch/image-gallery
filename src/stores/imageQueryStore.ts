import { create } from "zustand";

export interface ImageQuery {
    query?: string;
    imageType?: "" | "illustration" | "vector";
    sortOrder?: "" | "latest";
}

interface ImageQueryStore {
    imageQuery: ImageQuery;
    setQuery: (query: string) => void;
    setImageType: (imageType: "" | "illustration" | "vector") => void;
    setSortOrder: (sortOrder: "" | "latest") => void;
}

const imageQueryStore = create<ImageQueryStore>(set => ({
    imageQuery: {},
    setQuery: (query: string) => set(() => ({ imageQuery: { query } })),
    setImageType: (imageType: "" | "illustration" | "vector") => set((store) => ({ imageQuery: { ...store.imageQuery, imageType } })),
    setSortOrder: (sortOrder: "" | "latest") => set((store) => ({ imageQuery: { ...store.imageQuery, sortOrder } }))
}));

export default imageQueryStore;