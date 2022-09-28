import { BsCaretLeftSquareFill } from "react-icons/bs";
import { BsFillCaretRightSquareFill } from "react-icons/bs";
import "./Slider.css";

export default function BtnSlider({ direction, moveSlide }) {
    
    return (
      <button
        onClick={moveSlide}
        className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
      >
       {direction === "next" ? <BsFillCaretRightSquareFill /> : <BsCaretLeftSquareFill />} 
      </button>
    );
}