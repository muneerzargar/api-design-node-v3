import { Router } from 'express'

const mockController = (req, res) => {
  console.log(req.body)
  res.send({ message: 'i am working' })
}
const router = Router()

router
  .route('/')
  .get(mockController)
  .post(mockController)

router
  .route('/:id')
  .put(mockController)
  .delete(mockController)
  .get(mockController)

export default router
