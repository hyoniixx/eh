import { useState, useEffect, useReducer } from 'react'

function doChange(state, action) {
    switch (action.type) {

        case "TITLE":
            return {
                ...state,
                title: prompt('input Text')
            }

        case "TIME":
            return {
                ...state,
                time: Date.now()
            }

        case "TEXT":
            return {
                ...state,
                text: action.payload
            }

        case "RESET":
            return {
                title: "",
                time: 0,
                text: ""
            }

        default:
            return state;
    }
}

function Practice1() {

    const [state, dispatch] = useReducer(doChange, {
        title: "",
        time: 0,
        text: ""
    });

    useEffect(() => {
        dispatch({ type: "TITLE" });
        dispatch({ type: "TIME" });
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault();

        if (state.text === state.title) {
            alert(`${Date.now() - state.time} ms`);
            dispatch({ type: "RESET" });
        }
    }

    return (
        <>
            <h1>{state.title}</h1>
            {
                state.title &&
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        value={state.text}
                        onChange={(e) =>
                            dispatch({
                                type: "TEXT",
                                payload: e.target.value
                            })
                        }
                    />
                </form>
            }
        </>
    )
}

export default Practice1