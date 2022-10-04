import routerx from 'express-promise-router';
import articuloController from '../controllers/articuloController';
import auth from '../middlewares/auth';


const router = routerx();

router.post('/add', auth.verifyBodeguero, articuloController.add);
router.get('/query', auth.verifyBodeguero, articuloController.query);
router.get('/queryCodigo', auth.verifyBodeguero, articuloController.queryCodigo);
router.get('/list', auth.verifyBodeguero, articuloController.list);
router.put('/update', auth.verifyBodeguero, articuloController.update);
router.delete('/remove', auth.verifyBodeguero, articuloController.remove);
router.put('/activate', auth.verifyBodeguero, articuloController.activate);
router.put('/deactivate', auth.verifyBodeguero, articuloController.deactivate);

export default router;