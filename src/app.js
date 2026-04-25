import express from 'express';
import routesColaboradores from './routes/routesColaboradores.js'
import routesFrota from './routes/routesFrota.js'
import routesClientes from './routes/routesClientes.js'
import routesUsuario from './routes/routesUsuarios.js'

const app = express();

app.use(express.json());

app.use('/api/colaboradores', routesColaboradores);
app.use('/api/frota', routesFrota);
app.use('/api/clientes', routesClientes);
app.use('/api/usuarios', routesUsuario);

export default app;