import { useRef, useState } from 'react'
import './App.css'
import Home from "./page/Home"
import Product from "./page/Product"
import Story from "./page/Story"
import Blog from './page/Blog'
import Contact from './page/Contact'
import cfepacket from './assets/coffee-packet.png'


function App() {
  
  const pageTwo =useRef(null);
  const pagethree = useRef(null);
  const pagefour =useRef(null);
  const pagefive =useRef(null);

  const nextpage =()=>{
    pageTwo.current?.scrollIntoView({behavior:"smooth"})
  }
  const Storypage =()=>{
    pagethree.current?.scrollIntoView({behavior:"smooth"})

  }
  const fourthpage =()=>{
    pagefour.current?.scrollIntoView({behavior:"smooth"})

  }
  const fifthpage =()=>{
    pagefive.current?.scrollIntoView({behavior:"smooth"})

  }

  return (
    <>  
      <Home nextpage={nextpage}
      Storypage={Storypage}
      Blogpage={fourthpage}
      Contactpage={fifthpage}      
      />

      <Product ref={pageTwo} Storypage={Storypage}/>
      <Story ref={pagethree}/>
      <Blog ref={pagefour}/>
      <Contact ref={pagefive}/>

    </>
  )
}

export default App
