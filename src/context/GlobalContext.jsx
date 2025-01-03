import { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();


const GlobalContextProvider = ({ children }) => {

    const [filtro, setFiltro] = useState("");
    // eslint-disable-next-line no-unused-vars
    const [tag, setTag] = useState(0);
    const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);


    const alAlternarFavorito = (foto) => {
        if (foto.id === fotoSeleccionada?.id) {
            setFotoSeleccionada({
                ...fotoSeleccionada,
                favorita: !fotoSeleccionada.favorita,
            });
        }
        setFotosDeGaleria(
            fotosDeGaleria.map((fotoDeGaleria) => {
                return {
                    ...fotoDeGaleria,
                    favorita:
                        fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita,
                };
            })
        );
    };

    const fotos = async () => {
        const response = await fetch("https://6748ba9c5801f5153591fb97.mockapi.io/fotos");
        const data = await response.json();
        setFotosDeGaleria([...data]);
    }


    useEffect(() => {
        setTimeout(() => fotos(), 2000);
    }, []);


    return (
        <GlobalContext.Provider value={{ filtro, setFiltro, setTag, fotosDeGaleria, fotoSeleccionada, setFotoSeleccionada, alAlternarFavorito }}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider;