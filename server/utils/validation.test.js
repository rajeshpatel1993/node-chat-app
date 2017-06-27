const expect = require('expect');
const {isRealString} = require('./validation');


describe("isRealString",()=>{

    it("should reject non string value",()=>{
       var str = 98;
        var res = isRealString(str);
        expect(res).toBe(false);

    });

    it("should reject  string with only spaces",()=>{
        var str = '   ';
        var res = isRealString(str);
        expect(res).toBe(false);

    });

    it("Should allow string with non-space characters",()=>{
        var str = "   this is string   ";

        var res = isRealString(str);
        expect(res).toBe(true);



    });
});



