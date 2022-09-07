'use strict';


//========================================================= (Handler Functions) =========================================================//

function handleMain(req,res) {

    console.log(`inside the main page`);
    res.send(`inside the main page`);
}

function handleSquare(req,res) {
    res.json({
        "num":req.squared
    });
}

function handleNoEndPoint(req, res) {
    res.status(404).send(`Enter valid end Point`)
}

//=========================================================== (Module Export) ===========================================================//

module.exports ={handleMain,handleSquare,handleNoEndPoint};