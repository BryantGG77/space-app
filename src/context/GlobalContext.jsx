import { createContext, useEffect, useReducer } from "react";

export const GlobalContext = createContext();


const initialState = {
    filtro: "",
    tag: 0,
    fotosDeGaleria: [],
    fotosFiltradas: [],
    fotoSeleccionada: null,
    mostrarBarraLateral: window.innerWidth >= 744,
    abrirBarraLateral: false,
    modalAbierto: false,
}

const reducer = (state, action) => {
    switch (action.type) {

        case 'SET_FILTRO':
            return { ...state, filtro: action.payload };
        case 'SET_TAG':
            return { ...state, tag: action.payload };
        case 'SET_FOTOS_DE_GALERIA':
            return { ...state, fotosDeGaleria: action.payload };
        case 'SET_FOTOS_FILTRADAS':
            return { ...state, fotosFiltradas: action.payload };
        case 'SET_FOTO_SELECCIONADA':
            return {
                ...state,
                fotoSeleccionada: action.payload,
                modalAbierto: action.payload != null ? true : false
            };
        case 'SET_MOSTRAR_BARRA_LATERAL':
            return { ...state, mostrarBarraLateral: action.payload };
        case 'SET_ABRIR_BARRA_LATERAL':
            return { ...state, abrirBarraLateral: action.payload };
        case 'AL_ALTERNAR_FAVORITO': {
            const fotosDeGaleria = state.fotosDeGaleria.map((fotoDeGaleria) => {
                return {
                    ...fotoDeGaleria,
                    favorita:
                        fotoDeGaleria.id === action.payload.id ? !action.payload.favorita : fotoDeGaleria.favorita,
                }
            });

            if (action.payload.id === state.fotoSeleccionada?.id) {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,
                    fotoSeleccionada: {
                        ...state.fotoSeleccionada, favorita: !state.fotoSeleccionada.favorita
                    }
                };
            } else {
                return {
                    ...state,
                    fotosDeGaleria: fotosDeGaleria,

                };
            }
        }
        default:
            return state;
    }
}

// eslint-disable-next-line react/prop-types
const GlobalContextProvider = ({ children }) => {

    const [state, dispatch] = useReducer(reducer, initialState);


    useEffect(() => {
        const aplicarFiltro = () => {
            const filtradas = state.fotosDeGaleria.filter((foto) => {
                const filtroPorTag = !state.tag || foto.tagId === state.tag;
                const filtroPorTitulo = !state.filtro || foto.titulo.toLowerCase().includes(state.filtro.toLowerCase());
                return filtroPorTag && filtroPorTitulo;
            });
            dispatch({ type: 'SET_FOTOS_FILTRADAS', payload: filtradas });
        };

        aplicarFiltro();
    }, [state.filtro, state.tag, state.fotosDeGaleria]);



    const cargarFotos = async () => {
        const response = await fetch("https://my-json-server.typicode.com/BryantGG77/space-app-api/fotos");
        const data = await response.json();
        dispatch({ type: 'SET_FOTOS_DE_GALERIA', payload: data });
        dispatch({ type: 'SET_FOTOS_FILTRADAS', payload: data });

    };

    useEffect(() => {
        setTimeout(() => cargarFotos(), 2000);
    }, []);

    return (
        <GlobalContext.Provider
            value={
                {
                    state, dispatch
                }
            }
        >
            {children}
        </GlobalContext.Provider>
    );
};

export default GlobalContextProvider;
