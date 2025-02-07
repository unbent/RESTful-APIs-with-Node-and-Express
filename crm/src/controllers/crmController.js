import mongoose from 'mongoose'
import { ContactSchema } from '../models/crmModel'

const Contact = mongoose.model('Contact', ContactSchema)

export const addNewContact = async (request, response) => {
    try {
        const newContact = new Contact(request.body)
        const contact = await newContact.save()

        response.json(contact)
    } catch (err) {
        response.status(500).send(err)
    }
}
