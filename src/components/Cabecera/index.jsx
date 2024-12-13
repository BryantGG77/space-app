import styled from "styled-components";
import CampoTexto from "../CampoTexto";


const HeaderEstilizado = styled.header`
display: flex;
flex-direction: column;
padding: 60px 24px;
justify-content: space-between;

img {
    width: 212px;
}

@media (min-width: 744px) {
    flex-direction: row;
align-items: center;

}
`

const Cabecera = ({ setFiltro }) => {
    return <HeaderEstilizado>
        <img className="logo" src="img/logo.png" alt="Logo de Space App" />
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
}

export default Cabecera;