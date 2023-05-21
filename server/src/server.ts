import cors from '@fastify/cors';
import jwt from '@fastify/jwt';
import multipart from '@fastify/multipart';
import fastifyStatic from '@fastify/static';
import 'dotenv/config';
import fastify from 'fastify';
import { resolve } from 'path';
import { authRoutes } from './routes/auth';
import { memoriesRoutes } from './routes/memories';
import { uploadRoutes } from './routes/upload';

const app = fastify();

app.register(multipart);
app.register(fastifyStatic, {
    root: resolve(__dirname, '../uploads'),
    prefix: '/uploads',
});
app.register(cors, {
    origin: true,
});
app.register(jwt, {
    secret: 'spacetime',
});

app.register(authRoutes);
app.register(memoriesRoutes);
app.register(uploadRoutes);

app.listen({
    port: 3333,
}).then(() => {
    console.log('HTTP server running on http://localhost:3333');
});
