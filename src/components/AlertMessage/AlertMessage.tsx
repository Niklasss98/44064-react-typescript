import {useState} from 'react';
import AlertGenerator from '../AlertGenerator/AlertGenerator';

const AlertMessage = () => {

    const [inputValue, setInputValue] = useState('');   /* Constante que guarda el valor del campo de texto */
    const [message, setMessage] = useState('');         /* Constante que guarda el mensaje */
    const [showAlert, setShowAlert] = useState(false);  /* Constante que muestra el componente hijo según el estado */
    const handleClick = () => {                         /* Si el campo de texto no está vacío, se guarda el texto que escribió el usuario en 'message' / Se renderiza el componente hijo*/
        if(inputValue.trim() !== '') {
            setShowAlert(true);
            setMessage(inputValue);
        }
         else {
            setShowAlert(false);
         }
    }

 
return(
    <div className='m-3'>
        <h2>Ejemplo 2 - Mensaje de Alerta</h2>
        {/* Componente Padre */}
        <input type='text' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        <button onClick={handleClick}>Enviar</button>
        {/* Componente Hijo */}
        {showAlert && <AlertGenerator message={message}/>}
    </div>
)
}

export default AlertMessage