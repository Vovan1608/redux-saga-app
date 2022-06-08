const defaultState = {
    count: 0
};

export const INCREMENT = 'INCREMENT';
export const DICREMENT = 'DICREMENT';

export default countReducer = (state = defaultState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { ...state, count: state.count + 1 };

        case DICREMENT:
            return { ...state, count: state.count - 1 };

        default:
            return state;
    }
};

export const incrementCreator = () => ({ type: INCREMENT });
export const decrementCreator = () => ({ type: DICREMENT });
