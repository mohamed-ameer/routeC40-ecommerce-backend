import * as orderController from './controller/order.js'
import * as validators from './order.validation.js'
import { validation } from '../../middleware/validation.js';
import { endpoint } from './order.endPoint.js'
import { auth } from '../../middleware/auth.js'
import { Router } from "express";
const router = Router()


export default router