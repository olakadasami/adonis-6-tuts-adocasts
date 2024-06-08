/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const RedisController = () => import('#controllers/redis_controller')
const MoviesController = () => import('#controllers/movies_controller')
import router from '@adonisjs/core/services/router'

router.get('/', [MoviesController, 'index']).as('home')
router.get('/movies/:slug', [MoviesController, 'show']).as('movies.show')

router.delete('/redis/flush', [RedisController, 'flush']).as('redis.flush')
router.delete('/redis/:slug', [RedisController, 'destroy']).as('redis.destroy')
