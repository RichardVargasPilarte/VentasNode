import routerx from 'express-promise-router';
import ingresoController from '../controllers/ingresoController';
import auth from '../middlewares/auth';

const router = routerx();

router.post('/add', auth.verifyBodeguero, ingresoController.add);
router.get('/query', auth.verifyBodeguero, ingresoController.query);
router.get('/list', auth.verifyBodeguero, ingresoController.list);
router.get('/graficoanual', auth.verifyUsuario, ingresoController.graficoanual);
router.get('/consultaFechas', auth.verifyUsuario, ingresoController.consultaFechas);
router.put('/activate', auth.verifyBodeguero, ingresoController.activate);
router.put('/deactivate', auth.verifyBodeguero, ingresoController.deactivate);

export default router;