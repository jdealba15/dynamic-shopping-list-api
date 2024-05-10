import dotenv from 'dotenv';
import cors from 'cors';
import express from 'express';
import { OpenAI } from 'openai';

dotenv.config();

const app = express();
const port = 3000;

const openai = new OpenAI(process.env.OPENAI_API_KEY);

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended:false }));

app.post('/', (req, res) => {
    const dotenvata = req.body;

    console.log('Received Data:', data);
    res.status(200).json({ message: 'Data received successfully' });

    async function main() {
    const completion = await openai.chat.completions.create({
            messages: [{ role: "system", content: "You are a helpful assistant."
            }],
            model: "gpt-3.5-turbo",
            });
            console.log(completion.choices[0]);
            }
            main();
});


app.listen(port, () => console.log(`Server listening on port ${port}`));


    