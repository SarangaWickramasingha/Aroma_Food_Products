import { forwardRef } from "react";


const  Story=forwardRef((prop, ref)=>{
    return(
    <section ref={ref} style={{ height: "100vh", background: "#d0e8ff" }}>
      <h1>Story page</h1>
    </section>
    )

})

export default Story
