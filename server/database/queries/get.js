const connection=require('../config/connection')

const getData=()=>{
   
    const sql = {
      text: "SELECT title,desc,deadline FROM tasks ",
      values: [title,desc,deadline],
    };
    return connection.query(sql)
}

module.exports=getData