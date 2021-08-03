import React, { useCallback } from "react";
import { useEffect, useState } from "react";
import { api } from "../../services/api";
import { TagBoxContainer } from "./styles";


type Tag = {
    _id: string;
    tagName: string;
};

type TagBoxProps = {
    filter: (checkbox) => void;
};

export function TagBox({ filter }: TagBoxProps) {
    const [tags, setTags] = useState<Tag[]>([]);
    const [selectedTag, setSelectedTag] = useState('');

    const getTags = useCallback(async () => {
        const response = await api.get('/tags');
        setTags([{ tagName: 'Todas', _id: 'Todas' }, ...response.data]);
        setSelectedTag('Todas');
    }, []);

    useEffect(() => {
        getTags();
    }, [getTags]);

    const handleOnChangeSelect = (tag: string) => {
        setSelectedTag(tag);
        filter(tag);
    };

    return (
        <TagBoxContainer>
            <select value={selectedTag} onChange={(e) => handleOnChangeSelect(e.target.value)} >
                {tags.map(tag => (
                    <React.Fragment key={tag._id}>
                        <option value={tag.tagName}>{tag.tagName}</option>
                    </React.Fragment>
                ))}
            </select>
        </TagBoxContainer>
    );
};