module.exports.openChat = function(application, req, res){
    var infoForm = req.body;
    console.log(infoForm);
    
    req.assert('apelido','Apelido ou Nome não pode estar em branco').notEmpty();
    req.assert('apelido','Apelido ou Nome deve ter no minimo 3 caracteres e no maximo 10').len(3,10);

    var erros = req.validationErrors();

    if(erros){
        res.render("index", { validation : erros });
        return;
    }

    res.render("chat");
}