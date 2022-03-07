//controllers section

//serve landing page
const getLandingPage = (req, res) => {
    res.status(301).redirect('/blogs');
};

//serve about page
const getAboutPage = (req, res) => {
    res.status(200).render('about', {
        pageTitle: 'About'
    });
};


//exporting section
module.exports = {
    getLandingPage, 
    getAboutPage, 
};