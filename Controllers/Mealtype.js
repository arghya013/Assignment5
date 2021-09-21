const Mealtype = require('../Models/Mealtype.json');

exports.getMealtypes = (req,res) => {
    res.status(200).json({
        widget: Mealtype.data
    })
}