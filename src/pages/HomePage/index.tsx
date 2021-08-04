import { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard";
import { Navbar } from "../../components/Navbar";
import { Spinner } from "../../components/Spinner";
import { TagBox } from "../../components/TagBox";
import { useImages } from "../../hooks/useImages";
import { api } from "../../services/api";
import { HomePageContainer, HomePageContent, ImageContainer, SpinnerContainer } from "./styles";

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

export function HomePage() {
    const [initialImages, setInitialImages] = useState<Image[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    const { images } = useImages();

    const getImages = useCallback(async () => {
        setIsLoading(true);
        const response = await api.get('/images');

        setInitialImages(response.data);
        setIsLoading(false);
    }, []);

    useEffect(() => {
        getImages();
    }, [getImages]);

    function filter(checkbox) {
        if (checkbox === 'Todas') {
            console.log(checkbox);
            setInitialImages(images);
            return;
        }

        const filteredImages = images.filter((img) => {
            return img.tags.some(tag => {
                return tag.tagName === checkbox;
            });
        });

        setInitialImages(filteredImages);
    }

    return (
        <>
            <Navbar />
            <HomePageContainer>
                <HomePageContent>
                    <TagBox filter={filter} />
                    {isLoading ? (
                        <SpinnerContainer>
                            <Spinner />
                        </SpinnerContainer>
                    ) : (
                        <ImageContainer>
                            {initialImages.map(image => (
                                <Link key={image._id} to={`/images/${image._id}`}>
                                    <ImageCard tags={image.tags} url={image.url} />
                                </Link>
                            ))}
                        </ImageContainer>
                    )}
                </HomePageContent>
            </HomePageContainer>
        </>
    );
}