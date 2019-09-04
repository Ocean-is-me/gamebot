module.exports = {
    name: 'invite',
    usage: 'invite',
    aliases: ['botinfo', 'support', 'donate'],
    description: 'Invite the bot to your server!',
    category: 'info',
    permissions: [],
    dmCommand: true,
    args: false,
    run: function(msg, args) {
        msg.channel.sendMsgEmbed(`\
        [**Invite** Gamebot to your server](https://discordapp.com/oauth2/authorize?client_id=584266407764819970&scope=bot&permissions=1547041872)\n\
        [**Join** the support server](https://discord.gg/7pNEJQC)\n\
        [**Star** Gamebot on Github](https://github.com/zeroclutch/gamebot)\n\
        **Support** Gamebot on Patreon - *Coming Soon*\n\
        `, 'Important Links')
    }
}