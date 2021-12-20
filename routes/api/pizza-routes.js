
const router = require('express').Router();
const { 
    getAllPizza, 
    getPizzaById,
    createPizza,
    updatePizza, 
    deletePizza
} = require('../../controllers/pizza-controller');

// /api/pizzas
router
    .route('/')
    .get(getAllPizza)
    .post(createPizza);

//set up GET by ID, PUT and DEL at /api/pizzas/:id
router 
    .route('/:id')
    .get(getPizzaById)
    .put(updatePizza)
    .delete(deletePizza);

module.exports = router;