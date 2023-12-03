import { config } from 'dotenv'
import OpenAI from 'openai';
import readline from 'node:readline/promises';
import color from '../utils/color';


config();

const openai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

const userInterface = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function runningService() {
    userInterface.prompt();
    userInterface.on('line', async (input) => {
        try {
            if (input === 'exit') return process.exit(0);
    
            const chatCompletion = await openai.chat.completions.create({
                messages: [{ role: 'user', content: input  }],
                model: 'gpt-3.5-turbo',
            })
            console.info(color.magenta, JSON.stringify(chatCompletion));
            console.info(
                color.yellow,
                chatCompletion?.choices[0]?.message?.role.toUpperCase(),
                ":",
                color.white,
                chatCompletion.choices[0].message.content
            )
    
        } catch (error: any) {
            console.error('userInterface.on error: ', error.message);
        } finally {
            userInterface.prompt();
        }
    });
}

export default runningService;