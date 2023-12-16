// const express = require('express');
// const axios = require('axios');
// const bodyParser = require('body-parser');

// const app = express();
// const port = 3001;

// app.use(bodyParser.json());

// app.post('/api/chat', async (req, res) => {
//   const { message } = req.body;

//   try {
//     const response = await axios.post('https://api.openai.com/v1/chat/completions', {
//       prompt: message,
//       max_tokens: 150,
//     }, {
//       headers: {
//         'Content-Type': 'application/json',
//         'Authorization': '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',
//       },
//     });

//     const botReply = response.data.choices[0].text.trim();
//     res.json({ reply: botReply });
//   } catch (error) {
//     console.error('Error calling OpenAI API:', error);
//     res.status(500).json({ error: 'Internal Server Error' });
//   }
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });
