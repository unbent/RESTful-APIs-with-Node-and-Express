const routes = (app) => {
    app.route('/contact')
    .get((request, response) => {
        response.send('GET request successful!')
    })

    .post((request, response) => {
        response.send('POST request successful!')
    })
    
    app.route('/contact/:contactId')
    .put((request, response) => {
        response.send('PUT request successful!')
    })
    

    .delete((request, response) => {
        response.send('DELETE request successful!')
    })
}

export default routes;