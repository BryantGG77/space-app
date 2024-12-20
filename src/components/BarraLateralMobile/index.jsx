import styled from "styled-components";

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
    return (
        <Boton>
            <div></div>
            <div></div>
            <div></div>
        </Boton>
    )
}

export default BarraLateralMobile;