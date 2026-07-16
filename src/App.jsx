import { useRef, useState } from 'react'
import './App.css'
import Home from "./page/Home"
import Product from "./page/Product"
import Story from "./page/Story"
import Blog from './page/Blog'
import Contact from './page/Contact'

function App() {
  // 1. Lifted state: 0 = Coffee, 1 = Chips
  const [activeIndex, setActiveIndex] = useState(0);
  
  const pageTwo = useRef(null);
  const pagethree = useRef(null);
  const pagefour = useRef(null);
  const pagefive = useRef(null);

  const nextpage = () => {
    pageTwo.current?.scrollIntoView({ behavior: "smooth" })
  }
  const Storypage = () => {
    pagethree.current?.scrollIntoView({ behavior: "smooth" })
  }
  const fourthpage = () => {
    pagefour.current?.scrollIntoView({ behavior: "smooth" })
  }
  const fifthpage = () => {
    pagefive.current?.scrollIntoView({ behavior: "smooth" })
  }

  return (
    <>  
      <Home 
        nextpage={nextpage}
        Storypage={Storypage}
        Blogpage={fourthpage}
        Contactpage={fifthpage}      
      />

      {/* 2. Pass activeIndex and setActiveIndex down to the Product page */}
      <Product 
        ref={pageTwo} 
        Storypage={Storypage}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
      />
      
      {/* 3. Pass activeIndex down to the Story page */}
      <Story 
        ref={pagethree}
        activeIndex={activeIndex}
      />
      
      <Blog ref={pagefour}/>
      <Contact ref={pagefive}/>
    </>
  )
}

export default App