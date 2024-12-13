import styled from "styled-components"
import tags from "./tags.json"


const TagsContainer = styled.section`
display: flex;
flex-direction: column;
align-items: center;
gap: 64px;
margin-top: 56px;

@media (min-width: 1200px) {
    flex-direction: row;
}
`

const TagTitulo = styled.h3`
font-size: 24px;
color: #D9D9D9;
margin: 0;
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
`

const Tags = ({ setTag }) => {
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
