


export interface iItemShop{
    id: number;
    name: string;
    category: string;
    price: number;
    img: string;
}


export interface iShopContext{
    products: iItemShop[];
    renderListProducts: () => Promise<void>;
    search: string;
    setSearch: React.Dispatch<React.SetStateAction<string>>;
    searchProductList: iItemShop[];
}