const connection = require('../src/database/config/connection');
const {dbBuild} = require('../src/database/build');
const {getData} = require('../src/database/queries/getData');
const {postData} = require('../src/database/queries/postData');

test('jest is working' , ()=>{
    expect(1).toBe(1);
});

beforeEach(()=>{
    return dbBuild();
});



test('Insert  program ' , ()=>{
    const time =  3 ;
    const sessions = 2;
    const program =  'career' ;
    return postData({program , sessions , time})
    .then((data) =>{
        console.log(data)
        expect(data.rowCount).toBe(1);
    })
});




test('Get  program ' , ()=>{
    return getData().then((data)=>{
        expect(data.rowCount).toBe(0);
    })
    
});

afterAll(()=>{
    return connection.end();
});