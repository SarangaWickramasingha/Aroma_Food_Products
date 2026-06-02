import { forwardRef } from "react";

const Contatct = forwardRef((props, ref) => {
  return (
    <section ref={ref} style={{ height: "100vh", background: "#d0e8ff" }}>
    <h1>Contatct page</h1>
    </section>
  );
});

export default Contatct;
