const connection = require('../../Connection')
const axios  = require('axios');

const AvblController = async (req, res)=>{
let symbol = req.body.symbol
let backedCoin = symbol.substr(symbol.length - 4);
let Coin = symbol.substring(0, symbol.length - 4);

  


connection.query(`SELECT * FROM wallet WHERE UserId = "${req.token.userid}" AND currency = "${backedCoin.toLowerCase()}"`, (err,result)=>{


    if(err) throw err; 
    if(result.length){

            res.json({msg:result[0].quantity})
            console.log(result[0].quantity)
    
    }else{
        res.json({msg:0.00})
    }


})


  
    
        
}

module.exports = AvblController;