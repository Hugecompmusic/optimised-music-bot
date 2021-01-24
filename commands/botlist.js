const { Client, Collection, MessageEmbed } = require(`discord.js`);
const {
  PREFIX,
  approveemoji,
  denyemoji
} = require(`../config.json`);

module.exports = {
  name: `botlist`,
  description: `Gives you the botlists of the Bot`,
  aliases: [],
  cooldown: 3,
  edesc: "Type this command to view all Bot list Server where the bot is on. Please vote there UwU",
  execute(message, args, client) {
    //react with approve emoji
    message.react("769665713124016128");
    //send the botlist embed
    message.reply(new MessageEmbed().setColor("#c219d8")
    .setTitle("Here is a list for all Bot-Lists this Bot is on!")
    .addField("top.gg", "https://top.gg/bot/777036344278515712")
    .addField("My Website","https://hugecompmusic.glitch.me")
    );

  }
}
