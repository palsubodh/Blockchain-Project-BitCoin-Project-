const mongoose=require('mongoose')

const bitSchema = new mongoose.Schema({
   
    symbol: {type: String,unique:true},
    name: {type: String,unique:true},
    marketCapUsd: {type: String},
    priceUsd: {type: String }

},{timestamps:true})

module.exports = mongoose.model('Bitdata', bitSchema);