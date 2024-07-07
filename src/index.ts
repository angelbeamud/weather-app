import express, { Request, Response } from 'express';
import 'dotenv/config';

const PORT = process.env.PORT || 3000;
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

app.listen(PORT, () => console.log(`Listen in port ${PORT}`));
