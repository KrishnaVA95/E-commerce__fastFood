import { createContext,  useState } from "react";
import { AxiosError } from "axios";

import { iItemShop, iShopContext } from "./types";
import { api } from "../../services/api";
import { iApiError, iPropsProviders } from "../types";



export const  ShopContext = createContext({} as iShopContext)

export const ShopProvider = ({ children }: iPropsProviders ) =>{

    const [ products, setProducts ] = useState<iItemShop[]>([])

    const [search, setSearch] = useState('');

    
    const renderListProducts = async () =>{
        const token = localStorage.getItem("@Hamburgueria:TOKEN")
        try {
            const response = await api.get<iItemShop[]>('/products', {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            } )
            setProducts(response.data)
        } catch (error) {
            const currentError = error as AxiosError<iApiError>
            console.error(currentError)
        }
    }
    
    const searchProductList = products.filter((product) => 
         search === '' ? true : (product.name.toLowerCase().trim()).includes(search.toLowerCase().trim()) || (product.category.toLowerCase().trim()).includes(search.toLowerCase().trim() ) )



    return(
        <ShopContext.Provider value={{
            products,
            renderListProducts,
            searchProductList,
            setSearch,
            search
        }}>
            { children }
        </ShopContext.Provider>
    )
}