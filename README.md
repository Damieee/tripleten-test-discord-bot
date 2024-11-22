# Discord Bot Application

Welcome to the Discord Bot Application! This bot is designed to welcome new members to your Discord server and provide them with an onboarding document.

## Table of Contents
- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Running the Bot](#running-the-bot)
- [Deployment](#deployment)
- [License](#license)

## Features
- Welcomes new members to the server.
- Sends an onboarding document link to new members.

## Prerequisites
Before you begin, ensure you have met the following requirements:
- You have [Node.js](https://nodejs.org/) installed on your machine.
- You have a Discord account and a server where you can add the bot.
- You have created a bot on the [Discord Developer Portal](https://discord.com/developers/applications) and obtained your bot token.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/your-repo-name.git](https://github.com/Damieee/tripleten-test-discord-bot
   cd tripleten-test-discord-bot
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Discord bot token:
   ```plaintext
   DISCORD_BOT_TOKEN=your_bot_token_here
   ```

## Running the Bot
To run the bot locally, use the following command:


You should see a message indicating that the bot has logged in successfully.

## Deployment
To deploy the bot using Docker, follow these steps:

1. Build the Docker image:
   ```bash
   docker build -t discord-bot .
   ```

2. Run the Docker container:
   ```bash
   docker run -d --env DISCORD_BOT_TOKEN=your_bot_token_here discord-bot
   ```

For more information on deploying Docker containers, refer to the [Docker documentation](https://docs.docker.com/get-started/).

## License
This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Deployment 
You can deploy version of the bot at cloud service of your choice
