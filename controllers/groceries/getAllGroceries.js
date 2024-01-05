const fetchAllGroceries = {
    handler: async (req, res) => {
        try {

            const fetchedAllGroceries = await global.models.GROCERY.find();

            if (fetchedAllGroceries) {
                return res?.status(200)?.json({
                    message: 'Successful',
                    payload: fetchedAllGroceries
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

module.exports = fetchAllGroceries;