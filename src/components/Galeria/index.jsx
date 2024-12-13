import styled from "styled-components";

import Titulo from "../Titulo";
import Populares from "./Populares";
import Imagen from "./Imagen";
import Tags from "./Tags";

const GaleriaContainer = styled.div`
display: flex;
flex-direction: column;
gap: 24px;
width: 100%;

@media (min-width: 744px) {
    flex-direction: row;
}
`

const SeccionFluida = styled.section`
flex-grow: 1;
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
    width: 100%;
    justify-content: space-between;
}
`

const Galeria = ({ fotos = [], setTag, AlSeleccionarFoto, alAlternarFavorito }) => {


    return (
        <>
            <Tags setTag={setTag} />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo $align="center">Navegue por la galería</Titulo>

                    <ImagenesContainer>
                        {
                            fotos.map(foto =>
                                <Imagen alAlternarFavorito={alAlternarFavorito} AlSolicitarZoom={AlSeleccionarFoto} key={foto.id} foto={foto}></Imagen>

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