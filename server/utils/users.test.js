const expect = require('expect');
const {Users} = require('./users');



describe('Users',()=>{

    var users;
    beforeEach(()=>{
        users = new Users();
        users.users = [{
           id:'1',
            name:'Mike',
            room:'nodecourse'
        },
            {
                id:'2',
                name:'jane',
                room:'reactcourse'
            },
            {
                id:'3',
                name:'julie',
                room:'nodecourse'
            }
            ];
    });

    it("Should add new user",()=>{
       var users = new Users();
        var user = {
            id:'123',
            name:'Rajesh',
            room:'Officefan'
        };

        var resUser = users.addUser(user.id,user.name,user.room);
        expect(users.users).toEqual([user]);

    });


    it("should remove a user",()=>{
        var userId = '1';
        var user = users.removeUser(userId);
        expect(user.id ).toBe(userId);
        expect(users.users.length).toBe(2);


    });

    it("should not remove a user",()=>{


        var userId = '6';
        var user = users.removeUser(userId);
        expect(user ).toNotExist();
        expect(users.users.length).toBe(3);

    });

    it("should find a user",()=>{
        var userId = '2';
        var user = users.getUser(userId);
        expect(user.id ).toBe(userId);

    });
    it("should not find a user",()=>{

        var userId = '5';
        var user = users.getUser(userId);
        expect(user).toNotExist();

    });

    it("should return name for node course",()=>{

        var userList = users.getUserList('nodecourse');
       expect(userList).toEqual(['Mike','julie']);




    });


    it("should return name for react course",()=>{

        var userList = users.getUserList('reactcourse');
        expect(userList).toEqual(['jane']);




    });


});