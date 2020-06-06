const sqlite = require('sqlite3').verbose();

const db = new sqlite.Database('./src/database/database.db');

module.exports = db;

//  db.serialize(() => {
//   db.run(`
//     CREATE TABLE IF NOT EXISTS places (
//       id_place INTEGER PRIMARY KEY AUTOINCREMENT,
//       image TEXT,
//       name TEXT,
//       address TEXT,
//       complement TEXT,
//       state TEXT,
//       city TEXT,
//       items TEXT
//     );
//   `);

//   const query = `
//     INSERT INTO places (
//       image,
//       name,
//       address,
//       complement,
//       state,
//       city,
//       items
//     ) VALUES (?, ?, ?, ?, ?, ?, ?);
//   `;
//   const values = [
//     'https://images.unsplash.com/photo-1528323273322-d81458248d40?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
//     'Paperssider',
//     'Guilherme Gemballa, Jardim América',
//     'Nº 260',
//     'Santa Catarina',
//     'Rio do Sul',
//     'Papéis e Papelão'
//   ];

//   function afterInsert(error) {
//     if (error) {
//       return console.log(error);
//     }

//     console.log('Cadastrado com sucesso');
//     console.log(this);
//   };

// db.run(query, values, afterInsert);

// function ListAll(error, rows) {
//   if (error) {
//     return console.log(error)
//   }

//   console.log('Consulta realizada:');
//   console.log(rows);
// };

// db.all(`SELECT * FROM places`, ListAll);

// function afterDelete(error) {
//   if (error) {
//     return console.log(error);
//   }
//   console.log('Registro removido com sucesso');
// };


// db.run(`DELETE FROM places WHERE id_place = ?`, [7], afterDelete);

//  });
