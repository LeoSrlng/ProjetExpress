import fs from 'fs'

export default (req, res) => {
	let NumSalon = req.params.id
	res.render('salon.ejs', {NumSalon})
};