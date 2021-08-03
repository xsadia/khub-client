import { CardImage, ImageCardContainer, TagPill, TagsContainer } from "./styles";

type Tag = {
    _id: string;
    tagName: string;
};

type ImageCardProps = {
    _id?: string;
    url: string;
    createdAt?: string;
    tags: Tag[];
};

export function ImageCard({ _id, createdAt, tags, url }: ImageCardProps) {
    return (
        <ImageCardContainer>
            <CardImage src={url} />
            <TagsContainer>
                {tags.map(tag => (
                    <TagPill key={tag._id}>
                        {tag.tagName}
                    </TagPill>
                ))}

            </TagsContainer>
        </ImageCardContainer>
    );
}