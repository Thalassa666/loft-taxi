import { setCashState } from "../actions";

export default (store) => (next) => (action) => {
    if (action.type === setCashState.toString()) {
        const state = store.getState();
        localStorage.setItem("APP_STATE", JSON.stringify(state));
    } else {
        setTimeout(() => {
            store.dispatch(setCashState());   
        }, 100);
    }
    return next(action);
}