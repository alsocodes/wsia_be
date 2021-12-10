const db = require('../models');
const bcrypt = require('bcrypt');

const createRole = async (name) => {
    return await db.role.create({
        name: name
    })
}

const create = async () => {
    const role = await createRole("super admin");
    if (role) {
        return await db.user.create({
            name: 'Also codes',
            email: 'alsocodes@gmail.com',
            username: 'also',
            password: await bcrypt.hash('123456', 10),
            role_id: role.id
        });
    }
}

module.exports = { create }