import { forwardRef } from "react";

const Blog=forwardRef((props,ref)=>{
    return (
        <section ref={ref} style={{height:"100vh", background:"#d0e8ff"}}>
            <h1>Blog</h1>
        </section>
    )
})
export default Blog