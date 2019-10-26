import dotenv from 'dotenv';
dotenv.config();

import { App } from './app'

async function main() {
    const app = new App(process.env.PORT );
    await app.listen();
}

main();
