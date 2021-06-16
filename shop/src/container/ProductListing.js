import React, {useEffect} from 'react'
import { fetchProducts } from '../redux/ProductAction'
import { useDispatch, useSelector } from 'react-redux'
import ProductComponent from './ProductComponent'

const ProductListing = () => {
    const products = useSelector((state) => state);
    const dispatch = useDispatch();

    // const fetchProducts = async () => {
    //     const response = await axios.get('https://fakestoreapi.com/products')
    //     .catch((error) => console.log(error))
    //     //console.log(response.data);
    //     dispatch(setProducts(response.data));
    // }

    useEffect(() => {
        dispatch(fetchProducts())
    },[]);
    console.log("Products", products);
    return (
        <div className="ui grid four column container">
          <ProductComponent />
        </div>
    )
}
export default ProductListing


