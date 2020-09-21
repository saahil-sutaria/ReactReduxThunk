import {data} from '../Data/ProductInfo'

const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'


const fetchProductRequest = () =>{
    return {
        type: FETCH_PRODUCT_REQUEST
    }
}
const fetchProductSuccess = product =>{
    return {
        type: FETCH_PRODUCT_SUCCESS,
        payload : product
    }
}
const fetchProductFailure = error =>{
    return {
        type: FETCH_PRODUCT_FAILURE,
        payload : error 
    }
}

//we can pass id to the fetch product to get details of a particular product
const fetchProduct = () =>  {
    return function(dispatch){
        dispatch(fetchProductRequest())
        //make API call - via fetch/axios 
        // if successfull .then(dispatch(fetchProductSuccess))
        // if not successfull .catch(dispatch(fetchProductFailure)) 
        // In our case ... it will be always a success - hardcoded
        dispatch(fetchProductSuccess(data))
    }
}
export default fetchProduct;