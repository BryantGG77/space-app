import styled from "styled-components";
import BotonIcono from "../../BotonIcono";


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
`;

const Pie = styled.footer`
    display: flex;
    justify-content: space-between;
    align-items: center;
`


const Imagen = ({ foto, expandida = false, AlSolicitarZoom }) => {


    return <Figure $expandida={expandida} id={`foto-${foto.id}`}>
        <img src={foto.path} alt={foto.titulo} />
        <figcaption>
            <h3>{foto.titulo}</h3>
            <Pie>
                <h4>{foto.fuente}</h4>
                <BotonIcono>
                    <img src="/iconos/favorito.png" alt="Icone de favorito" />
                </BotonIcono>

                {!expandida && <BotonIcono aria-hidden={expandida} onClick={() => AlSolicitarZoom(foto)}>
                    <img src="/iconos/expandir.png" alt="Icono de expandir" />
                </BotonIcono>}
            </Pie>
        </figcaption>
    </Figure>
}

export default Imagen;