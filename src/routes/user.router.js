const { getAll, create, getOne, destroy, update } = require('../controllers/user.controller');
const express = require('express');

const userRouter = express.Router();
//Rutas estaticas
userRouter.route("/")
		.get(getAll)
        .post(create)
//Rutas dinamicas
userRouter.route("/:id")
    .get(getOne)
    .delete(destroy)
    .put(update)

module.exports = userRouter;