import styled from "styled-components";

import Titulo from "../Titulo";
import Populares from "./Populares";
import Tag from "./Tags";
import Imagen from "./Imagen";

const GaleriaContainer = styled.div`
display: flex;
gap: 24px;
`

const SeccionFluida = styled.section`
flex-grow: 1;
`

const ImagenesContainer = styled.section`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
gap: 24px;
`

const Galeria = ({ fotos = [], AlSeleccionarFoto }) => {


    return (
        <>
            <Tag />
            <GaleriaContainer>
                <SeccionFluida>
                    <Titulo>Navegue por la galería</Titulo>

                    <ImagenesContainer>
                        {
                            fotos.map(foto => {
                                return (
                                    <Imagen AlSolicitarZoom={AlSeleccionarFoto} key={foto.id} foto={foto}></Imagen>
                                )
                            })
                        }
                    </ImagenesContainer>
                </SeccionFluida>
                <Populares />
            </GaleriaContainer>
        </>
    )
}

export default Galeria;