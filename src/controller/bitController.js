const axios = require('axios')
const getBitModel=require('../model/bitModel')

let getData = async function(req,res)
{
   try{
      
        let options ={
            headers: { Authorization: "Bearer XXXXXXXXXX"},
            method :"get",
            url :`http://api.coincap.io/v2/assets?key=${req.headers.Authorization}`
        }
        let result = await axios(options)
        let data1=result.data.data
        data1=data1.sort((a,b)=>{return a.changePercent24Hr-b.changePercent24Hr})

        let arr=[]
        await getBitModel.deleteMany({})
        for(let a=0;a<data1.length;a++){
            let x=data1[a].name
            let y=data1[a].symbol
            var unisy= await getBitModel.findOne({name:x,symbol:y})
            if(!unisy)
            {
            let obj={}
           obj.symbol=data1[a].symbol
           obj.name=data1[a].name
           obj.marketCapUsd=data1[a].marketCapUsd
           obj.priceUsd=data1[a].priceUsd
           arr.push(obj)
          
            } 
           
        }
        var dat= await getBitModel.insertMany(arr)
        res.status(200).send({status:true,data:data1})

   }
   catch (err) {
    res.status(500).send({ msg: err.message })
}
}

module.exports.getData=getData

