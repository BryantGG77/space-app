import styled from "styled-components"
import search from "./search.png"
import { useContext, useRef } from "react"
import { GlobalContext } from "../../context/GlobalContext"


const ContainerEstilizado = styled.section`
    position: relative;
    display: inline-block;
`

const InputEstilizado = styled.input`
    height: 56px;
    padding: 12px 16px;
    border-radius: 10px;
    border: 2px solid;
    border-color: #C98CF1;
    background: transparent;
    box-sizing: border-box;
    /* width: 566px; */
    width: 100%;
    color: #D9D9D9;
    font-weight: 400;
    font-size: 20px;
    line-height: 20px;

    @media (min-width: 1200px) {
        width: 566px;
    }
    
`

const IconoLupa = styled.img`
position: absolute;
    top: 15px;
    right: 15px;
    width: 28px !important;
    height: 28px;
    cursor: pointer;
`

const CampoTexto = () => {

    const { dispatch } = useContext(GlobalContext);

    const cajaConsulta = useRef(null);
    return <ContainerEstilizado>
        <InputEstilizado ref={cajaConsulta} type="text" placeholder="¿Qué estás buscando?" />
        <IconoLupa src={search} alt="Icono de búsqueda" onClick={() => {
            dispatch({ type: 'SET_FILTRO', payload: cajaConsulta.current.value })
        }} />
    </ContainerEstilizado>
}

export default CampoTexto;  