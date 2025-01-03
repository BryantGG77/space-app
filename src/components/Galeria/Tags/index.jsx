import styled from "styled-components"
import tags from "./tags.json"
import { useContext } from "react"
import { GlobalContext } from "../../../context/GlobalContext"


const TagsContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
gap: 20px;
margin-top: 56px;

@media (min-width: 1200px) {
    flex-direction: row;
}
`

const TagTitulo = styled.h3`
font-size: 24px;
color: #D9D9D9;
margin: 0;

@media (min-width: 1200px) {
    width: 20%;
}
`

const Tag = styled.button`
font-size: 24px;
color: #fff;
background: rgba(217, 217, 217, 0.3);
border-radius: 10px;
transition: background-color 0.3s ease;
cursor: pointer;
padding: 12px;
box-sizing: border-box;
border: 2px solid transparent;

&:hover {
    border-color: #C98CF1;
}
`

const Div = styled.div`
display: flex;
justify-content: center;
flex-wrap: wrap;
width: 100%;
gap: 24px;


@media (min-width: 1200px) {
    justify-content: flex-start;
}
`

const Tags = () => {

    const { setTag } = useContext(GlobalContext);

    return <TagsContainer>

        <TagTitulo>Buscar por tags: </TagTitulo>
        <Div>
            {tags.map(tag => {
                return <Tag key={tag.id} onClick={() => setTag(tag.id)}>{tag.titulo}</Tag>
            })}
        </Div>
    </TagsContainer>
}

export default Tags;
