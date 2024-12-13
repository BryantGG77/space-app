import Titulo from "../../Titulo";
import fotos from "./fotos-populares.json"
import styled from "styled-components";


const Columna = styled.section`
    width: 100%;
`

const ColumnaFotos = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;   
    gap: 16px;
    
`

const Imagen = styled.img`
    /* max-width: 212px; */
    width: 460px;
    max-width: 100%;
    border-radius: 20px;

    @media (min-width: 744px) {
        width: 340px;
    }
    
`

const Boton = styled.button`
    background-color: transparent;
    color: #fff;
    border: 2px solid;
    border-color: #C98CF1;
    padding: 12px 20px;
    font-size: 20px;
    border-radius: 10px;
    cursor: pointer;
    width: 100%;
    margin-top: 16px;
`;

const Populares = () => {
    return (
        <Columna>
            <Titulo $align="center">Populares</Titulo>
            <ColumnaFotos>
                {fotos.map(foto => <Imagen key={foto.id} src={foto.path} alt={foto.alt} />)}
            </ColumnaFotos>
            <Boton>Ver más</Boton>
        </Columna>
    )
}

export default Populares;