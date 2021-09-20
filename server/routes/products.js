const express = require('express');
const router = express.Router();

router.get('/', (req ,res) => {
    return res.json(products);
})

router.post('/', (req, res) => {
    return res.json({message: 'Product created successfully'})
})

router.put('/:id', (req, res) => {
    return res.json({message: 'Product updated successfully'})
})

router.delete('/:id', (req, res) => {
    return res.json({message: 'Product deleted successfully'})
})

module.exports = router;