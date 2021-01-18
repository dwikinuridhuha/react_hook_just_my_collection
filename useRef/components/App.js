import React, {useEffect, useRef, useState} from "react"

function App() {

    const [name, setName] = useState('');
    const prevName = useRef('');

    return (
        <div>
            <input ref={prevName} value={name}/>
            <button onClick={(e) => {
                e.preventDefault();
                prevName.current.focus();
                prevName.current.value = "helo";
            }}>Fokus
            </button>
        </div>
    )
}

// function App() {
//
//     const [name, setName] = useState('');
//     const prevName = useRef('');
//
//     useEffect(() => {
//         prevName.current = name;
//     }, [name]);
//
//     return (
//         <div>
//             <input value={name} onChange={(e) => {
//                 return(
//                     setName(e.target.value)
//                 )
//             }}/>
//             <div>My Name is {name} and before {prevName.current}</div>
//         </div>
//     )
// }

export default App
