import React  from 'react'
import ReactDOM from 'react-dom'
import { IoMdCloseCircle } from "react-icons/io";
const MODAL_STYLES = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    backgroundColor: 'white',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    height: '90%',
    width: '50%',
    borderRadius: '5px',
    boxShadow: '1px 1px 10px gray',
}


const OVERLAY_STYLES = {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1000,
    backgroundColor:"rgba(0,0,0,0.2)"
}

const Model = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <>
            <div style={OVERLAY_STYLES}/>
            <div style={MODAL_STYLES}>
                <button className="ml-[95%]" onClick={onClose}><IoMdCloseCircle className='text-3xl text-purple-800 hover:text-purple-500'/></button>
                {children}
            </div>
        </>,
        document.getElementById('model-root')
    )
}

export default Model