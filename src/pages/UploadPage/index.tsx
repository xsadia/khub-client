import { UploadNavbar } from "../../components/UploadNavBar";
import { FileInput, Form, Label, PageContainer, PageContent, SubmitButton, TagInput, TagInputContainer } from "./styles";
import { BiUpload } from 'react-icons/bi';
import { AiOutlineTags } from 'react-icons/ai';
import { FormEvent, useState } from "react";
import { useRef } from "react";
import { api } from "../../services/api";
import { useHistory } from "react-router-dom";
import { Spinner } from "../../components/Spinner";

export function UploadPage() {
    const fileElement = useRef(null);
    const history = useHistory();
    const [tag, setTag] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (event: FormEvent) => {
        event.preventDefault();
        setIsLoading(true);

        if (!fileElement) {
            return;
        }

        const dataForm = new FormData();
        dataForm.append('image', fileElement.current.files[0]);
        dataForm.append('tag', tag);

        await api.post('/images', dataForm, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        setTag('');
        setIsLoading(false);
        history.push('/');
    };

    return (
        <>
            <UploadNavbar />
            <PageContainer>
                <PageContent>
                    <Form onSubmit={handleSubmit}>
                        {isLoading ? (
                            <Spinner />
                        ) : (
                            <>
                                <TagInputContainer>
                                    <AiOutlineTags />
                                    <TagInput type="text" placeholder="Tag" value={tag} onChange={e => setTag(e.target.value)} />
                                </TagInputContainer>

                                <Label htmlFor="uploadFile">
                                    <BiUpload />
                                    <span>Choose file</span>
                                </Label>

                                <FileInput
                                    id="uploadFile"
                                    type="file"
                                    accept="image/png, image/jpeg, image/jpg"
                                    ref={fileElement}
                                />

                                <SubmitButton>Submit</SubmitButton>
                            </>
                        )}
                    </Form>
                </PageContent>
            </PageContainer>
        </>

    );
};;