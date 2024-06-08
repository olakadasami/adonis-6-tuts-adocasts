import Movie from '#models/movie'
import type { HttpContext } from '@adonisjs/core/http'

export default class MoviesController {
  async index({ view }: HttpContext) {
    const recentlyReleased = await Movie.query()
      .withScopes((scope) => scope.released())
      .orderBy('releasedAt', 'desc')
      .limit(9)

    return view.render('pages/home', { recentlyReleased })
  }

  async show({ view, params }: HttpContext) {
    const movie = await Movie.findByOrFail('slug', params.slug)

    return view.render('pages/movies/show', { movie })
  }
}
