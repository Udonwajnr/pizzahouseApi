const express = require("express")
const router = express.Router()
const {getMenu,getMenuDetail,createMenu,updateMenu,deleteMenu} = require("../controller/MenuController")

router.route('/').get(getMenu).post(createMenu)
router.route("/:id").get(getMenuDetail).put(updateMenu).delete(deleteMenu)


module.exports=router