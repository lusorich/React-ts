import { actionsType, stateRootType } from "./store";

let initialState = {
    friends: [
        { id: 1, name: "Tony" },
        { id: 2, name: "Molly" },
        { id: 3, name: "Sanny" }
    ]
}

const sidebarReducer = (state: any = initialState, action: actionsType) => {

    return state;
}

export default sidebarReducer;