
const index = (req, res) => {
    res.render('dashboard', {title: 'Benvindo ao Clave - Player', a:'Aldair Cajicua'});
}

module.exports = {
    index:index
}