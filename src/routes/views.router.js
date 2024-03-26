import {Router} from "express";
import ProductManager from "../manager/productManager.js";

const productsManager = new ProductManager('./src/manager/products.json');

const router = Router();

router.get("/", (request, response)=>{

    const name = "nombre de prueba";

    response.render("index", {name:name});
});

router.get("/products", async (req, res) => {
    const products = await productsManager.getProducts();
    res.render("home", { products });
});

router.get("/realTimeProducts", async (req, res) => {
    const products = await productsManager.getProducts();
    res.render("realTimeProducts", { products });
});



export default router;