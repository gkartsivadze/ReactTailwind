import { useDispatch, useSelector } from "react-redux"
import { ADD, MINUS, TOGGLE } from "../redux/reducers"

export default function ReduxTester(  ) {
    const number = useSelector(state => state.number)
    const onOff = useSelector(state => state.onOff)
    const dispatch = useDispatch();

    return (
        <div className="mx-auto max-w-2xl bg-green-200 flex flex-col items-center">
            <p>Amount: { number }</p>
            <div>
                <button
                    onClick={() => dispatch(MINUS())}
                    className="p-3 bg-green-500 rounded-full mx-3">-</button>
                <button
                    onClick={() => dispatch(ADD())}
                    className="p-3 bg-green-500 rounded-full mx-3">+</button>
            </div>

            <br />

            <p>State: { onOff ? "TRUE" : "FALSE"}</p>
            <button onClick={() => dispatch(TOGGLE())}>Toggle</button>
        </div>
    )
};