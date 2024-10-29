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
const autenticacaoRoutes = require("./services/login")
const proxyApi = require("./services/proxy_api")

// Chamada inicial do express

const app = express()

// Configuração do Handlebars

app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');
app.set('views', './views');

// Configurações de Middlewares gerais

app.use(express.json());
app.use(cors());

app.use(session({
    secret: process.env.SESSION_SECRET, // chave secreta para criptografia da sessão
    resave: true,
    saveUninitialized: false,
    cookie: { secure: false } // Em produção, isso deve ser 'true' se usar HTTPS
}));

// Middleware para servir arquivos estáticos (CSS, JS)

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: false }));

// Configuração das rotas

app.use("/", mainRoutes)
app.use("/admin", adminRoutes)
app.use("/login", autenticacaoRoutes)
app.use("/api", proxyApi)

// Instanciamento do servidor

const PORT = process.env.PORT || 5000

app.listen(PORT, () => {
    console.log("Servidor rodando na porta", PORT)
})
