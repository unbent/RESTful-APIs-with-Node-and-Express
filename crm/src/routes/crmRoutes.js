import { request, response } from 'express'

const routes = (app) => {
  app
    .route('/contact')
    .get(
      (request, response, next) => {
        //middleware
        logRequestDetails(request)
        next()
      },
      (request, response, next) => {
        response.send('GET request successful!')
      }
    )

    .post(
      (request, response, next) => {
        //middleware
        logRequestDetails(request)
        next()
      },
      (request, response, next) => {
        response.send('POST request successful!')
      }
    )

  app
    .route('/contact/:contactId')
    .put(
      (request, response, next) => {
        //middleware
        logRequestDetails(request)
        next()
      },
      (request, response, next) => {
        response.send('PUT request successful!')
      }
    )

    .delete(
      (request, response, next) => {
        //middleware
        logRequestDetails(request)
        next()
      },
      (request, response, next) => {
        response.send('DELETE request successful!')
      }
    )
}

function logRequestDetails(request) {
  console.log(`Request from ${request.originalUrl}`)
  console.log(`Request type ${request.method}`)
}

export default routes
