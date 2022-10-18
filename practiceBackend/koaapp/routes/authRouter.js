import Router  from 'koa-router';
import jwt from 'jsonwebtoken'

// Prefix all routes auth
const router = new Router();


// Routes

router
.post('/signUp',(ctx,next)=>{
	const {userName,password}=ctx.body;
	const isAdmin=false;
	if(password="admin1234") isAdmin=true
	
	//insert To DB

	//suuces/error


})
.post('/login', (ctx, next) => {
	console.log(`the seceret is ${process.env.ACCESS_TOKEN_SECRET}` );
	if (
		!ctx.request.body.username 
	) {
		ctx.response.status = 400;
		ctx.body = 'Please enter the data';
	} else {
		
		const  user ={name: ctx.request.body.username }
		const accessToken=jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
		ctx.response.status = 201;
		ctx.body = accessToken
	}
	next();
})


export default router