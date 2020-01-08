let controller = {};
let models = require('../models');

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let = options = {
            include: [{ model:models.Type }],
            order: [
                ['createdAt', 'DESC']
            ],
            attribute : ['id', 'title', 'availability', 'author', 'version', 'rating', 'content', 'quantity', 'language'],
            where: {}
        };
    
        if (query.limit > 0) {
            options.limit = query.limit,
            options.offset = query.limit * (query.page - 1)
        }
    
        var Sequelize = require('sequelize');
            if (query.search != '') {
                options.where = {
                    [Sequelize.Op.or]:[
                        {
                            title : {
                                [Sequelize.Op.iLike] : `%${query.search}%`
                            }
                        }
                    ]
                } 
            }
    
            models.Book
                .findAndCountAll(options) // return rows, count
                .then(data => resolve(data))
                .catch(error => reject(new Error(error)));
    });
};

module.exports = controller;

