import routerx from 'express-promise-router';
import categoriaController from '../controllers/categoriaController';
import auth from '../middlewares/auth';


const router = routerx();

// router.post('/add', auth.verifyBodeguero, categoriaController.add);
router.post('/add', categoriaController.add);
router.get('/query', auth.verifyBodeguero, categoriaController.query);
// router.get('/list', auth.verifyBodeguero, categoriaController.list);
router.get('/list', categoriaController.list);
// router.put('/update', auth.verifyBodeguero, categoriaController.update);
router.put('/update', categoriaController.update);
router.delete('/remove', auth.verifyBodeguero, categoriaController.remove);
// router.put('/activate', auth.verifyBodeguero, categoriaController.activate);
// router.put('/deactivate', auth.verifyBodeguero, categoriaController.deactivate);
router.put('/activate', categoriaController.activate);
router.put('/deactivate', categoriaController.deactivate);

export default router;