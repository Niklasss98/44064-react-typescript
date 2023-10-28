import { useEffect, useState } from "react"
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";
import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ModalType } from "../../types/ModalType";
import ProductModal from "../ProductModal/ProductModal";
import EditButton from "../EditButton/EditButton";
import DeleteButton from "../DeleteButton/DeleteButton";



const ProductTable = () => {
 
    /* Variable que va a contener los datos recibidos por la API*/
    const [products, setProducts] = useState<Product[]>([]);
  
    /* Variable que muestra el Loader(spinner) hasta que se reciban los datos provenientes de la API */
    const [isLoading, setIsLoading] = useState(true);

    /* Variable que va a actualizar los datos de la tabla luego de cada operación exitosa*/
    const [refreshData, setRefreshData] = useState(false);


    /* Hook que se va a ejecutar cada vez que se renderice el componente o 'refreshData' cambie de estado*/ 
    useEffect( () => {
            
        /* Llamada a la función para obtener todos los productos declarados en el ProductService */
        const fetchProducts =async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
            }
            
            fetchProducts();
        }, [refreshData]
    );

        /* Test, este log está modificado para que muestre los datos de una manera más legible */
        console.log(JSON.stringify(products, null, 2));

    /* Const para inicializar un producto por defecto y evitar el "undefined" */
    //Creamos un producto nuevo
    const initializableNewProduct = (): Product => {
        return {
            id: 0,
            title:"",
            price: 0,
            description: "",
            category: "",
            image: "",
        };
    };

    /* Producto seleccionado que se va a pasar como un Prop al Modal */
    const [product, setProduct] = useState<Product>(initializableNewProduct);

    /* Const para manejar el estado del Modal */
    const [showModal, setShowModal] = useState(false);
    const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
    const [title, setTitle] = useState("");

    /* Lógica del Modal */
    const handleClick = (newTitle:string, prod:Product, modal:ModalType) => {
        setTitle(newTitle);
        setModalType(modal);
        setProduct(prod);
        setShowModal(true);
    };
    
    return (
        <>
        <Button onClick={() => handleClick("Nuevo Producto", initializableNewProduct(), ModalType.CREATE)}> Nuevo Producto </Button>
        {isLoading ? <Loader/> : (
            <Table hover>
                <thead>
                    <tr>
                        <th> ID </th> 
                        <th> Título </th>
                        <th> Precio </th>
                        <th> Descripción </th>
                        <th> Categoría </th>
                        <th> Imagen </th>
                        <th> Editar </th>
                        <th> Eliminar </th>
                    </tr>
                </thead>
                <tbody>
                    {products.map( product => (
                        <tr key={product.id}>
                            <td>{product.id}</td>
                            <td>{product.title}</td>
                            <td>${product.price}</td>
                            <td >{product.description}</td>
                            <td>{product.category}</td>
                            <td><img src={product.image} alt={product.title} style={{width: '150px'}}/></td>
                            <td> <EditButton onClick={() => handleClick("Editar Producto", product, ModalType.UPDATE)}/> </td>
                            <td> <DeleteButton onClick={() => handleClick("Borrar Producto", product, ModalType.DELETE)}/> </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            )    
        }
        {showModal && (
            <ProductModal
            show={showModal}
            onHide={() => setShowModal(false)}
            title={title}
            modalType={modalType}
            prod={product}
            refreshData={setRefreshData}
            />
        )}
        </>
    )
}

export default ProductTable