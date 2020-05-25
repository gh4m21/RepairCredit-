const express = require(`express`);
const router = express.Router();

module.exports = router;



/*----------------------------------------------------------
                         Routes|||||||||||||||||||||||||||||
------------------------------------------------------------*/

//@routes post api/Afilliate/
//@desc Create new  afilliate route
//@desc access public temp

const Afiliate = require(`../../models/afilliate`);
const PhoneTag = require(`../../models/phoneTag`);

router.post('/', async (req, res) => {
    try {

        const { email } = req.body;

        let afilliate = await Afiliate.find({ mail: email });

        if (afilliate)
            return res.
                status(409)
                .json({ msg: `this email is already afilliate ${email}` });

        afilliate = new Afiliate(req.body);
        await afilliate.save();

        res.json(afilliate);

    } catch (error) {
        console.log(`${error}`);
        res.status(204).json({ msg: `Server error ${error}` })
    }
});

//@routes get api/Afilliate/:id
//@desc Create new  afilliate route
//@desc access public temp

router.get('/:id', async (req, res) => {
    try {

        let afilliate = await Afiliate.findById(req.params.id);
        if (!afilliate) res.status(404).json({ msg: 'This Afilliate does not exist' });

        res.json(afilliate);

    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({ msg: `Server error ${error}` })
    }
});

//@routes get api/Afilliate/
//@desc Create new  afilliate route
//@desc access public temp

router.get('/', async (req, res) => {
    try {

        const afilliate = await Afiliate.find();

        res.json(afilliate);

    } catch (error) {
        console.log(`${error}`);
        res.status(500).json({ msg: `Server error ${error}` })
    }
});


