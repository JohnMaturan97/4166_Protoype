const initialData = {
    ships : ['{}'],

};

export const  shipsReducer = (state=initialData , action)=>{

     switch(action.type)
     {
        //  case 'GET_ALL_SHIPS' : {
        //      return{
        //          ...state,
        //          ships : action.payload
        //      }
        //  }
         
        //  default:return state
        default: return state
     }

}
