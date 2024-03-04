const express = require('express');
const router = express.Router();
const fetch = require('node-fetch');

router.get('/fact', async (req, res) => {
  try {
    const apiUrl = 'https://catfact.ninja/fact';
    const response = await fetch(apiUrl);
    const data = await response.json();
    const catFact = data.fact; // Assuming API returns { fact: "Cat fact here" }
    res.render('cat/fact', { catFact });
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving cat fact');
  }
});

module.exports = router;
