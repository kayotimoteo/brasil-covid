require('dotenv').config();
const express = require("express");
const api = require("./services/api");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(cors());

const dados = [];
const estados = [];

app.get("/country/:name", (request, response) => {
  const { name } = request.params;

  async function getCountry(country) {
    try {
      await api.get(`api/report/v1/${country}`)
                  .then(response => {
                    dados.splice([]);
                    const { country ,cases, confirmed, deaths, recovered, updated_at} = response.data["data"];

                    const dado = {
                      country,
                      cases,
                      confirmed,
                      deaths,
                      recovered,
                      updated_at
                    }
                    dados.push(dado);
                    return dados;
                  });
       return response.json(dados);
    } catch (error) {
      console.error(error);
    }
  }
  if(name === null){
    return response.status(400).json({ error: 'Ocorreu um erro'})
  }
  getCountry(name);
});
app.get("/provinces", (request, response) => {
  async function getState() {
    try {
      await api.get('api/report/v1')
                .then(response => {
                  estados.splice([]);
                  this.data = response.data["data"];
                  this.data.forEach((item) => {
                  
                  const uf = item.uf;
                  const state = item.state;
                  const cases = item.cases;
                  const deaths = item.deaths;
                  const suspects = item.suspects;
                  const refuses = item.refuses;
                  const datetime = item.datetime;
                    
                  const estado = {
                    uf,
                    state,
                    cases,
                    deaths,
                    suspects,
                    refuses,
                    datetime
                  }

                  estados.push(estado);

                  return estados;
                  });
                })
      return response.json(estados);
    } catch (error) {
      return response.status(500).json({ error: 'Ocorreu um erro'})
    }
  }
  getState();
});

module.exports = app;
