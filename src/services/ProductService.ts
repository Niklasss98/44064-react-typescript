import  { Product } from "../types/Product";

const BASE_URL = 'https://fakestoreapi.com';

export const ProductService = {

    /* Metodos CRUD*/

    /* Obtiene una lista de Productos */
    getProducts: async (): Promise<Product[]> => {
        const response = await fetch(`${BASE_URL}/products`);
        const data = await response.json();

        return data;
    },

    /* Obtiene un Producto especfico, referenciado por id */
    getProduct:async (id:number): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`);
        const data = await response.json();

        return data;
    },

     /* Agrega un Producto a la lista */
    createProduct:async (product:Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products`,{
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }
        );
        const data = await response.json();
        
        return data;
    },

     /* Actualiza o cambia los valores especificados del Producto elegido por id */
    updateProduct:async (id:number, product:Product): Promise<Product> => {
        const response = await fetch(`${BASE_URL}/products/${id}`, {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(product)
            }
        );
        const data = await response.json();

        return data;
    },
    /* Elimina el Producto elegido por id */
    deleteProduct:async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/products/${id}`,{
                method: "DELETE"
            }
        );
    }

}
