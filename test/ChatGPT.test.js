const { Configuration, OpenAIApi } = require( "openai" );
const dotenv = require('dotenv');
const { describe, expect, it, beforeEach } = require( '@jest/globals' );

dotenv.config();

//Access environment variables
const openAiApiKey = process.env.OPENAI_API_KEY;

describe( "OpenAIApi", () => {
    describe( "createCompletion()", () => {
        it( "should return the correct response when prompt is given", async () => {
            const configuration = new Configuration({
                apiKey: process.env.OPENAI_API_KEY
            });
            const openai = new OpenAIApi( configuration );
            const response = await openai.createCompletion({
                model: "code-davinci-002",
                prompt: "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot",
                temperature: 0,
                max_tokens: 60,
                top_p: 1.0,
                frequency_penalty: 0.5,
                presence_penalty: 0.0,
                stop: [ "You:" ],
            });
            expect( response.data.choices[0].text ).to.equal( ": You can use the setTimeout() method.\n" );
        });
        // it( "should return an error message when no api key is provided", async () => {
        //     const configuration = new Configuration({
        //         apiKey: ""
        //     });
        //     const openai = new OpenAIApi( configuration );
        //     const response = await openai.createCompletion({
        //         model: "code-davinci-002",
        //         prompt: "You: How do I combine arrays?\nJavaScript chatbot: You can use the concat() method.\nYou: How do you make an alert appear after 10 seconds?\nJavaScript chatbot",
        //         temperature: 0,
        //         max_tokens: 60,
        //         top_p: 1.0,
        //         frequency_penalty: 0.5,
        //         presence_penalty: 0.0,
        //         stop: [ "You:" ],
        //     });
        //     expect( response.data.choices[0].text ).to.equal( "No API Key provided" );
        // });
    });
});
