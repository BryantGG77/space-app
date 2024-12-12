import styled from "styled-components";
import CampoTexto from "../CampoTexto";


const HeaderEstilizado = styled.header`
display: flex;
padding: 60px 0;
justify-content: space-between;

img {
    width: 212px;
}
`

const Cabecera = ({ setFiltro }) => {
    return <HeaderEstilizado>
        <img className="logo" src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
}

export default Cabecera;