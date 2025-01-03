import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";
import { useContext } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, .7);
`

const DialogEstilizado = styled.dialog`
    position: fixed; /* Cambiado de absolute a fixed */
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 98%;
    background-color: transparent;
    border: none;
    padding: 0;
    form {
        button {
            position: absolute; /* Ajustado para el botón de cerrar */
            top: 20px;
            right: 20px;
        }
    }

    @media (min-width: 876px) {
        width: 45%;
    }
`;

const ModalZoom = () => {

    const { fotoSeleccionada, alAlternarFavorito, setFotoSeleccionada } = useContext(GlobalContext);
    return <>
        {fotoSeleccionada && <>
            <Overlay />
            <DialogEstilizado open={!!fotoSeleccionada} onClose={() => setFotoSeleccionada(null)}>
                <Imagen expandida={true} foto={fotoSeleccionada} alAlternarFavorito={alAlternarFavorito} />
                <form method="dialog">
                    <BotonIcono formMethod="dialog">
                        <img src="/iconos/cerrar.png" alt="Ícono de cerrar" />
                    </BotonIcono>
                </form>
            </DialogEstilizado>
        </>}
    </>
}

export default ModalZoom;