const bcrypt = require('bcryptjs');
const mongoose = require('../config/mongo');

const userSchema = mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    cpf:{
        type: String,
        unique: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
        select: false, 
    },
    token:{
        type: String,
        select: false,
    },
    tokenExpires:{
        type: String,
        select: false,
    },
    
},{
    timestamps:true,
});

userSchema.pre('save', async function (next){
    const hashPass = await bcrypt.hash(this.password, 10);
    this.password = hashPass;
    next();
});

const userModel = mongoose.model('Usuario', userSchema);

module.exports = userModel;