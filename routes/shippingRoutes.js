const express = require("express")
const router = express.Router()
const {getShipping,createShipping,updateShipping,deleteShipping} = require("../controller/shippingController")

router.route('/').get(getShipping).post(createShipping)
router.route("/:id").put(updateShipping).delete(deleteShipping)


module.exports = router