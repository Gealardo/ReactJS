

// for rendering 
function customRender(myApp,customRoot){
      const domElement= document.createElement(myApp.type)
      
      // for setting attributes
      for(const prop in myApp.props){
         if (prop === 'children') continue;
        domElement.setAttribute(prop,myApp.props[prop])
      }

      domElement.textContent=myApp.children

      customRoot.appendChild(domElement)

}



// create an object  how react get after importing App
const myApp = {
  type:'a',
  props: {
    href: 'https://google.com',
    target: '_blank'
  },
  children: 'click me'
}


const customRoot=document.querySelector('#root')
customRender(myApp,customRoot)