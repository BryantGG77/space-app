
import styled from "styled-components"

const Div = styled.div`
    display: flex;
    justify-content: center;
    `

const Img = styled.img`
    width: 40%;


    @media (min-width: 1200px) {
        width: 15%;
    }
    `

export const Cargando = () => {
    return (
        <Div>
            <Img src="img/loading.gif" alt="Cargando" />

        </Div>
    )
}
