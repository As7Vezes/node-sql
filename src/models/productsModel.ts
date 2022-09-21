import { dbQuery, dbQueryFirst } from "../services/db"

export type Product = {
    id: number;
    name: string;
    price: number;
}

const insertProduct = async (product: Product) => {
    await dbQuery(`INSERT INTO products (name, price) VALUES(?, ?)`, [product.name, product.price])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE  name = 'product'`);
    return getProduct(retorno[0].Id);
}

const updateProduct = async (product: Product) => {
    await dbQuery(`UPDATE products SET name = ?, price = ? WHERE id = ?`, [product.name, product.price, product.id])
    return getProduct(product.id);
}

const listProducts = async () => {
    const retorno = await dbQuery(`SELECT * FROM products`);
    return retorno as Product[];
}

const getProduct = async (id: number) => {
    const retorno = await dbQueryFirst(`SELECT * FROM products WHERE id = ?`, [id]);
    return retorno as Product | undefined;
}

const deleteProduct = async (id: number) => {
    await dbQueryFirst(`DELETE FROM products WHERE id = ?`, [id]);
}

export const productModel = {
    insertProduct,
    listProducts,
    getProduct,
    deleteProduct,
    updateProduct
}