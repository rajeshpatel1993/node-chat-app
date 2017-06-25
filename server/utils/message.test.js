const expect = require('expect');
const {generateMessage} = require('./message');


describe("generateMessage",()=>{
    it("Should generate correct message Object",()=>{
        var from = "admin";
        var text = "welcome to the chat app";
        var res = generateMessage(from,text);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from,text});


    });
});