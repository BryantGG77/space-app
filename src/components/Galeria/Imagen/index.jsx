import styled from "styled-components";
import BotonIcono from "../../BotonIcono";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalContext";
import useFotoModal from "../../../hooks/useFotoModal";


const Figure = styled.figure`
    width: ${(props) => (props.$expandida ? '100%' : '460px')};
    max-width: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
    & > img {
        max-width: 100%;
        border-radius: 20px 20px 0 0;
    }
    figcaption {
        background-color: #001634;
        border-radius: 0px 0px 20px 20px;
        color: white;
        box-sizing: border-box;
        padding: 16px 16px 16px 22px;
        h3 {
            font-family: 'GandhiSansBold';
        }
        h4 {
            flex-grow: 1;
        }
        h3,
        h4 {
            margin: 0;
            font-size: 16px;
        }
    }

    @media (min-width: 744px) {
        width: ${(props) => (props.$expandida ? '100%' : '246px')};
    }

    @media (min-width: 1200px) {
    width: ${(props) => (props.$expandida ? '100%' : '320px')};
    }

    @media (min-width: 1440px) {
    width: ${(props) => (props.$expandida ? '100%' : '380px')};
    }
`;

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Imagen = ({ foto, expandida = false }) => {



    const { abrirModal } = useFotoModal();

    const { dispatch } = useContext(GlobalContext);

    const iconoFavorito = foto.favorita ? "/iconos/favorito-activo.png" : "/iconos/favorito.png";

    return <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.titulo} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Pie>
                <h4>{foto.fuente}</h4>
                <BotonIcono onClick={() => dispatch({ type: 'AL_ALTERNAR_FAVORITO', payload: foto })}>
                    <img src={iconoFavorito} alt="Icone de favorito" />
                </BotonIcono>

                {!expandida && <BotonIcono aria-hidden={expandida} onClick={() => abrirModal(foto)}>
                    <img src="/iconos/expandir.png" alt="Icono de expandir" />
                </BotonIcono>}
            </Pie>
        </figcaption>
    </Figure>
}

export default Imagen;