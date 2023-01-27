import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ItemList from "../../components/ItemList";
// import productjson from "../../data/productos.json";
import { db } from "../../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore"; 

const ItemListContainer = ({greeting}) => {
    const [products, setProducts] = useState([])

    // console.log(db);

    const {categoryId} = useParams()
    // console.log(categoryId);
    
    useEffect(()=> { 

        const getProducts = async () => {
            let querySnapshot;
            if (categoryId) {
                const q = query(collection(db, "products"), where("category", "==", categoryId));
                querySnapshot = await getDocs(q);
            } else {
                querySnapshot = await getDocs(collection(db, "products"));
            }
            const productosFirebase = [];
            querySnapshot.forEach((doc) => {
            // console.log(`${doc.id} => ${doc.data()}`);
            const product = {
                id: doc.id,
                ...doc.data()
            }
            productosFirebase.push(product)
        });
        setProducts(productosFirebase)
        }

        getProducts()
        
    }, [categoryId])

    // // console.log(products);

    return(
        <div>
            <h1>{greeting}</h1>
            <ItemList productos={products}/>
        </div>
    )
}

export default ItemListContainer