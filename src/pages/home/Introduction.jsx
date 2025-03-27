import { forwardRef } from "react";
import "../style/home/Introduction.scss"
const Introduction = forwardRef((props, ref) => {
    return (
        <div className="introduction-layout">
        <section ref={ref} id="introduction">
            <h2>Introduction</h2>
        </section>
        </div>
    );
});

export default Introduction;