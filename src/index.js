import React from 'react';
import ReactDOM from 'react-dom';
import {
  RouterProvider,
} from "react-router-dom"
import store from './config/store'
import { Provider } from 'react-redux'

import router from './config/router';

ReactDOM.render(
  <RouterProvider router={router} />
  , document.getElementById("root")
)

// Q: як зібрати разом і роутер і провайдер стор

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(

//   <React.StrictMode>
//     <Provider store={store}>


//     </Provider>
//   </React.StrictMode>
// );

