import { Link } from "react-router-dom";
import { Searchbar } from "../Searchbar";
import { Container, Logo, NavigationContainer, Period } from "./styles";

export function Navbar() {
    return (
        <Container>
            <Link to='/'>
                <Logo>
                    Khub<Period>.</Period>
                </Logo>
            </Link>
            <Searchbar />

            <NavigationContainer>
                <Link to="/">Gifs</Link>
                <Link to="/upload">Upload</Link>
            </NavigationContainer>
        </Container>
    );
}