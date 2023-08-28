import { useContext, useEffect, useRef } from "react"
import { SomeContext } from "../App.jsx"

export default function UseContextTester() {
    const contextState = useContext(SomeContext);
    const divRef = useRef();

    useEffect(() => {
        divRef.current.animate({
            backgroundColor: "red"
        }, {
            duration: 300
        })
    }, [contextState])

    return (
        <div ref={divRef} className="bg-cyan-300 mx-64 mt-2 ">
            context state: {contextState}
        </div>
    )
};
