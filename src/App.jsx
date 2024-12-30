import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Cabecera from "./components/Cabecera";
import BarraLateral from "./components/BarraLateral";
import Banner from "./components/Banner";
import banner from "./assets/banner.png";
import Galeria from "./components/Galeria";
import Pie from "./components/Pie";
import ModalZoom from "./components/ModalZoom";
import { useState, useEffect } from "react";
import { Cargando } from "./components/Cargando";

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


  const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
  const [filtro, setFiltro] = useState("");
  const [tag, setTag] = useState(0);
  const [fotoSeleccionada, setFotoSeleccionada] = useState(null);
  const [mostrarBarraLateral, setMostrarBarraLateral] = useState(
    window.innerWidth >= 744
  );

  const [abrirBarraLateral, setAbrirBarraLateral] = useState(false);

  const handleAbrirBarraLateral = () => {
    setAbrirBarraLateral(!abrirBarraLateral);
  };


  useEffect(() => {
    const manejarResize = () => {
      setMostrarBarraLateral(window.innerWidth >= 744);
    };

    window.addEventListener("resize", manejarResize);
    return () => {
      window.removeEventListener("resize", manejarResize);
    };
  }, []);


  const alAlternarFavorito = (foto) => {
    if (foto.id === fotoSeleccionada?.id) {
      setFotoSeleccionada({
        ...fotoSeleccionada,
        favorita: !fotoSeleccionada.favorita,
      });
    }
    setFotosDeGaleria(
      fotosDeGaleria.map((fotoDeGaleria) => {
        return {
          ...fotoDeGaleria,
          favorita:
            fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita,
        };
      })
    );
  };

  const fotos = async () => {
    const response = await fetch("https://6748ba9c5801f5153591fb97.mockapi.io/fotos");
    const data = await response.json();
    setFotosDeGaleria([...data]);
  }


  useEffect(() => {
    setTimeout(() => fotos(), 2000);
  }, []);


  return (
    <FondoGradiente>
      <GlobalStyles />
      <AppContainer>
        <Cabecera setFiltro={setFiltro} handleAbrirBarraLateral={handleAbrirBarraLateral} />
        <MainContainer>
          {mostrarBarraLateral && <BarraLateral />}
          {abrirBarraLateral && <BarraLateral />}
          <ContenidoGaleria>
            <Banner
              backgroundImage={banner}
              texto="La galería más completa de fotos del espacio."
            />
            {
              fotosDeGaleria.length === 0 ? <Cargando></Cargando> :
                <Galeria
                  fotos={fotosDeGaleria}
                  AlSeleccionarFoto={(foto) => setFotoSeleccionada(foto)}
                  alAlternarFavorito={alAlternarFavorito}
                  filtro={filtro}
                  setTag={setTag}
                />
            }
          </ContenidoGaleria>
        </MainContainer>
      </AppContainer>
      <ModalZoom
        foto={fotoSeleccionada}
        alCerrar={() => setFotoSeleccionada(null)}
        alAlternarFavorito={alAlternarFavorito}
      />
      <Pie />
    </FondoGradiente>
  );
};

export default App;
