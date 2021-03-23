const userModel=require('../Models/userModel');

class UserController{
    async store(req, res){
        const userToSave = req.body;
        const user = await userModel.create(userToSave);
        return res.status(201).json({ user });
    }

    async delete(req, res){
        const { id } = req.params;

        const user = await userModel.findById(id);

        if(!user){
            return res.status(400).json({error: 'Usuário não existe na base de dados'});
        }

        await userModel.findByIdAndDelete(id);
        return res.json({msg: 'Usuário foi deletado com sucesso!'});
    }

    async update(req, res){
        const { id } = req.params;

        const user = await userModel.findById(id);

        if(!user){
            return res.status(400).json({error: 'Usuário não existe na base de dados'});
        }

        delete req.body.password;

        const newUser = await userModel.findByIdAndUpdate(id, req.body, { new: true });

        return res.json({ newUser });
    }

    async show(req, res){
        const { id } = req.params;
        const user = await userModel.findById(id);
        return res.json({ user });
    }

    async index(req, res){
        const users = await userModel.find();
        return res.json({  users });
    }
}

module.exports = new UserController();