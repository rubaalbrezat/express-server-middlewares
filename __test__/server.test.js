'use strict';

const supertest = require('supertest');
const {app} = require('../server');


const request = supertest(app);

describe('Testing the server',()=>{

    it('Testing 1st thing', async ()=>{

        let response = await request.get('/');
        expect(response.text).toEqual('inside the main page');
    })

    it('Testing 1st thing', async ()=>{

        let response = await request.get('/square?num=5');
        expect(response.body).toEqual({"num":25});
    })


})