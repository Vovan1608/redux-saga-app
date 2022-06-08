const defaultState = {
    count: 0
};

export const INCREMENT = 'INCREMENT';
export const ASYNC_INCREMENT = 'ASYNC_INCREMENT';
export const DICREMENT = 'DICREMENT';
export const ASYNC_DECREMENT = 'ASYNC_DECREMENT';

export default function countReducer (state = defaultState, action) {
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
export const asyncIncrementCreator = () => ({ type: ASYNC_INCREMENT });
export const asyncDecrementCreator = () => ({ type: ASYNC_DECREMENT });
