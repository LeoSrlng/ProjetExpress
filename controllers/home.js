export default (req, res) => {
	res.render("home.ejs", { teste: "Salut via une variable" });
};
