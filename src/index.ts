import dotenv from 'dotenv';
dotenv.config();

import { App } from './app'
import { connect } from './database'

async function main() {
    const app = new App(4000);
    await app.listen();
}

main();
