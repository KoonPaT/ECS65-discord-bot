const Discord = require('discord.js');
const config = require('./config.json');
const sleep = require('await-sleep')
const client = new Discord.Client();

async function main() {
    try {
        client.on('ready', () => {
            console.clear()
            client.user.setActivity("ECS65", { type: "PLAYING" })
            console.log(`
    ╔═╗╔═╗╔═╗  ╔╦╗╦╔═╗╔═╗╔═╗╦═╗╔╦╗  ╔═╗╔╗╔╦  ╦╔╗╔╔═╗
    ║╣ ║  ╚═╗   ║║║╚═╗║  ║ ║╠╦╝ ║║  ║ ║║║║║  ║║║║║╣ 
    ╚═╝╚═╝╚═╝  ═╩╝╩╚═╝╚═╝╚═╝╩╚══╩╝  ╚═╝╝╚╝╩═╝╩╝╚╝╚═╝`);
        });

        client.on('message', message => {

        });

        client.on("guildMemberAdd", (member) => {
            let role = member.guild.roles.cache.find(r => r.id === config.role_id);
            member.roles.add(role);

            client.channels.cache.get(config.welcome_id).send(new Discord.MessageEmbed()
                .setColor("#FF9933")
                .setTitle('ECS65')
                .setDescription(`ยินดีต้อนรับ <@${member.user.id}> เข้าสู่เซิร์ฟเวอร์`)
                .setTimestamp())
        });

        client.login(config.token);

    } catch (error) {
        console.log(error)
        await sleep(10000)
        return main()
    }
}

main()