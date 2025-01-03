import { useContext, useEffect } from "react";
import styled from "styled-components";
import { GlobalContext } from "../../context/GlobalContext";

const Boton = styled.button`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
width: 3rem;
height: 3rem;
border: 0;
background: transparent;
gap: .65rem;

div {
    background: #ffffff;
    height: 2px;
    width: 100%;
    border-radius: 5px;
    transition: all 0.5s;
    transform-origin: left;
}

&:hover {
    div:first-child {
        transform: rotate(39.5deg);
    }
    div:nth-child(2) {
        opacity: 0;
    }
    div:nth-child(3) {
        transform: rotate(-39.5deg);
    }
}
`
const BarraLateralMobile = () => {

    const { abrirBarraLateral, setAbrirBarraLateral, setMostrarBarraLateral } = useContext(GlobalContext);

    useEffect(() => {
        const manejarResize = () => {
            setMostrarBarraLateral(window.innerWidth >= 744);
        };

        window.addEventListener("resize", manejarResize);
        return () => {
            window.removeEventListener("resize", manejarResize);
        };
    }, [setMostrarBarraLateral]);

    const handleAbrirBarraLateral = () => {
        setAbrirBarraLateral(!abrirBarraLateral);
    };

    return (
        <Boton onClick={handleAbrirBarraLateral}>
            <div></div>
            <div></div>
            <div></div>
        </Boton>
    )
}

export default BarraLateralMobile;