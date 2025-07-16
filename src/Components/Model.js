import { createPortal } from "react-dom";
function Modal({isOpen,onClose,children}){
    if(!isOpen) return null
    return createPortal(
        <div className="backdrop" onClick={onClose}>
            <div className="model" onClick={e=>e.stopPropagation()}>
                {children}
                <button onClick={onClose}>Close</button>
            </div>
        </div>,
        document.getElementbyId('portal-root')
    )
}
export default Modal;  
