import { GetUnProducto} from "../../asyncmock"
import { useState, useEffect } from "react"
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

const ItemDetailContainer = () => {

    const {idItem} = useParams();

    const [producto, setProducto] = useState(null);
    
    useEffect(() => {
        GetUnProducto(idItem)
            .then(res => setProducto(res))
    }, [idItem])

    return (
        <div>
            <ItemDetail {...producto}/>
        </div>
    )
}

export default ItemDetailContainer