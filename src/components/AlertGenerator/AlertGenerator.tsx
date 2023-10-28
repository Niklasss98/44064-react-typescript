import { Alert, AlertHeading } from "react-bootstrap"

type AlertGeneratorProps = {    /* Especifica cuales son los props y el tipo de dato que el componente hijo puede recibir */
    message: string;
}

/* El componente hijo tiene argumentos del tipo AlertGeneratorProps */
const AlertGenerator = ({message}: AlertGeneratorProps) => {
  return (
    <Alert variant="success" className="mt-2 w-25">
        <AlertHeading> Mensaje Recibido </AlertHeading>       
        <p>
            {message}
        </p>
    </Alert>
  )
}

export default AlertGenerator