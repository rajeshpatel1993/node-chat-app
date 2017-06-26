const expect = require('expect');
const {generateMessage,generateLocationMessage} = require('./message');


describe("generateMessage",()=>{
    it("Should generate correct message Object",()=>{
        var from = "admin";
        var text = "welcome to the chat app";
        var res = generateMessage(from,text);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from,text});


    });
});



describe("generateLocationMessage",()=>{
    it("Should generate location and return location url",()=>{
        var from = "rajesh";
        var latitude = 28.6618976;
        var longitude = 77.2273958;
        var url =`https://google.com/maps?q=${latitude},${longitude}`;
        var res = generateLocationMessage(from,latitude,longitude);
        expect(res.createdAt).toBeA('number');
        expect(res).toInclude({from,url});


    });
});