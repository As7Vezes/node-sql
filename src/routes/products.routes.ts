import { Router } from "express";
import { productController } from "../controllers/product";

const productRouter = Router()

productRouter.post('/products', productController.insertProducts)

export {
    productRouter
}

