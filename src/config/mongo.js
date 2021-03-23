/**usuario mongo atlas: mhnegrao */
/** senha mongo atlas:
mongocontroleservicoX3p06x3a*/
/**conectionstring: mongodb+srv://mhnegrao:<password>@cluster0.3fnlm.mongodb.net/test */

const mongoose = require("mongoose");
mongoose.models = {};
mongoose.modelSchemas = {};
const userDb = "mhnegrao";
const password = "mongocontroleservicoX3p06x3a";
const uriDb = `mongodb+srv://${userDb}:${password}@cluster0.3fnlm.mongodb.net/api_controle_servico`;
const localDb = "mongodb://localhost/api_controle_servico";
const connectionString = `${localDb}`;

mongoose.connect(connectionString, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false,
});

module.exports = mongoose;
