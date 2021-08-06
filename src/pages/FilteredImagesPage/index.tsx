import { useCallback } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useRouteMatch } from "react-router-dom";
import { ImageCard } from "../../components/ImageCard";
import { Navbar } from "../../components/Navbar";
import { Spinner } from "../../components/Spinner";
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
    const [isLoading, setIsLoading] = useState(false);
    const { params } = useRouteMatch<TagParams>();

    const getImages = useCallback(async () => {
        setIsLoading(true);
        const response = await api.get(`/images/tags/${params.tag}`);
        setImages(response.data);
        setIsLoading(false);
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
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            images.map(image => (
                                <Link to={`/images/${image._id}`} key={image._id}>
                                    <ImageCard tags={image.tags} url={image.url} />
                                </Link>
                            ))
                        )}
                    </ImageContainer>
                </PageContent>
            </Container>
        </>
    );
}