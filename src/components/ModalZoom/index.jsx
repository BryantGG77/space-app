import styled from "styled-components";
import Imagen from "../Galeria/Imagen";
import BotonIcono from "../BotonIcono";

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

const ModalZoom = ({ foto, alCerrar, alAlternarFavorito }) => {
    return <>
        {foto && <>
            <Overlay />
            <DialogEstilizado open={!!foto} onClose={alCerrar}>
                <Imagen expandida={true} foto={foto} alAlternarFavorito={alAlternarFavorito} />
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