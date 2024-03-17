import { fileURLToPath } from 'url'
import { Server } from 'socket.io'
import path from 'path'
import dotenv from 'dotenv'
import chalk from 'chalk'
const __dirname = path.dirname(fileURLToPath(import.meta.url))
dotenv.config({ path: path.join(__dirname, './config/.env') })

import express from 'express'
import initApp from './src/index.router.js'
const app = express()
const port = process.env.PORT || 5000

initApp(app, express)
const httpServer = app.listen(port, () => console.log(chalk.blue(`Example app listening on port`) + " " + chalk.green(`${port}!`)))
