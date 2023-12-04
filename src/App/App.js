import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, fullComp, increment, incrementByAmount, selectFullName, selectValue, selectValue1 } from "../slices/base";

import "../styles/reset.css"
import "../styles/base.css"

import Header from "../modules/Header/Header"
import Footer from "../modules/Footer/Footer"
import { Outlet } from "react-router-dom";
// import ButtonScrollToTop from "../modules/ui/ButtonScrollToTop/ButtonScrollToTop";



// function App() {
// const dispatch = useDispatch()
// const object = useSelector(fullComp)
// const { value, name, lastName } = useSelector(fullComp)
// console.log(value)

// return <div>{object.value}
//     <button onClick={() => dispatch(increment())}>+</button>
//     <button onClick={() => dispatch(decrement())}>-</button>
//     <button onClick={() => dispatch(incrementByAmount(2))}>+2</button>
//     {name + lastName}
//     <h1>ddd</h1>
// </div>

//     return (
//         <div>wefwef</div>
//     )
// }

const App = () => {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}


export default App;
