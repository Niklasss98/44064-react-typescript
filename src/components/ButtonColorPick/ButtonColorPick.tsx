import { useState } from "react";
import ModalColorPick from "../ModalColorPick/ModalColorPick";
import { Button } from "react-bootstrap";


const ButtonColorPick = () => {
  
    /* Color inicial del botón */
    const [buttonColor, setButtonColor] = useState("#D95030");

    /* Manejo del Modal */
    const [showModal, setShowModal] = useState(false);

    /* Función para cambiar el color del botón */
    const handleColorChange = (color: string) => { setButtonColor(color); };
  
    /*Función al hacer click en el botón para mostrar el modal*/
    const handleShowModal = () => { setShowModal(true);} ;
    
    return (
    <div className="m-3">
        <h2> Ejemplo 3 - Modal</h2>

        {/* Componente Padre */}
        <Button variant="primary" style={{backgroundColor: buttonColor}} onClick={handleShowModal}> Cambiar color</Button>

        {/* Componente Hijo */}
        {showModal && <ModalColorPick
        show={showModal}
        onHide={() => setShowModal(false)}
        handleColorChange={handleColorChange} />}
    </div>
  )
}

export default ButtonColorPick