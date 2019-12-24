let controller = {};
let models = require('../models');

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let = options = {
            order: [
                ['createdAt', 'DESC']
            ],
            attribute : ['id', 'title', 'content', 'imgPath'],
            where: {}
        };

        if (query.limit > 0) {
            options.limit = query.limit,
            options.offset = query.limit * (query.page - 1)
        }

        models.News
            .findAndCountAll(options)
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getNewNews = () => {
    return new Promise((resolve, reject) => {
        models.News
        .findAll({
            order: [
                ['createdAt', 'DESC']
            ],
            limit: 3,
            attribute : ['id', 'title', 'content', 'imgPath'],
        })
        .then(data => resolve(data))
        .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;