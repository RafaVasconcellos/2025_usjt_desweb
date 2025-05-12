require('dotenv').config();

const express = require('express');
const { GoogleGenAI } = require('@google/genai');

const app = express();
app.use(express.json());

// endpoint, composto por três parte: 
// 1 - método HTTP, 2- padrão de acesso, 3 - funcionalidade

// 1 - GET, POST, PUT, DELETE
// 2 (rotas) - usjt.br/notas
// 3 funcionalidade - " () => {} ", uma funcao que aciona essas rotas

app.post('/pergunte-ao-gemini', async (req, res) => {
    const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });
    
    const prompt = req.body.prompt;

    const response = await ai.models.generateContent({
        model: "gemini-2.0-flash",
        contents: prompt,
    });

    res.json(`Resposta: ${ response.text }`);
});

app.listen(3000, () => console.log("ta rodando"));