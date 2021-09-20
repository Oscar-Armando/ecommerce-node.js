const express = require('express');
const router = express.Router();

router.get('/', (req ,res) => {
    return res.json(products);
})

router.post('/', (req, res) => {
    return res.json({message: 'Order created successfully'})
})

router.put('/:id', (req, res) => {
    return res.json({message: 'Order updated successfully'})
})

router.delete('/:id', (req, res) => {
    return res.json({message: 'Order deleted successfully'})
})

module.exports = router;