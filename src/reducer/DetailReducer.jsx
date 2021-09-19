import { items } from "../components/list/items";

const Show_Detail = 'Show_Detail';

const initailState = {
    items : ''
}
const DetailReducer = (state = initailState , action)=>{
    switch (action.type) {
        case Show_Detail : return {
            ...state ,
            items : action.payload
        }
        default : return state
    }
}
export default DetailReducer;