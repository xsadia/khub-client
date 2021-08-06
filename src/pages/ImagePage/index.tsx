import { useCallback, useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { Navbar } from "../../components/Navbar";
import { Spinner } from "../../components/Spinner";
import { api } from "../../services/api";
import { IoCloseSharp } from 'react-icons/io5';
import { MdEdit } from 'react-icons/md';
import { Container, ImagePortrait, ImageContainer, TagsContainer, TagPill, EditingContainer, EditTag, EditInput, DeleteButton, ButtonTagContainer, EditButton } from "./styles";

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
    const [tags, setTags] = useState<Tag[]>([]);
    const [isLoading, setIsloading] = useState(false);
    const [isEditing, setIsEditing] = useState(false);
    const [inputValue, setInputValue] = useState('');
    const [isDisabled, setIsDisabled] = useState(false);
    const { params } = useRouteMatch<ImageParams>();

    const getImage = useCallback(async () => {
        setIsloading(true);
        const response = await api.get(`images/${params.id}`);
        setImage(response.data);
        setTags(response.data.tags);
        setIsloading(false);
    }, [params.id]);

    useEffect(() => {
        getImage();
    }, [getImage]);

    const changeEditing = () => {
        console.log('cu');
        setIsEditing(!isEditing);
    };

    const handleKeyDown = async (e) => {
        if (e.key === "Enter") {
            setIsDisabled(true);
            if (inputValue === '' || inputValue === ' ') {
                return;
            }

            if (tags.some(tag => tag.tagName === inputValue)) {
                setInputValue('');
                return;
            }

            const response = await api.patch(`images/${params.id}`, { tag: inputValue });
            setTags((prevTags) => [...prevTags, response.data]);
            setInputValue('');
            setIsDisabled(false);
        }
    };

    const handleDeleteTag = async (id: string) => {
        const remainingTags = tags.filter(tag => tag._id !== id);
        setTags(remainingTags);
        await api.patch(`images/${params.id}/tags/${id}`);
    };

    return (
        <>
            <Navbar />
            <Container>
                {isLoading ? (
                    <Spinner />
                ) : (
                    <>
                        <ImageContainer>
                            <ImagePortrait src={image?.url} alt={image?.tags[0].tagName} />
                        </ImageContainer>
                        <TagsContainer>
                            {isEditing ? (
                                <EditingContainer>
                                    {tags.map(tag => (
                                        <ButtonTagContainer key={tag._id}>
                                            <EditTag >
                                                {tag.tagName}
                                            </EditTag>
                                            <DeleteButton onClick={() => handleDeleteTag(tag._id)}><IoCloseSharp /></DeleteButton>
                                        </ButtonTagContainer>
                                    ))}

                                    {tags.length >= 6 ? (
                                        null
                                    ) : (
                                        <EditInput
                                            placeholder="digite e pressione enter"
                                            type="text"
                                            value={inputValue}
                                            disabled={isDisabled}
                                            onKeyDown={(e) => handleKeyDown(e)}
                                            onChange={(e) => setInputValue(e.target.value)}
                                        />
                                    )}

                                    <EditButton onClick={changeEditing}><MdEdit /></EditButton>
                                </EditingContainer>
                            ) : (
                                <>
                                    {tags.map(tag => (
                                        <TagPill key={tag._id}>
                                            {tag.tagName}
                                        </TagPill>
                                    ))}
                                    <EditButton onClick={changeEditing}><MdEdit /></EditButton>
                                </>
                            )}
                        </TagsContainer>
                    </>
                )}
            </Container>
        </>
    );
}