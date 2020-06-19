const express = require('express');
const router = express.Router();

const Debate = require('../models/Debate')

// @route     GET testing
router.get('/test', async (req, res) => {
    try {
        res.json({test: 'test'})
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')
    }
})

// @route     GET api/debates
// @desc      Get all debates data
router.get('/', async (req, res) => {
    try {
        const debates = await Debate.find()
        res.json(debates)
    } catch (error) {
        console.log(error.message)
        res.status(500).send('Server Error')

    }
})

// @route     GET api/debates/id
// @desc      Get a debate data
router.get('/:id', async (req, res) => {
    console.log(req.params.id)
    try {
        const debate = await Debate.find({ debate: req.params.id })
        if (!debate) {
            res.send(404).send('This debate does not exist')
        }
        res.json(debate)
    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
})

// @route     POST api/debates/id
// @desc      POST a debate data

router.post('/', async (req, res) => {
    let errors;
    const { name, subject, startDate, endDate } = req.body;
    
    if (!name || !startDate || !endDate) {
        errors = 'Errors'
    }

    if (endDate < startDate) {
        errors = 'Errors'
    }

    if (errors) {
        return res.status(400).json((errors))
    }

    try {
        const newDebate = new Debate({
            name,
            subject,
            startDate,
            endDate
        })

        const debate = await newDebate.save()
        res.json(debate)

    } catch (error) {
        console.log(error)
        res.status(500).send('Server Error')
    }
})

module.exports = router;