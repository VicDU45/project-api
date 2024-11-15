const User = require('../models/user');

class userRepository {
    async createUser(user){
        return await User.create(user);
    }

    async findByUserName(username){
        return await User.findOne({ where: {username}})
    }

}

module.exports = new userRepository();