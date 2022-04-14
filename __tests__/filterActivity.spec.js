let {users} = require("../src/filterActity")

describe("Getting Teds login amount", () => {
    test("Number of logins is 53", () => {
        let input = {id: 4982, firstName: 'Ted', lastName: 'Witherspoon', logins: 53, isPremiumMember: true}
        expect(input.logins).toEqual(53)
    })
});

describe("Getting length of users  ", () => {
    test("length of users is 8", () => {
       let input2 = {id: 1232, firstName: 'Cam', lastName: 'Danvers', logins: 35, isPremiumMember: false}
        expect(input2.lastName).toHaveLength(7)
    })
});

describe("Getting a truthy value ", () => {
    test("is the user a premium user", () => {
       let input3 = {id: 3283, firstName: 'Elijah', lastName: 'Hawkings', logins: 3, isPremiumMember: true}
        expect(input3.isPremiumMember).toBeTruthy(true)
    })
});

describe("Getting Have been called  ", () => {
    test("Getting first name", () => {
       let input4 =  {id: 3879, firstName: 'Ira', lastName: 'Bolislovitz', logins: 9, isPremiumMember: false}
        expect(input4.firstName).toHaveBeenCalled("Ira")
    })
});

describe(" Getting returned value ", () => {
    test("Getting id ", () => {
       let input5 = {id: 9283, firstName: 'Ragupathy', lastName: 'Bodem', logins: 12, isPremiumMember: false} 
        expect(input5.id).toHaveReturned(9283)
    })
});


