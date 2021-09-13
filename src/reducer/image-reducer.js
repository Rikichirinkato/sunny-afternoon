const initState = {
    approved: [],
    rejected: []
}

const imageReducer = (state = initState, action) => {
    switch (action.type) {
        case "APPROVED":
            state.approved.push(action.url);
            return state
        case "REJECTED":
            state.rejected.push(action.url);
            return state;
        default:
            return state;
    }
};


export default imageReducer;