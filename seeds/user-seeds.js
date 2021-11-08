const { User } = require('../models');

const userData = [{
        username: 'James',
        password: 'james557'

    },
    {
        username: 'Louis',
        password: 'louis09uj'
    },
    {
        username: 'John',
        password: 'JJftw490'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;