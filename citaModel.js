const sql = require('../db.js');

const Citas = function(cita){
    this.doctor = cita.doctor;
    this.fecha = cita.fecha;
    this.hora = cita.hora;
    this.tipo = cita.tipo;
};

Citas.create = (newCitas, result) => {
    sql.query('INSERT INTO cita SET ?', newCitas, (err, res) => {
        if(err){
            console.log('error: ', err);
            result(err, null);
            return;
        }
        console.log('Citas creada: ', {id: res.insertId, newCitas});
        result(null, {id: res.insertId, newCitas});
    });
}

Citas.getAll = result => {
    sql.query("SELECT c.*, CONCAT(d.nombre, ' ', d.apellido) as doctor, d.id as iddoctor, d.especialidad FROM cita c INNER JOIN doctores d ON d.id = c.doctor", (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Citas: ", res);
      result(null, res);
    });
}

/*Citas.countRegistro = (userid, result) => {
    sql.query(`SELECT COUNT(*) AS vueltas FROM cita WHERE user_id = ${userid}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
  
      console.log("Citas: ", res);
      result(null, res);
    });
}*/

Citas.findById = (citaid, result) => {
    sql.query(`SELECT c.*, CONCAT(d.nombre, ' ', d.apellido) as doctor, d.id as iddoctor, d.especialidad FROM cita c
    INNER JOIN doctores d ON d.id = c.doctor
    WHERE c.id =  ${citaid}`, (err, res) => {
        if(err){
            console.log('error: ', err);
            result (err, null);
            return;
        }
        
        if(res.length){
            console.log('Citas: ', res);
            result(null, res);
            return;
        }

        result({kind: 'no Citas'}, null);
    });
}

Citas.updateById = (id, Citas, result) => {
    sql.query("UPDATE cita SET doctor = ?, fecha = ?, hora = ?, tipo = ? WHERE id = ?",
      [Citas.doctor, Citas.fecha, Citas.hora, Citas.tipo, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
  
        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }
  
        console.log("Citas actualizada: ", { id: id, ...Citas });
        result(null, { id: id, ...Citas });
      }
    );
}; 

Citas.deleteOne = (citaid, result) => {
    sql.query(`DELETE FROM cita WHERE id = ${citaid}`, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
        }
      
        console.log("Citas borrada con id: ", iduser_id);
        result(null, res);
    });
}

Citas.deleteAll = result => {
    sql.query("DELETE FROM cita", (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
        }
      
        console.log(`eliminadas ${res.affectedRows} Citass`);
        result(null, res);
    });
}

module.exports = Citas;