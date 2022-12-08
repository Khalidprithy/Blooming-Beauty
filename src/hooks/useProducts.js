import { useEffect, useState } from "react"

const useProducts = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-beauty-server.onrender.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))

    }, []);
    return [products, setProducts];

}
export default useProducts

// --https://blooming-beauty-server.onrender.com/
// --https://blooming-beauty-server.onrender.com/