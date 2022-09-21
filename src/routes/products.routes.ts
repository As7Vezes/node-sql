import { Router } from "express";
import { productController } from "../controllers/productControllers";

const productRouter = Router()

productRouter.post('/', productController.insertProduct)
productRouter.get('/', productController.listProducts)
productRouter.get('/:id', productController.getProduct)
productRouter.delete('/:id', productController.deleteProduct)
productRouter.put('/:id', productController.updateProduct)


export {
    productRouter
}

