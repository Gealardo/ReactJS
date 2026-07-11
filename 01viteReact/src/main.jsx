import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import App from './App.jsx'
/*
const elementReact1={
  type:'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click me'
}

const elementReact2=(

    <a href="https://google.com">visit google</a>

)

const elementReact3=React.createElement(
   'a',
   {href:'https//google.com'},
   'click me',

)
*/

createRoot(document.getElementById('root')).render(
  <StrictMode>

    <App/>

  </StrictMode>
   

    // App() // works
    //elementReact1  // not work , in conversion html function->object(with special keys not mine)->rendering
    //elementReact2 // works
    // elementReact3()

  
)
