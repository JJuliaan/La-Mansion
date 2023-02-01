
import React from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
import useFirebase from "../../hooks/useFirebase";
import Spinner from 'react-bootstrap/Spinner';


const ItemListContainer = ({greeting}) => {
    const {categoryId} = useParams()

    const [products, loading, error] = useFirebase(categoryId)
    

    return(
        <>
        {error && <h1>oh oh hubo un error: {error}</h1>}
        {loading ?
            <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
            </Spinner>
            : <div><h1>{greeting}</h1><ItemList productos={products}/> </div>
        }   
        </>
    )
}

export default ItemListContainer