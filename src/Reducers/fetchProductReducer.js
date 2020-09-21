const FETCH_PRODUCT_REQUEST = 'FETCH_PRODUCT_REQUEST'
const FETCH_PRODUCT_SUCCESS = 'FETCH_PRODUCT_SUCCESS'
const FETCH_PRODUCT_FAILURE = 'FETCH_PRODUCT_FAILURE'

const initialState = {
    loading : true,
    product: [],
    error : ''
}

const reducer = (state = initialState, action) => {
    switch(action.type){
        case FETCH_PRODUCT_REQUEST:
            return {
                ...state,
                loading: true,
            }
        case FETCH_PRODUCT_SUCCESS:
            return {
                loading : false,
                product : action.payload,
                error : ' '
            }
        case FETCH_PRODUCT_FAILURE:
            return {
                loading : false, 
                product : [],
                error : action.payload
            }
        default:
            return state;
    }
}
export default reducer;