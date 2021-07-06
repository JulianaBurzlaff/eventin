# <p align = "center"> EVENTIN </p>

<p align = "center">
<img src="https://img.shields.io/badge/author-julianaburzlaff-4caf50?style=flat-square" />
<img src="https://img.shields.io/badge/author-luanalessa-4caf50?style=flat-square" />

<img src="https://img.shields.io/github/languages/count/luanalessa/letmeask-nlw?color=4caf50&style=flat-square" />

 <p align = "center"> Application to managing events using QR Code validation . </br> Built with ReactJs using Axios.</p> </br>

<p align = "center"><img src = "https://user-images.githubusercontent.com/72531277/124649381-ca7eab80-de6e-11eb-957a-b438f8fe9b57.jpeg" width = "640"/></p>
<p align = "center"><img src = "https://user-images.githubusercontent.com/72531277/124649280-a91dbf80-de6e-11eb-8cd2-e9c22004f2e2.jpeg" width = "640"/></p>
<p align = "center"><img src = "https://user-images.githubusercontent.com/72531277/124648889-2d237780-de6e-11eb-8f1c-c8a2f741e8de.jpeg" width = "640"/></p>


# 🚀 Hooks 
A Hook is a special function that allows you to use states and other React features without writing a class.

## useState

`useState` is responsable for declaring a state variable. You can pass the initial state and it will return a variable with the current value.

```javascript
import { useState } from 'react'

function Example(){
  const [state, setState] = useState(0);
  setState("testing hooks")
}
```
## useEffect
When you use `useEffect`, you are telling React that your component needs to do something after render. It's important to know that React will always call the function you have passed, after the DOM updates.

This hook accepts 2 arguments:

```javascript
useEffect(callback, [dependencies])
```

1. The `callback` function contains a side-effect logic, where useEffect() will execute after the render.
2. `dependencies` is an optional array of dependencies. In this case, useEffect will execute the callback only if there is any change between renderings.

```javascript
import { useState, useEffect } from 'react'

function Counter(){
  // Setting the initial state of 'counter'
  const [counter, setCounter] = useState(0)
  
  // Creating a function that changes the 'counter' state
  useEffect(() => {
    /* The callback will be executed after the page renders. 
    Then react will compare the counter = [0] (initial state) 
    with the new one, [1]. 
    If there's any change, the useEffect() will be executed again. 
    In this case, we have a loop.*/
    setCounter( counter + 1)
  }, [counter])
 }

```
## useContext

React `useContext` hook is a very useful way to pass data throughout the app tree without using props manually.

```javascript
import { useState, useEffect, useContext, createContext } from 'react'

const CounterContext = createContext() // creating a component to pass data

export function CounterProvider(props){
  const [counter, setCounter] = useState(0)
  
  const increment = () => {
    setCounter(counter + 1)
  }
  
  const decrement = () => {
    setCounter(counter - 1)
  }
  
  return (
    // telling React which data you wanna pass with your CounterContext. 
    ///It can be a function, an array, etc etc.
    <CounterContext.Provider value = {{ counter, increment, decrement }}> 
      {props.children}
    <CounterContext.Provider />
  )
}
```

```javascript

import { CounterContext } from "../../providers/CounterProvider"

export default function PageInputContext(){
    const {counter, increment, decrement} = useContext(CounterContext)
    
}

```

## useCallback

This hook can be used to optimize the rendering of your React components. This way, `useCallback` will return a memoized version of the function, that only will be rendered if the value of the dependencies changes.

```javascript
const increment = useCallback(()=>{
  setCounter(counter + 1)
}, [counter])

const decrement = useCallback(()=>{
  setCounter(counter - 1)
}, [counter])

```
</br>



# 🏁 Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app), so you need to install [Node.js](https://nodejs.org/en/download/) and [Yarn](https://yarnpkg.com/) first, in order to test the project.

Then, clone the repository with:

```
git clone https://github.com/julianaburzlaff/eventin.git
```

So, in the project directory, you can run:

```
yarn install
```
to install the dependencies,

```
yarn server
```
to start the fake API and:

```
yarn start
```

to open the project on [localhost](http://localhost:3000) in your browser.
