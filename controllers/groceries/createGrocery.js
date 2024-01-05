const joi = require('joi');


const createGrocery = {
    validate: (req, res, next) => {
        const schema = joi.object({
            name: joi.string()
        });

        const { error, value } = schema.validate(req?.body);


        if (!error) {
            next();
        } else {
            return res?.status(500)?.json({
                message: error?.message
            })
        }
    },
    handler: async (req, res) => {
        try {

            // assign all the fields of the schema to variables...
            const name = req?.body?.name;
            // assign all the fields of the schema to variables...

            const newGrocery = {
                name
            }


            const createNewGrocery = await global.models.GROCERY.create(newGrocery);

            if (createNewGrocery?._id) {
                return res?.status(200)?.json({
                    message: 'Successful',
                    payload: createNewGrocery
                })
            } else {
                return res?.status(500)?.json({
                    message: 'Failure',
                })
            }
        } catch (err) {
            return res?.status(500)?.json({
                message: 'Failure',
            })
        }
    }
    
}

module.exports = createGrocery;