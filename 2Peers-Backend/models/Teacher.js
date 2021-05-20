const db = require('../database/db');

class Teacher {
  static signUp(body) {
    const queryTeacher = 'INSERT INTO teachers (name, email, profilepic, encryptedpassword, archived) VALUES ($1, $2, $3, $4, $5)';
    const teacherPic = 'https://i.pinimg.com/originals/56/b4/9f/56b49f8fe357deecf54ad7805209d79e.png';
    const archived = false;

    return db.query(
      queryTeacher, [body.name, body.email, teacherPic, body.encrypt, archived],
    );
  }

  static getTeacher(body){
    const queryText = 'SELECT * FROM teachers WHERE email = $1'
    return db.query(queryText, [body.email]).then(results => results.rows[0]);
  }

  static createClass(code, id) {
    const queryText = 'INSERT INTO classes (classcode, teacher_id) VALUES ($1, $2)';
    return db.query(queryText, [code, id]);
  }

  static getById(id) {
    const queryText = 'SELECT * FROM teachers WHERE id = $1';
    return db.query(queryText, [id]).then((results) => results.rows[0]);
  }
}

module.exports = { Teacher };
