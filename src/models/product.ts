import { dbQuery } from "../services/db"

export type Product = {
    id: number,
    nome: string,
    price: number
}

export const insertProducts = async (products: Product) => {
    await dbQuery('INSERT INTO products(name, price) VALUES(?, ?)', [products.nome, products.price])
    let retorno = await dbQuery(`SELECT seq AS Id FROM sqlite_sequence WHERE name = 'products'`) 
    return retorno[0].Id as number | undefined
}
