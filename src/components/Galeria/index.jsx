import styled from "styled-components";

import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagen from "./Imagen";
import Tags from "./Tags";
import Cargando from "../Cargando";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const GaleriaContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 100%;

@media (min-width: 744px) {
    flex-direction: row;
    justify-content: space-between;
}
`

const SeccionFluida = styled.section`
flex-grow: 1;

@media (min-width: 1440px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70%;
}
`

const ImagenesContainer = styled.section`
display: flex;
/* justify-content: space-between; */
justify-content: center;
flex-wrap: wrap;
gap: 24px;

@media (min-width: 1200px) {
    width: 680px;
}

@media (min-width: 1440px) {
    width: 80%;
    justify-content: space-between;
}
`

const Galeria = () => {

    const { state } = useContext(GlobalContext);
    return (
        state.fotosDeGaleria.length === 0 ? <Cargando></Cargando> :
            <>
                <Tags />
                <GaleriaContainer>
                    <SeccionFluida>
                        <Titulo $align="center">Navegue por la galería</Titulo>

                        <ImagenesContainer>
                            {
                                state.fotosFiltradas.filter(foto => {
                                    return state.filtro == '' || foto.titulo.toLowerCase().includes(state.filtro.toLowerCase())
                                })
                                    .map(foto =>
                                        <Imagen
                                            key={foto.id}
                                            foto={foto}>

                                        </Imagen>

                                    )
                            }
                        </ImagenesContainer>
                    </SeccionFluida>
                    <Populares />
                </GaleriaContainer>
            </>
    )
}

export default Galeria;