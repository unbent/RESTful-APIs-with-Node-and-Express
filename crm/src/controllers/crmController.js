import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

function logRequestFinished(request) {
    console.log(
        `Finished processing ${request.method} request for ${request.url}`
    );
}

export const addNewContact = async (request, response) => {
    try {
        const newContact = new Contact(request.body);
        const contact = await newContact.save();

        logRequestFinished(request);
        response.json(contact);
    } catch (err) {
        response.status(500).send(err);
    }
};

export const getContacts = async (request, response) => {
    try {
        const allContacts = await Contact.find({});

        logRequestFinished(request);
        response.json(allContacts);
    } catch (err) {
        response.status(500).send(err);
    }
};
