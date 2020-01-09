let controller = {};
let models = require('../models');

controller.getPendingRequestByUserId = (id) => {
    return new Promise((resolve, reject) => {
        models.RequestBook
        .findAll({
            where : { userId : id, status : 'Pending' },
            include : [{ model: models.Book }, { model: models.User }]
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)))
    });
};

controller.getByBookId = (bookId) => {
    return new Promise((resolve, reject) => {
        models.RequestBook
        .findOne({
            where: {bookId : bookId},
            include: [{ model: models.Book }]
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)))
    })
};
    
controller.getAllRequest = (query) => {
    return new Promise((resolve, reject) => {
        let = options = {
            include: [{ model: models.Book }, { model: models.User }],
            order: [
                ['createdAt', 'DESC']
            ],
            where: {}
        };
    
        if (query.limit > 0) {
            options.limit = query.limit,
            options.offset = query.limit * (query.page - 1)
        }
    
        models.RequestBook
            .findAndCountAll(options) // return rows, count
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.createRequest = (request) => {
    return models.RequestBook.create(request);
};

module.exports = controller;