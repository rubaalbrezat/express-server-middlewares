'use strict';

const {logger} = require('../middlewares/logger');

describe('Testing logger middleware', () => {

    let theSpy  ;
    let req = {};
    let res = {};
    let next = jest.fn();

    // beforeEach is method from jest library

    beforeEach(() => {
         theSpy = jest.spyOn(console,'log').mockImplementation();

         //.mockImplementation() block console logs from rendering on screen 
     });

     afterEach(()=>{
        theSpy.mockRestore();
     })

    it('Test console.log', () => {

        logger(req, res, next);
        expect(theSpy).toHaveBeenCalled();

    });

    it('Test next',()=>{
        logger(req, res, next);
        expect(next).toHaveBeenCalled();
    })

})