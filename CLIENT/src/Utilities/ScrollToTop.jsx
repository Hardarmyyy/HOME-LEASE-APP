import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = ({ children}) => {

const location = useLocation()
const Location = location.pathname
useEffect(() => {
window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth"
});
}, [Location]);

return children || null;
};

export default ScrollToTop;