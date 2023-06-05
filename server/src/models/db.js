const mongoose = require('mongoose');

const bdConeccion = async() => {
try{
    await mongoose
    .connect("mongodb+srv://root:root@cluster0.eufy6t5.mongodb.net/?retryWrites=true&w=majority")
    console.log( "Coneccion con MongoDB Atlas: CORRECTA!!")
} catch(error) {
    console.error(error)
};


}

module.exports = {
    bdConeccion
}

