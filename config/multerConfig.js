const multer = require("multer")
const path = require("path")

const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        // Atualizamos o destino para 'public/uploads' para tornar os arquivos acessíveis como estáticos
        callback(null, path.resolve("public/uploads"));
    },
    filename: (req, file, callback) => {
        const time = new Date().getTime();
        callback(null, `${time}_${file.originalname}`);
    },
});

module.exports = storage;
