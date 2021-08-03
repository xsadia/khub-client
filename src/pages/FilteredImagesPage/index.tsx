import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/api";
import { Container, ImageContainer, PageContent } from "./styles";

type TagParams = {
    tag: string;
};

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

export function FilteredImagesPage() {
    const [images, setImages] = useState<Image[]>([]);
    const { params } = useRouteMatch<TagParams>();

    const getImages = useCallback(async () => {
        const response = await api.get(`/images/tags/${params.tag}`);
        setImages(response.data);
    }, [params.tag]);

    useEffect(() => {
        getImages();
    }, [getImages]);

    return (
        <>
            <Navbar />
            <Container>
                <PageContent>
                    <ImageContainer>
                        {images.map(image => (
                            <ImageCard key={image._id} tags={image.tags} url={image.url} />
                        ))}
                    </ImageContainer>
                </PageContent>
            </Container>
        </>
    );
}