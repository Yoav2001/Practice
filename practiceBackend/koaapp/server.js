// app.js
import Koa from 'koa'
import  koaBody from 'koa-body';
import jwt from 'jsonwebtoken'
import dot from 'dotenv'
dot.config();
// imports the routers
import loginRouter from './routes/authRouter'
import mainRouter from './routes/mainRouter'
import arrayRouter from './routes/arrayRouter'
import Router from 'koa-router';
const app = new Koa();
// middleware
app.use(koaBody());

// use the routes
app.use(loginRouter.routes());
app.use(mainRouter.routes())
app.use(arrayRouter.routes())


export function authenticateToken(ctx,next){
    const authHeader=ctx.headers['authorization']
    const token= authHeader && authHeader.split(' ')[1];
    if(token===null) return ctx.response.status = 401;
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        console.log(err)
        if (err) return ctx.response.status=403
        console.log('here');
        ctx.user = user
        next()
    })

}
app.listen(3000);