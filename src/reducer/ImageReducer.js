const initState = {
    approved: [],
    rejected: []
}

const getInintState = () => {
    const store = JSON.parse(localStorage.getItem('images'));
    return (store?.approved?.length || store?.rejected?.length)
        ? store
        : initState
}

const imageReducer = (state = getInintState(), action) => {
    switch (action.type) {
        case "APPROVED":
            state.approved.push(action.url);
            localStorage.setItem('images', JSON.stringify(state));
            return state
        case "REJECTED":
            state.rejected.push(action.url);
            localStorage.setItem('images', JSON.stringify(state));
            return state;
        default:
            localStorage.setItem('images', JSON.stringify(state));
            return state;
    }
};

export default imageReducer;
