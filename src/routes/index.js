
import { Router } from "express"

const router = Router()

router.get('/',(req, res) => res.render('index', {title: 'Kyhoz', x: 20}))
router.get('/about',(req, res) => res.render('about', {title: 'Kyhoz'}))
router.get('/contact',(req, res) => res.render('contact', {title: 'Kyhoz'}))

export default router