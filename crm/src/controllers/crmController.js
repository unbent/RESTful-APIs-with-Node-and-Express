import mongoose from 'mongoose';
import { ContactSchema } from '../models/crmModel';

const Contact = mongoose.model('Contact', ContactSchema);

function logRequestFinished(request) {
    console.log(
        `Finished processing ${request.method} request for ${request.url}`
    );
}

function contactNotFound(contact, response) {
    if (!contact) {
        response.status(404).json({ message: 'Contact not found' });
        return true;
    }
    return false;
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

export const getContactWithID = async (request, response) => {
    try {
        const contact = await Contact.findById(request.params.contactId);

        if (contactNotFound(contact, response)) return;

        logRequestFinished(request);
        response.json(contact);
    } catch (err) {
        response.status(500).send(err);
    }
};

export const updateContact = async (request, response) => {
    try {
        const contact = await Contact.findOneAndUpdate(
            { _id: request.params.contactId },
            request.body,
            { new: true }
        );

        if (contactNotFound(contact, response)) return;

        logRequestFinished(request);
        response.json(contact);
    } catch (err) {
        response.status(500).send(err);
    }
};

export const deleteContact = async (request, response) => {
    try {
        const contact = await Contact.findByIdAndDelete(request.params.contactId);

        if (contactNotFound(contact, response)) return;

        logRequestFinished(request);
        response.json(contact);
    } catch (err) {
        response.status(500).send(err);
    }
};
