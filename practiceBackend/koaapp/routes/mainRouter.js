import Router  from 'koa-router';
import getAllUsers from '../db/userQuery';
import {authenticateToken} from '../server'
// Prefix all routes auth
const router = new Router();


// Routes

router.get('/',authenticateToken, (ctx, next) => {
    console.log('get req');
    getAllUsers();

    ctx.body=`hello ${ctx.user.name} the date is ${new Date()}` 
	next();
});
router.get('/echo',authenticateToken, (ctx, next) => {
    ctx.body=`The message is ${ctx.query.msg}` 
	next();
});

export default router