import { request, response } from 'express';
import { addNewContact } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .all((request, response, next) => {
            logRequestDetails(request); // This will log for all HTTP methods
            next();
        })

        .get((request, response, next) => {
            response.send('GET request successful!');
        })

        .post(addNewContact);

    app.route('/contact/:contactId')
        .all((request, response, next) => {
            logRequestDetails(request); // This will log for all HTTP methods
            next();
        })

        .put((request, response, next) => {
            response.send('PUT request successful!');
        })

        .delete((request, response, next) => {
            response.send('DELETE request successful!');
        });
};

function logRequestDetails(request) {
    console.log(`Request from ${request.originalUrl}`);
    console.log(`Request type ${request.method}`);
}

export default routes;
