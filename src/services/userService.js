const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');
const { Error } = require('sequelize');

const SECREt_KEY = 'vicThay1';

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await userRepository.createUser({username, password: hashedPassword});
        return user;
    }
    async login(username, password){
        const user = await userRepository.findByUserName(username);
        if(!user){
            throw new Error('usuário não encontrado');
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if(!isPasswordValid){
            throw new Error('Senha incorrecta');
        }

        const token = jwt.sign({id: user.id}, SECREt_KEY, {expiresIn: '24h'});
        return token;
    }

    async getUsers(){
        return userRepository.findAll();
    }
}
module.exports = new UserService();