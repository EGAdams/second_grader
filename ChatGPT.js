const { Configuration, OpenAIApi } = require( "openai" );
const dotenv = require('dotenv');


dotenv.config();

//Access environment variables
const openAiApiKey = process.env.OPENAI_API_KEY;

const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
});
const openai = new OpenAIApi( configuration );

async function myFunction() {
    const response = await openai.createCompletion( {
      model: "code-davinci-002",
      prompt: "What is the max_tokens key used for when making prompts?",
      temperature: 0,
      max_tokens: 600,
      top_p: 1.0,
      frequency_penalty: 0.5,
      presence_penalty: 0.0,
    });
  
    console.log( response.data.choices[0].text );
  }
  
  myFunction();
