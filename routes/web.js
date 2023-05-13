const homeController = require('../app/http/controllers/homeController')
const authController = require('../app/http/controllers/authController')
const cartController = require('../app/http/controllers/customers/cartController')
const orderController = require('../app/http/controllers/customers/orderController')
const adminOrderController = require('../app/http/controllers/admin/orderController')
const statusController = require('../app/http/controllers/admin/statusController')
const workoutController= require('../app/http/controllers/customers/workoutController')
const recipeController=require('../app/http/controllers/customers/recipeController')
const BMIController= require('../app/http/controllers/customers/BMIController')



// Middlewares 
const guest = require('../app/http/middlewares/guest')
const auth = require('../app/http/middlewares/auth')
const admin = require('../app/http/middlewares/admin')
const dietController = require('../app/http/controllers/customers/dietController')

function initRoutes(app) {
    app.get('/', homeController().index)
    app.get('/login', guest, authController().login)
    app.post('/login', authController().postLogin)
    app.get('/register', guest, authController().register)
    app.post('/register', authController().postRegister)
    app.post('/logout', authController().logout)

    app.get('/cart', cartController().index)
    app.post('/update-cart', cartController().update)

    // Customer routes
    app.post('/orders', auth, orderController().store)
    app.get('/customer/orders', auth, orderController().index)
    app.get('/customer/orders/:id', auth, orderController().show)
    app.get('/workout', auth, workoutController().excercise)
    app.post('/workout/search',workoutController().search);
    app.get('/recipes', auth, recipeController().recipe)
    app.post('/recipes/search', recipeController().search)
    app.get('/BMI',auth, BMIController().bmi)
    app.post('/BMI/result', BMIController().search)
    app.get('/diet',auth,dietController().diet)


    // Admin routes
    app.get('/admin/orders', admin, adminOrderController().index)
    app.post('/admin/order/status', admin, statusController().update)
}

module.exports = initRoutes

