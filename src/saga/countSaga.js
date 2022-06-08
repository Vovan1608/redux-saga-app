import { put, takeEvery } from 'redux-saga/effects';
import { ASYNC_INCREMENT, ASYNC_DECREMENT, decrementCreator, incrementCreator } from '../store/countReducer';

const delay = (ms) => new Promise(res => setTimeout(res, ms));

function* incrementWorker() {
    yield delay(1000);
    yield put(incrementCreator());
};

function* dencrementWorker() {
    yield delay(1000);
    yield put(decrementCreator());
};

export function* countWatcher() {
    yield takeEvery(ASYNC_INCREMENT, incrementWorker);
    yield takeEvery(ASYNC_DECREMENT, dencrementWorker);
};