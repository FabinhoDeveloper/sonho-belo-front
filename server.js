// Configuração das variáveis de ambiente

const dotenv = require("dotenv").config()

// Importação das dependencias

const express = require("express")
const exphbs = require("express-handlebars")
const bodyParser = require("body-parser")
const session = require("express-session")
const cors = require("cors")

// Importação das rotas

const mainRoutes = require("./routes/main-routes")
const adminRoutes = require("./routes/admin-routes")

// Chamada inicial do express

const app = express()

// Configuração do Handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

app.use(express.json());
app.use(cors());

// Middleware para servir arquivos estáticos (CSS, JS)

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração das rotas

app.use("/", mainRoutes)
app.use("/admin", adminRoutes)

// Instanciamento do servidor

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT)
})