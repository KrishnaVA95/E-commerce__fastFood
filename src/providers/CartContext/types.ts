import React from "react";
import { iItemShop } from "../ShopContext/types";


export interface iItemCart{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
    quantity: number;
}

export interface iCartContext{
    modalCart: boolean;
    setModalCart: React.Dispatch<React.SetStateAction<boolean>>;
    productsCart: iItemCart[];
    setProductsCart: React.Dispatch<React.SetStateAction<iItemCart[]>>;
    addProductToListCart:  (product: iItemShop) => void;
    removeProductFromListCart: (productId: number) => void;
    currentCartValue: () => number;
    resetListCart: () => void;
    sunCurrentQuantity: (productId: number) => void;
    restCurrentQuantity: (productId: number) => void;

}