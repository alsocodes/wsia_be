const db = require("../../../../models");
const helper = require("../../../../utils/helper");
const response = require("../../../../utils/response");
const sequelize = require('../../../../models').sequelize;
const { Op, Sequelize } = require("sequelize");

exports.get = async (req, res) => {
    try {

        const page = parseInt(!req.query.page ? 1 : req.query.page)
        const page_size = parseInt(!req.query.page_size ? 20 : req.query.page_size)
        const search = !req.query.search ? '' : req.query.search
        const offset = (page - 1) * page_size;
        const limit = page_size;
        const orderby = !req.query.orderby ? 'id' : req.query.orderby
        const order = !req.query.order ? 'desc' : req.query.order

        let ordering = [orderby, order];

        if (orderby.includes('.')) {
            let od = orderby.split('.')
            let od0 = od[0];
            ordering = [db[od0], od[1], order]
        }

        const teachers = await db.teacher.findAndCountAll({
            attributes: [
                'id', 'user_id', 'nip',
                'name', 'gender', 'place_birth', 'day_birth', 'religion', 'address',
                'employee_group', 'position', 'last_education',
                'email', 'phone', 'entry_year', 'created_at'
            ],

            where: {
                [Op.or]: [
                    { name: { [Op.like]: '%' + search + '%' } },
                    { email: { [Op.like]: '%' + search + '%' } },
                    { nip: { [Op.like]: '%' + search + '%' } }
                ]
            },
            distinct: true,
            offset: offset,
            limit: limit,
            order: [ordering]
        })

        const result = {
            total_count: teachers.count,
            total_page: Math.ceil(teachers.count / page_size),
            rows: teachers.rows
        }

        return response.success("Get guru sukses", res, result, 200);
    } catch (err) {
        console.log(err);
        return response.error(err.message || "Gagal get guru", res);
    }
};
