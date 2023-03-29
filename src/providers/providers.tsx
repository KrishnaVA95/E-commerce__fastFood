// eslint-disable-next-line no-use-before-define
import React from 'react'
import { CartProvider } from './CartContext/CartContext'
import { ShopProvider } from './ShopContext/ShopContext';
import { UserProvider } from './UserContext/UserContext'
import { iPropsProviders } from './types';



export const Providers = ({ children } : iPropsProviders) =>
<UserProvider>
    <ShopProvider>
        <CartProvider>
            { children }
        </CartProvider>
    </ShopProvider>
</UserProvider>




