const express = require("express")
const router = express.Router()
const {getAllOrders,createOrders,updateOrders,deleteOrders} = require("../controller/orderController")

router.route('/').get(getAllOrders).post(createOrders)
router.route("/:id").put(updateOrders).delete(deleteOrders)

module.exports=router