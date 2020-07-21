# Alexa Conversations - Weather Bot Skill 

This folder contains the nodejs lambda function code for the Alexa Conversations Weather Bot hosted template available in the Alexa Developer Portal.

# How to use
You should only use this code if you create a new Alexa skill using the Alexa Conversations Weather Bot template, but decide to host your own endpoint for the skill service.

# Installing the code in your own lambda function
To use this code in your own AWS Lambda function, you will need to login to your AWS account and create a lambda function for NodeJS using the latest version and paste the 5 files under lambda/custom folder into the inline editor or upload a zip file containing the files. For more information on setting up lambda functions for use in Alexa skills, please see our documentation: [Host a Custom Skill as an AWS Lambda Function](https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html%28https://developer.amazon.com/en-US/docs/alexa/custom-skills/host-a-custom-skill-as-an-aws-lambda-function.html)


# Skill Functionality

Please refer to the [developer documentation](https://developer.integ.amazon.com/en-US/docs/alexa/conversations/about-alexa-conversations.html) for details or terminology you don't understand as part of this guide.

This template provides a very simple starting point to demonstrate a few key concepts in Alexa Conversations. Out of the box it supports the following voice flows:

 - A one-shot invocation that tells weather information for a given city
 - Elicitation, denial and re-confirmation of city to give weather information

As a developer, you can see examples of:

 - Annotated dialogs to consume user input
 - Calling a configured API to pass the captured input to the lambda function,
 - Processing the response in APL-A (audio)

Before modifying the template to begin your development, you should try to following invocations and trace their path through the annotated dialog to understand how Utterance Sets, API invocations, API responses and Response Templates are connected together in the dialog to create the interaction and round trip. 

 1. "Alexa, open weather bot"
 2. "Alexa ask weather bot for weather in Seattle"

# Modifying the template
After creating a skill from the hosted-skill template, you can feel free to leave the existing dialogs, APIs, response templates and utterance sets in place and start building your own dialogs, just be aware that utterances that match those in the existing utterance sets have a chance of invoking those dialogs.
## To completely clear any traces of the template and start with a 'bare metal' Alexa Conversations skill

 - Delete the Utterance Sets named **DenyGetWeather**, **ConfirmGetWeather**, **InformCity**, **GetWeatherWithCity** and **GetWeather**
 - Delete the dialogs **GetWeatherRequestingArg**, **GetWeatherWithArg** and **GetWeatherDenyingFirstArg**
 - Delete the API Definitions **GetWeatherAPI**
 - Delete the Response Templates **GetWeatherResponse**, **ConfirmGetWeatherResponse**, **RequestCityResponse**
 - You will also want to modify the **welcome** template so that the skill launch (i.e. "open *conversation starter*) is more appropriate for your skill.