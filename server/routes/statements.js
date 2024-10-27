import express from 'express'
import StatementsController from '../controllers/statementsController.js'

const statementsRouter = express.Router()

statementsRouter.get('/:user_id', StatementsController.getStatementsFromUser)
statementsRouter.post('/', StatementsController.addStatement)
statementsRouter.delete('/:id', StatementsController.deleteStatement)
statementsRouter.patch('/:id', StatementsController.updateStatement)

export default statementsRouter