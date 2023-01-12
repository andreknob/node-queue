import 'dotenv/config';
import express from 'express';
import { createBullBoard } from 'bull-board';
import { ExpressAdapter, createBullBoard, BullAdapter } from '@bull-board/express';
import UserController from './app/controllers/UserController';
import Queue from './app/lib/Queue';

const app = express();

const serverAdapter = new ExpressAdapter();
serverAdapter.setBasePath('/admin/queues');

createBullBoard({
    queues: Queue.queues.map((queue)=> new BullAdapter(queue.bull)),
    serverAdapter: serverAdapter,
});

app.use(express.json());

app.use('/admin/queues', serverAdapter.getRouter());

app.post('/users', UserController.store);

app.listen(3333, () => console.log('Server running on port 3333'));