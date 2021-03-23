const bcrypt=require('bcryptjs');
const crypto=require('crypto');
const userModel=require('../Models/usuarioModel');

class LoginController{
    
    async validaRequisicao(email){
        const user = userModel.findOne({email}).select('password');
        if(!user){
            console.log(user)
            return res.status(401).json({erro:'Email ou senha incorretos!'})
        }
    }

    async make(req,res){
        const {email, password}= req.body;
        
        //this.validaRequisicao(email);
        const esteUsuario = userModel.findOne({email}).select('password');
        console.log(esteUsuario.password);
        if(!esteUsuario.email){
           
            return res.status(401).json({erro:'Email ou senha incorretos!'})
        }
        
        const correctLogin=await bcrypt.compare(password,esteUsuario.password);
        if(!correctLogin){
            return res.status(401).json({erro:'Email ou senha incorretos!'})
        }
        return res.json({msg:'Login efetuado com sucesso!'});
    }



}
module.exports= new LoginController();