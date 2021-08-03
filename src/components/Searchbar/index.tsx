import { InputContainer, SearchButton, SearchInput } from "./styles";
import { FiSearch } from 'react-icons/fi';
import { FormEvent, useState } from "react";
import { useHistory } from "react-router-dom";

export function Searchbar() {
    const [searchData, setSearchData] = useState('');
    const history = useHistory();

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        history.push(`/images/tags/${searchData.toLowerCase()}`);
        setSearchData('');
    };
    return (
        <InputContainer onSubmit={handleSubmit} >
            <SearchButton type="submit"><FiSearch /></SearchButton>
            <SearchInput placeholder="Procurar por tag" value={searchData} onChange={(e) => setSearchData(e.target.value)} />
        </InputContainer>
    );
}