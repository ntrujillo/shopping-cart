'use strict';

const service = require('../../services/blog.service');
const logger = require('log4js').getLogger("BlogController");

module.exports.query = query;
module.exports.get = get;

/**
 * Controlador para manejo de peticion de consulta de usuarios
 * @param {*} req 
 * @param {*} res 
 */
function query(req, res) {


    var q = req.query.q;
    var fields = req.query.fields;
    var sort = req.query.sort;
    var page = req.query.page;
    var perPage = req.query.per_page;

    service.query(q, fields, sort, page, perPage)
        .then(response => {
            if (response.data) {
                res.header('X-Total-Count', response.count);
                res.send(response.data);
            } else {
                res.sendStatus([]);
            }
        })
        .catch(err => onError(err, res));
}


/**
 * Controlador get by id
 * @param {*} req 
 * @param {*} res 
 */
function get(req, res) {  

    service.get(req.params._id)
        .then(function (data) {
            res.status(200).send(data);
        })
        .catch(err => onError(err, res));

}


function onError(error, response) {
    logger.error("Error ", error);
    response.status(error.code ? error.code : 500).send(error.message);
}


