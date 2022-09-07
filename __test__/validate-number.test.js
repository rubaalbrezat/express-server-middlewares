'use strict';

const {squareTheNum} = require('../middlewares/validate-number');

describe('Testing squareTheNum Middleware',()=>{

    let spy ;
    let res = {};
    let req = {query:{num:'5'}};
    let next = jest.fn();
    
    beforeEach(()=>{
        spy = jest.spyOn(console,'log').mockImplementation();
    });

    afterEach(()=>{
        spy.mockRestore();
    })

    it('Test squareTheNum console.log',()=>{

        squareTheNum(req,res,next);
        expect(spy).toHaveBeenCalled();
    });

    it('Test squareTheNum next',()=>{

        squareTheNum(req,res,next);
        expect(next).toHaveBeenCalled();
    });


})