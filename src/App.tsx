import { BrowserRouter } from "react-router-dom";
import { ImagesProvider } from "./hooks/useImages";
import { Routes } from "./routes";
import { GlobalStyle } from "./styles/Global";

function App() {
  return (
    <BrowserRouter>
      <ImagesProvider>
        <Routes />
        <GlobalStyle />
      </ImagesProvider>
    </BrowserRouter>
  );
}

export default App;

