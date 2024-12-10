import styled from "styled-components"
import GlobalStyles from "./components/GlobalStyles"
import Cabecera from "./components/Cabecera"
import BarraLateral from "./components/BarraLateral"
import Banner from "./components/Banner"
import banner from "./assets/banner.png"
import Galeria from "./components/Galeria"
function App() {

  const FondoGradiente = styled.div`
  background: linear-gradient(175deg, #041833 4.16%, #04244F 48%, #154580 96.76%);
  width: 100%;
  min-height: 100vh;
  
  `

  const AppContainer = styled.div`
  width: 1280px;
  max-width: 100%;
  margin: 0 auto;
  `

  const MainContainer = styled.main`
  display: flex;
  gap: 24px;
  `

  const ContenidoGaleria = styled.section`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  `

  return (
    <>
      <FondoGradiente>
        <GlobalStyles />
        <AppContainer>
          <Cabecera />
          <MainContainer>
            <BarraLateral />
            <ContenidoGaleria>
              <Banner texto="La galería más completa del espacio" backgroundImage={banner} />
              <Galeria />
            </ContenidoGaleria>
          </MainContainer>
        </AppContainer>
      </FondoGradiente >
    </>
  )
}

export default App
