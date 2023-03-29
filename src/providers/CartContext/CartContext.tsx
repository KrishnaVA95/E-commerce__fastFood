/* eslint-disable no-return-assign */
import { createContext, useState } from "react";
import { toast } from 'react-toastify';

import { iCartContext, iItemCart } from "./types";
import { iItemShop } from "../ShopContext/types";
import { iPropsProviders } from "../types";


export const  CartContext = createContext({} as iCartContext)

export const CartProvider = ({ children }: iPropsProviders ) =>{

    const [modalCart, setModalCart] = useState(false)

    const  [ productsCart, setProductsCart ] = useState<iItemCart[]>([])

    const addProductToListCart = (product : iItemShop) =>{
        let cout = 0
    
        productsCart.forEach((obj) => obj.id === product.id ?  cout += 1 :  cout)

        if(cout === 0){
          setProductsCart([...productsCart, {... product, quantity: 1}])
          toast.success('Produto adicionado com sucesso')
        }else{
          toast.error('Produto já esta no carrinho')
        }
    }

    const removeProductFromListCart = (productId : number) =>{
        const newList = productsCart.filter(product => product.id !== productId)
        setProductsCart(newList)
        toast.success('Produto removido com sucesso')
    }

    const currentCartValue = () =>{
        const totalValue = productsCart.reduce((previous, current) =>  {
          const currentValueNumber = Number(current.price * current.quantity)
          return  previous + currentValueNumber
        }, 0 )
        return totalValue
    }

    const resetListCart = () =>{
        setProductsCart([])
        toast.success('carrinho vazio')
    }

    const sunCurrentQuantity = (productId : number) => {
        const updatedListCart = productsCart.map((product) => {
          if(product.id === productId ){
            product.quantity += 1
            return product
          }
          return product
        })
        setProductsCart(updatedListCart)
        toast.success('Quantidade atualizada')
    }

    const restCurrentQuantity = (productId: number) => {
        let cout = 0
        const updatedListCart = productsCart.map((product) => {
          if(product.id === productId ){
            if(product.quantity > 1){
              product.quantity -=  1
              return product
            }
            cout +=  1
            return product
          }
            return product
          
        })
        if(cout === 0){
          setProductsCart(updatedListCart)
          toast.success('Quantidade atualizada')
        }
    }

    return(
        <CartContext.Provider value={{
            modalCart,
            setModalCart,
            productsCart,
            setProductsCart,
            addProductToListCart,
            removeProductFromListCart,
            currentCartValue,
            resetListCart,
            sunCurrentQuantity,
            restCurrentQuantity
        }}>
            { children }
        </CartContext.Provider>
    )
}