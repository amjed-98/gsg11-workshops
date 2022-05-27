const connection = require('../config/connection');

const postData = ({program , sessions , time})=>{
    return connection.query({
        text: 'INSERT INTO program (time , num_session ,name_program ) VALUES ($1,$2,$3) ;',
        values : [time , sessions ,program ]
    })

}
const postDataToMembers = ({name , phone , date , programId})=>{
    return connection.query({
        text: 'INSERT INTO members (name , phone ,date , program_id ) VALUES ($1,$2,$3,$4) ;',
        values : [name , phone , date , programId ]
    })

}
module.exports = {postData , postDataToMembers};

