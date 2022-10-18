import Router  from 'koa-router';
import {authenticateToken} from '../server'
// Prefix all routes auth
const router = new Router({
	prefix: '/array'
});

const array=[1,3,5,7]
// Routes

function isAdmin(ctx,next){
	if(ctx.user.name !='yoav'){
		return ctx.response.status=403;
	} 
	next()
}

router
	.get('/',authenticateToken, (ctx, next) => {
		ctx.body={echo:array};
		next();
	})
	.post('/',authenticateToken,isAdmin, (ctx, next) => {
		console.log('post array');
		const value =ctx.request.body.value;
		console.log('the value is '+ value)
		if(!value) return ctx.response.status=400;
		array.push(value)
		next()

	})

	.get('/:index',authenticateToken, (ctx, next) => {
		const index =ctx.params.index
		if(index<0 || index > array.length-1) return ctx.response.status=400;
		ctx.body={value: array[index]};
		ctx.response.status=200;
		next();
	})
	.put('/putAdmin',authenticateToken,isAdmin,(ctx,next)=>{
		const {userName} =ctx.body;
		//check if user is alredy admin -> return 201/204

		//change to admin 
	});
	// .delete('/',authenticateToken,isAdmin, (ctx, next) => {
	// 	array.remove(array[array.length-1])

	// })
;
export  default router;