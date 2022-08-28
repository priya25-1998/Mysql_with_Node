select_query = `select name , age ,email from biodata where biodata.nid = ?`;

insert_query = `insert into biodata(nid,name,email,age)values('N101','devi','devi@gmail.com',20),`;


update_query = `update biodata set age=40 where nid =? `;

delete_query = `delete from biodata where nid= ?`;

module.exports = { select_query, insert_query, update_query, delete_query };

