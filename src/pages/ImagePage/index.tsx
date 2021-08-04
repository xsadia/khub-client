import { useCallback, useEffect } from "react";
import { useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { api } from "../../services/api";
import { Container, ImagePortrait, ImageContainer, TagsContainer, TagPill } from "./styles";

type ImageParams = {
    id: string;
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

export function ImagePage() {
    const [image, setImage] = useState<Image>();
    const [isLoading, setIsloading] = useState(false);
    const { params } = useRouteMatch<ImageParams>();

    console.log(image);

    const getImage = useCallback(async () => {
        setIsloading(true);
        const response = await api.get(`images/${params.id}`);
        setImage(response.data);
    }, [params.id]);

    useEffect(() => {
        getImage();
    }, [getImage]);

    return (
        <>
            <Navbar />
            <Container>
                <ImageContainer>
                    <ImagePortrait src={image?.url} alt="" />
                </ImageContainer>
                <TagsContainer>
                    {image?.tags.map(tag => (
                        <TagPill key={tag._id}>
                            {tag.tagName}
                        </TagPill>
                    ))}
                </TagsContainer>
            </Container>
        </>
    );
}