import rootReducer from '../rootReducer'

export const myLogger = (store) => (next) => (action) =>{
    console.log(`Action: ${JSON.stringify(action)}`);
    console.log(`Before: ${JSON.stringify(store.getState())}`);


    const upCommingState = [action].reduce(rootReducer, store.getState());  
    console.log(`Up comming state ${JSON.stringify(upCommingState)}`)

    // pass action  
    // if(store.getState().dynamicCounter.value !== 16){
    //     return next(action);
    // }

    return next(action);

}