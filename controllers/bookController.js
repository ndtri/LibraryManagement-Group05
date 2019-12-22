let controller = {};
let models = require('../models');

controller.getAll = (query) => {
    return new Promise((resolve, reject) => {
        let = options = {
            include: [{ model:models.Type }],
            attribute : ['id', 'title', 'availability', 'author', 'rating', 'content', 'quantity', 'language'],
            where: {}
        };

        if (query.limit > 0) {
            options.limit = query.limit,
            options.offset = query.limit * (query.page - 1)
        }

        if (query.language) {
            options.where.language = query.language;
        }

        if (query.availability) {
            options.where.availability = query.availability;
        }

        if (query.type) {
            options.where.typeId = query.type;
        }

        var Sequelize = require('sequelize');
        if (query.search != '') {
            options.where = {
                [Sequelize.Op.or]:[
                    {
                        title : {
                            [Sequelize.Op.iLike] : `%${query.search}%`
                        }
                    },
                    {
                        author: {
                            [Sequelize.Op.iLike] : `%${query.search}%`
                        }
                    }
                ]
            }
            
        }
    
        if (query.sort) {
            switch (query.sort){
                case 'title': 
                    options.order = [
                        ['title','ASC']
                    ];
                    break;
                case 'rating': 
                    options.order = [
                        ['rating','DESC']
                    ];
                    break;
                case 'author': 
                    options.order = [
                        ['author','ASC']
                    ];
                    break;
                case 'quantity':
                    options.order = [
                        ['quantity','DESC']
                    ];
                    break;
                default:
                    options.order = [
                        ['title','ASC']
                    ]
            }
        }

        models.Book
            .findAndCountAll(options) // return rows, count
            .then(data => resolve(data))
            .catch(error => reject(new Error(error)));
    });
};

controller.getById = (id) => {
    return new Promise((resolve, reject) => {
        models.Book
        .findOne({
            where: {id : id},
            include: [{ model: models.Type }]
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

module.exports = controller;