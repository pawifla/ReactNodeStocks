// server/index.js

const express = require('express');
const axios = require('axios');
// import express from 'express';
// import fetch from 'node-fetch';

const PORT = process.env.PORT || 3001;

const app = express();

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});

//get stock info
  app.get(`/stock-info`, async (req, res) => {
    try {
      console.log(req);
      const apiUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&apikey=YLBVVSLVDOQI623`;
      const response = await axios.get(apiUrl);

      // Process the API response data and send it as a response
      res.json(response.data);
    } catch (error) {
      res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
    }
  });




//get autocomplete list
app.get('/auto-complete', async (req, res) => {
  try {
    const apiUrl = 'https://www.alphavantage.co/query?function=SYMBOL_SEARCH&keywords=A&apikey=YLBVVSLVDOQI6233';
    const response = await axios.get(apiUrl);

    // Process the API response data and send it as a response
    res.json(response.data);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data from the API.' });
  }
});

