const express = require("express");
const router = express.Router();
const controller = require("../controllers/personajes");
const path = "personajes";

router.get(`/${path}`, controller.getData);

router.post(`/${path}`, controller.inserData);

router.delete(`/${path}/:id`, controller.deleteOne);

router.get(`/${path}/:id`, controller.getOne);

router.put(`/${path}/:id`, controller.updateOne);

module.exports = router;
 