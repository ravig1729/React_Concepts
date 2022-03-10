const initialState = []    //empty list whenever we click on submit , details added in array.
const studentReducer = (state = initialState , action ) => {

    switch(action.type){
        case "ADD_STUDENT" :
           return [...state ,action.payload];
        
        default:
            return state;
    }
}

export default studentReducer;