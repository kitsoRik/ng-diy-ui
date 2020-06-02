module.exports = (str, firstUpper = true) => {
	const result = str
		.toLowerCase()
		.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

	if (firstUpper) return result[0].toUpperCase() + result.substring(1);
	return result;
};
