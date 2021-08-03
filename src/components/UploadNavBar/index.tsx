import { Link } from "react-router-dom";
import { Container, Logo, NavigationContainer, Period } from "./styles";

export function UploadNavbar() {
    return (
        <Container>
            <Link to='/'>
                <Logo>
                    Khub<Period>.</Period>
                </Logo>
            </Link>

            <NavigationContainer>
                <Link to="/">Images</Link>
                <Link to="/">Gifs</Link>
            </NavigationContainer>
        </Container>
    );
}