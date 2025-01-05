import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import Pie from "./components/Pie";
import ModalZoom from "./components/ModalZoom";
import { useContext } from "react";
import { GlobalContext } from "./context/GlobalContext";


const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244f 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
`;

const AppContainer = styled.div`
  width: 100%;
  margin: 0 auto;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
  gap: 24px;

  @media (min-width: 744px) {
    flex-direction: row;
  }
`;

const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  flex-grow: 1;
`;

const App = () => {


  const { state } = useContext(GlobalContext);
  return (
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera />
        <MainContainer>
          {state.mostrarBarraLateral && <BarraLateral />}
          {state.abrirBarraLateral && <BarraLateral />}
          <ContenidoGaleria>
            <Banner
              backgroundImage={banner}
              texto="La galería más completa de fotos del espacio."
            />
            <Galeria />
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
      />
      <Pie />
    </FondoGradiente>
  );
};

export default App;
