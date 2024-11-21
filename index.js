const { Client, GatewayIntentBits } = require('discord.js');
require('dotenv').config();

// Create the bot client with necessary intents
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
  ],
});

// On bot ready
client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`);
});

// On new member join
client.on('guildMemberAdd', async (member) => {
  try {
    // Find the "Welcome" channel by name
    const welcomeChannel = member.guild.channels.cache.find(
      (channel) => channel.name === 'welcome'
    );

    // Check if the welcome channel exists
    if (!welcomeChannel) {
      console.warn('Welcome channel not found!');
      return;
    }

    // Construct the welcome message
    const onboardingLink = 'https://example.com/onboarding-document';
    const welcomeMessage = `Welcome to the server, ${member.user.username}! 🎉\n\nPlease take a moment to read our [onboarding document](${onboardingLink}). We're excited to have you here!`;

    // Send the welcome message
    await welcomeChannel.send(welcomeMessage);
    console.log(`Welcome message sent to ${member.user.username}`);
  } catch (error) {
    console.error('Error handling guildMemberAdd event:', error);
  }
});

// Login to Discord
client.login(process.env.DISCORD_BOT_TOKEN).catch((error) => {
  console.error('Failed to log in:', error.message);
});
