let controller = {};
let models = require('../models');

controller.getAll = () => {
    return new Promise((resolve, reject) => {
        models.Book
            .findAll({
                attribute : ['id', 'title', 'availability', 'author', 'rating', 'content', 'quantity', 'language'],
            })
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        models.Book
        .findOne({
            where: {id : id}
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)))
    })
};

controller.getHotBook = () => {
    return new Promise((resolve, reject) => {
        models.Book
        .findAll({
            order: [
                ['rating', 'DESC']
            ],
            limit: 3,
            attribute: ['id', 'title', 'author', 'language']
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};

controller.getNewBook = () => {
    return new Promise((resolve, reject) => {
        models.Book
        .findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 3,
            attribute: ['id', 'title', 'author', 'language']
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};

// controller.getAll = (query) => {
//     return new Promise((resolve, reject) => {
//         console.log("Get All query.")
//         let options = {
//             attribute : ['id', 'title', 'availability', 'author', 'rating', 'content', 'quantity', 'language'],
        
//         }
//     })
// };

module.exports = controller;