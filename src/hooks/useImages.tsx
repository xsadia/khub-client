import { useCallback, useEffect, useContext, useState, createContext, ReactNode } from "react";
import { api } from "../services/api";

type Tag = {
    _id: string;
    tagName: string;
};

type Image = {
    _id: string;
    url: string;
    createdAt: string;
    tags: Tag[];
};

type ImagesContextData = {
    images: Image[];
};

type ImagesProviderProps = {
    children: ReactNode;
};

const imagesContext = createContext({} as ImagesContextData);

export function ImagesProvider({ children }: ImagesProviderProps) {
    const [images, setImages] = useState<Image[]>();

    const getImages = useCallback(async () => {
        const response = await api.get('/images');

        setImages(response.data);
    }, []);

    useEffect(() => {
        getImages();
    }, [getImages]);

    return (
        <imagesContext.Provider value={{ images }} >
            {children}
        </imagesContext.Provider>
    );
};

export const useImages = () => {
    const context = useContext(imagesContext);
    return context;
};