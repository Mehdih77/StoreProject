import {useState, useRef} from "react";
import './Accordion.css';

export default function Accordion({title, children}) {

    const contentRef = useRef();
    const [active,setActive] = useState(false);
    const [accordionHeight,setAccordionHeight] = useState('0px');
    const [iconRotate,setIconRotate] = useState('accordion_icon');

    const handleToggleAccordion = () => {
        setActive(prevActive => !prevActive);
        setAccordionHeight(active
            ? "0px"
            : `${contentRef.current.scrollHeight}px`)
        setIconRotate(active
            ? "accordion_icon"
            : "accordion_icon icon_rotate")
    }

    return (
        <div className="accordion_section my-3">
            <div className="accordion" onClick={handleToggleAccordion}>
                <p className='accordion_title'>{title}</p>
                <i className={`fas fa-chevron-down ${iconRotate}`}></i>
            </div>
            <div
                className='accordion_content'
                ref={contentRef}
                style={{
                maxHeight: `${accordionHeight}`
            }}>
                <div className='accordion_text'>
                {children}
                </div>
            </div>
        </div>
    )
}
