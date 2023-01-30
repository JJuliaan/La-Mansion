
import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import useFirebase from "../../hooks/useFirebase";

const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams()

    const [products, loading, error] = useFirebase(categoryId)
    

    return(
        <>
        {error && <h1>oh oh hubo un erro: {error}</h1>}
        {loading ?
            <h1>cargandooo.....</h1>
            : <div><h1>{greeting}</h1><ItemList productos={products}/> </div>
        }   
        </>
    )
}

export default ItemListContainer