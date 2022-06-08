import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { incrementCreator, decrementCreator } from './store/countReducer';

function App() {
    const count = useSelector(state => state.countReducer.count);
    const users = useSelector(state => state.userReducer.users);
    const dispatch = useDispatch();

    return (
        <div className="App">
            <div>
                <button onClick={() => dispatch(incrementCreator())}>Increment++</button>
                <button onClick={() => dispatch(decrementCreator())}>Dencrement--</button>
                <button>Get users</button>
            </div>
        </div>
    );
}

export default App;
