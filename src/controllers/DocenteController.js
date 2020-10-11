const DocenteController = {};

DocenteController.listaDocente = (req, res) => {
    req.getConnection((err, conn) => {
        conn.query("select doc.*, dis.descripcion from tb_docente doc inner join tb_distrito dis on doc.id_distrito = dis.id_distrito", (err, listarDocentes) => {
            if(err){
                res.json(err);
            }
            res.render('listarDocentes',{
                data: listarDocentes
            });
        });
    });
};

module.exports = DocenteController;