import { request, response } from 'express';
import { addNewContact, getContacts } from '../controllers/crmController';

const routes = (app) => {
    app.route('/contact')
        .all((request, response, next) => {
            logRequestDetails(request); // This will log for all HTTP methods
            next();
        })

        .get(getContacts)

        .post(addNewContact);

    app.route('/contact/:contactId')
        .all((request, response, next) => {
            logRequestDetails(request); // This will log for all HTTP methods
            next();
        })

        .put((request, response, next) => {})

        .delete((request, response, next) => {});
};

function logRequestDetails(request) {
    console.log(
        `Started processing ${request.method} request for ${request.url}`
    );
}

export default routes;
