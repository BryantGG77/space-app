import { createContext, useEffect, useState } from "react";
// eslint-disable-next-line react-refresh/only-export-components
export const GlobalContext = createContext();

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {
    const [filtro, setFiltro] = useState("");
    const [tag, setTag] = useState(0);
    const [fotosDeGaleria, setFotosDeGaleria] = useState([]);
    const [fotosFiltradas, setFotosFiltradas] = useState([]);
    const [fotoSeleccionada, setFotoSeleccionada] = useState(null);

    useEffect(() => {
        const aplicarFiltro = () => {
            const filtradas = fotosDeGaleria.filter((foto) => {
                const filtroPorTag = !tag || foto.tagId === tag;
                const filtroPorTitulo = !filtro || foto.titulo.toLowerCase().includes(filtro.toLowerCase());
                return filtroPorTag && filtroPorTitulo;
            });
            setFotosFiltradas(filtradas);
        };

        aplicarFiltro();
    }, [filtro, tag, fotosDeGaleria]);

    const alAlternarFavorito = (foto) => {
        if (foto.id === fotoSeleccionada?.id) {
            setFotoSeleccionada({
                ...fotoSeleccionada,
                favorita: !fotoSeleccionada.favorita,
            });
        }
        setFotosDeGaleria(
            fotosDeGaleria.map((fotoDeGaleria) => ({
                ...fotoDeGaleria,
                favorita:
                    fotoDeGaleria.id === foto.id ? !foto.favorita : fotoDeGaleria.favorita,
            }))
        );
    };

    const cargarFotos = async () => {
        const response = await fetch("https://6748ba9c5801f5153591fb97.mockapi.io/fotos");
        const data = await response.json();
        setFotosDeGaleria([...data]);
        setFotosFiltradas([...data]); // Inicializa las fotos filtradas con todas las fotos.
    };

    useEffect(() => {
        setTimeout(() => cargarFotos(), 2000);
    }, []);

    return (
        <GlobalContext.Provider
            value={{
                filtro,
                setFiltro,
                setTag,
                fotosDeGaleria,
                fotosFiltradas,
                fotoSeleccionada,
                setFotoSeleccionada,
                alAlternarFavorito,
                tag,
            }}
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
