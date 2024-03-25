import { createPool } from "mysql2/promise";

const pool = createPool({
    host:'localhost',
    port:'3306',
    user:'root',
    password:'david2023',
    database:'dawasemana01'
});

export default pool;