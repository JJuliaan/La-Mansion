import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemDetail from "../../components/ItemDetail";
// import productosJson from "../../data/productos.json";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase/config";
import Spinner from 'react-bootstrap/Spinner';


const ItemDetailContainer = () => {
    const [detail, setDetail] = useState({})
    
    const {id} = useParams()
    console.log(id);

    
    useEffect(()=> {
        const getIdProducts = async () =>{

            const docRef = doc(db, "products", id);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {
            console.log("Document data:", docSnap.data());
            const productsDetail = {
                id: docSnap.id,
                ...docSnap.data()
            }
            setDetail(productsDetail)
            } else {
            // doc.data() will be undefined in this case
            console.log("No such document!");
            }
        }

            getIdProducts()
    }, [id])


    return(
        <div>
            {
                Object.keys(detail).length === 0
                ?   <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                : <ItemDetail detail={detail}/>
            }
        </div>
    )
}

export default ItemDetailContainer