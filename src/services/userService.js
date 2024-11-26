const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository')
const SECREt_KEY = 'vicThay1';

class UserService {
    async register(username, password){
        const hashedPassword = await bcrypt.hash(password, 10)
        const user = await userRepository.createUser({username,password:hashedPassword})
        return user;
    }

    async getUsers(){
        return  userRepository.findAll()
    }

    async login (username, password){
        const user = await userRepository.findByUserName(username)

        if(!username){
            throw new Error('usuário não encontrado')
        }

        const isValidePassword = await bcrypt.compare(password, user.password)

        if(!isValidePassword){
            throw new Error('Senha incorrecta')
        }

        const token = jwt.sign({id:user.id},SECREt_KEY, {expiresIn: '1h'})
        return token;
    }
    async atualizar(username, senhaAtual, novaSenha){
        const user = await userRepository.findByUserName(username);
        if(!user){
            throw new Error('usuário não encontrado');
        }
    
        const isPasswordValid = await bcrypt.compare(senhaAtual, user.password);
        if(!isPasswordValid){
            throw new Error('Senha atual incorrecta');
        }
        const hashednewPassword = await bcrypt.hash(novaSenha, 10);
        user.password = hashednewPassword
    
        await userRepository.updateUser(username, { password: hashednewPassword})
    
        return {message: 'senha atualizada com sucesso'};
    }
}
module.exports = new UserService();