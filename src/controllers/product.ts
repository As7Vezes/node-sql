import { Request, Response } from "express";
import { Product, productModel } from "../models/product";
import { badRequest, internalServerError } from "../services/ultil";

const insertProducts = (req: Request, res: Response) => {
    {
        const product = req.body
        if(!product)
            return badRequest(res, "Produto inválido")
        if(!product.name)
            return badRequest(res, "Informe o nome do Produto")
        if( !(parseFloat(product.price) > 0) )
            return badRequest(res, "Informe o preço")
    }

    const product = req.body as Product
    return productModel.insertProducts(product)
        .then(product => {
            res.json(product)
        })
        .catch(err => internalServerError(res, err))

}

export const productController = {
    insertProducts
}