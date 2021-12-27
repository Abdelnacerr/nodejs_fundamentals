const authorized = (req, res, next) => {
	const { user } = req.query
	if (user === 'Mohamed') {
		req.user = { name: 'Mohamed', id: 1 }
		next()
	} else {
		res.status(401).send('Unauthorized')
	}
	console.log('authorized')
	next()
}

module.exports = authorized
