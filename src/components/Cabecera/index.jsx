import styled from "styled-components";
import CampoTexto from "../CampoTexto";
import BarraLateralMobile from "../BarraLateralMobile";
import { useState, useEffect, useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";


const HeaderEstilizado = styled.header`
display: flex;
flex-direction: column;
gap: 24px;
padding: 60px 24px;
justify-content: space-between;

section {
    display: flex;
    justify-content: space-between;
    align-items: center;
} 

img {
    width: 212px;
}

@media (min-width: 744px) {
    flex-direction: row;
align-items: center;

}
`



const Cabecera = () => {

    const { setFiltro } = useContext(GlobalContext);
    const [mostrarBarraMovil, setMostrarBarraMovil] = useState(
        window.innerWidth <= 743
    );



    useEffect(() => {
        const manejarResize = () => {
            setMostrarBarraMovil(window.innerWidth <= 743);
        };

        window.addEventListener("resize", manejarResize);
        return () => {
            window.removeEventListener("resize", manejarResize);
        };
    }, []);

    return <HeaderEstilizado>
        <section>
            <img className="logo" src="img/logo.png" alt="Logo de Space App" />

            {mostrarBarraMovil && <BarraLateralMobile />}
        </section>
        <CampoTexto setFiltro={setFiltro} />
    </HeaderEstilizado>
}

export default Cabecera;