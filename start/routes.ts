/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

const components = [
  'accordion',
  'alert',
  'button',
  'form'
]


Route.get('/', async ({ view }) => {
  return view.render('pages/welcome', { components })
})

Route.get('/components/:name', async ({ view, params }) => {
  return view.render(`pages/components/${params.name}`)
}).as('components')

Route.post('/form', ({ request, response }) => {
  console.log('METHOD', request.method())
  return response.redirect().back()
}).as('form.post')

Route.put('/form', ({ request, response }) => {
  console.log('METHOD', request.method())
  return response.redirect().back()
}).as('form.put')

Route.patch('/form', ({ request, response }) => {
  console.log('METHOD', request.method())
  return response.redirect().back()
}).as('form.patch')

Route.delete('/form', ({ request, response }) => {
  console.log('METHOD', request.method())
  return response.redirect().back()
}).as('form.delete')