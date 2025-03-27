import { forwardRef } from "react";
import "../style/home/GuestBook.scss";

const GuestBook = forwardRef((props, ref) => {
    return (
        <div className="GuestBook-layout">
            <section ref={ref} id="guestbook">
                <h2>GuestBook</h2>
            </section>
        </div>
    );
});

export default GuestBook;