import { config } from 'dotenv'
import OpenAI from 'openai';
import readline from 'node:readline/promises';

config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

userInterface.prompt();
userInterface.on('line', async (input) => {
    try {
        const chatCompletion = await openai.chat.completions.create({
            messages: [{ role: 'user', content: input  }],
            model: 'gpt-3.5-turbo',
        })
        console.info(JSON.stringify(chatCompletion));
        console.info(
            chatCompletion.choices[0].message.role,
            ": ",
            chatCompletion.choices[0].message.content
        )

    } catch (error: any) {
        console.error('userInterface.on error: ', error.message);
    } finally {
        userInterface.prompt();
    }
});
