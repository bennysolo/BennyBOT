const { WAConnection, MessageType, Presence, MessageOptions, Mimetype, WALocationMessage, WA_MESSAGE_STUB_TYPES, ReconnectMode, ProxyAgent, GroupSettingChange, waChatKey, mentionedJid, processTime } = require("@adiwajshing/baileys")
const imgbb = require('imgbb-uploader')
const moment = require("moment-timezone")
const fs = require("fs")
const benny = new WAConnection()
const apikey = 'APIKEY' //Get apikey from https://api-self.herokuapp.com
const qrcode = require('qrcode-terminal')
const help = require('./lib/help')
const { color } = require('./lib/color')
const time = moment.tz('Asia/Jakarta').format('HH:mm:ss DD:MM:YYYY')

/** DATABASE JSON*/
const welcome = JSON.parse(fs.readFileSync('./database/welcome.json'))
var dates = moment().tz('Asia/Jakarta').format("YYYY-MM-DDTHH:mm:ss");
		var date = new Date(dates);
        var tahun = date.getFullYear();
        var bulan = date.getMonth();
        var tanggal = date.getDate();
        var hari = date.getDay();
        var jam = date.getHours();
        var menit = date.getMinutes();
        var detik = date.getSeconds();
        var jam = date.getHours();

 switch(hari) {
                case 0: hari = "Minggu"; break;
                case 1: hari = "Senin"; break;
                case 2: hari = "Selasa"; break;
                case 3: hari = "Rabu"; break;
                case 4: hari = "Kamis"; break;
                case 5: hari = "Jum`at"; break;
                case 6: hari = "Sabtu"; break;
            }
            switch(bulan) {
                case 0: bulan = "Januari"; break;
                case 1: bulan = "Februari"; break;
                case 2: bulan = "Maret"; break;
                case 3: bulan = "April"; break;
                case 4: bulan = "Mei"; break;
                case 5: bulan = "Juni"; break;
                case 6: bulan = "Juli"; break;
                case 7: bulan = "Agustus"; break;
                case 8: bulan = "September"; break;
                case 9: bulan = "Oktober"; break;
                case 10: bulan = "November"; break;
                case 11: bulan = "Desember"; break;
            }
			
benny.on('qr', qr => {
   qrcode.generate(qr, { small: true })
   console.log(`[ ${time} ] Sqan Qr nih`)
   console.log(color('B', 'green'), color('e', 'red'), color('n', 'yellow'), color('n', 'purple'), color('y', 'blue'), color('BOT', 'cyan'))
   console.log(color('SUPPORT by https://api-self.herokuapp.com', 'cyan'))
})

benny.on('credentials-updated', () => {
   const authInfo = benny.base64EncodedAuthInfo()
   fs.writeFileSync('./benny.json', JSON.stringify(authInfo, null, '\t'))
   anu = JSON.parse(fs.readFileSync('./benny.json'))
   console.log(color(anu, 'cyan'))
})

fs.existsSync('./benny.json') && benny.loadAuthInfo('./benny.json')

benny.connect();

benny.on('group-participants-update', async (anu) => {
		try {
			console.log(anu)
			const group = await benny.groupMetadata(anu.jid)
			if (anu.action == 'add') {
				const group = await benny.groupMetadata(anu.jid)
	if (!welcome.includes(anu.jid)) return
				num = anu.participants[0]
				pushname = benny.contacts[num].notify || benny.contacts[num].vname
				global.txtwl
				txtwl = `Hai @${num.split('@')[0]}\nWelcome to ${group.subject}\nSemoga betah~~`
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				teks = `${txtwl}`
				buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
			buffu = await getBaper(`https://api-self.herokuapp.com/docs/canvaswel?name=${pushname}&img_url=${data.display_url}&gcname=${group.subject}&jumlahmem=${group.participants.length}&apikey=${apikey}`)
				benny.sendMessage(group.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: txtwl, quoted: { "key": { "participant": `${numbernye}`, "remoteJid": `${setgrup}`, "fromMe": false, "id": "B391837A58338BA8186C47E51FFDFD4A" }, "message": { "documentMessage": { "jpegThumbnail": buff, "mimetype": "application/octet-stream", "title": `*Welcome*`, "fileLength": "36", "pageCount": 0, "fileName": `_*Welcome*_` }}, "messageTimestamp": "1614069378", "status": "PENDING"}})
				} else if (anu.action == 'remove') {
					if (!welcome.includes(anu.jid)) return
					const group = await benny.groupMetadata(anu.jid)
				num = anu.participants[0]
				pushname = benny.contacts[num].notify || benny.contacts[num].vname
				try {
					ppimg = await benny.getProfilePicture(num)
				} catch {
					ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
				}
				
				teks = `Selamat tinggal @${num.split('@')[0]}`
				let buff = await getBaper(ppimg)
				datae = await imageToBase64(JSON.stringify(ppimg).replace(/\"/gi, ''))
					fs.writeFileSync('janckuk.jpeg', datae, 'base64')
					var imgbb = require('imgbb-uploader')
					data = await imgbb("cedeb44b8d204947a6833ca1412ca77d", 'janckuk.jpeg')
				buffu = await getBaper(`https://api-self.herokuapp.com/docs/canvasbye?name=${pushname}&img_url=${data.display_url}&gcname=${group.subject}&jumlahmem=${group.participants.length}&apikey=${apikey}`)
				benny.sendMessage(group.id, buffu, MessageType.image, {contextInfo: {mentionedJid: [num]}, caption: teks})
				}
} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
		})
		
		
benny.on('message-new', async (ben) => {
	try {
		if (!ben.message) return
		if (ben.key && ben.key.remoteJid == 'status@broadcast') return 
		global.blocked
		const content = JSON.stringify(ben.message)
		const from = ben.key.remoteJid
		const type = Object.keys(ben.message)[0]
		const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType
		budy = (type === 'conversation') ? ben.message.conversation : (type === 'extendedTextMessage') ? ben.message.extendedTextMessage.text : ''
		prefix = '#'
		body = (type === 'conversation' && ben.message.conversation.startsWith(prefix)) ? ben.message.conversation : (type == 'imageMessage') && ben.message.imageMessage.caption.startsWith(prefix) ? ben.message.imageMessage.caption : (type == 'videoMessage') && ben.message.videoMessage.caption.startsWith(prefix) ? ben.message.videoMessage.caption : (type == 'extendedTextMessage') && ben.message.extendedTextMessage.text.startsWith(prefix) ? ben.message.extendedTextMessage.text : ''
		const command = body.slice(1).trim().split(/ +/).shift().toLowerCase()
		const args = body.trim().split(/ +/).slice(1)
		const isCmd = body.startsWith(prefix)
		const arg = budy.slice(command.length + 2, budy.length)
		const botNumber = benny.user.jid
		const ownerNumber = ["6289636006352@s.whatsapp.net","6289636006352@s.whatsapp.net","6281317635610@s.whatsapp.net"] // ganti nomer lu
		const devNumber = ["6289636006352@s.whatsapp.net"] // ganti nomer lu
		const isGroup = from.endsWith('@g.us')
		const sender = ben.key.fromMe ? benny.user.jid : isGroup ? ben.participant : ben.key.remoteJid
		const totalchat = await benny.chats.all()
        const pushname = ben.key.fromMe ? benny.user.name : benny.contacts[sender].notify || benny.contacts[sender].vname
		const groupMetadata = isGroup ? await benny.groupMetadata(from) : ''
		const groupName = isGroup ? groupMetadata.subject : ''
		const groupId = isGroup ? groupMetadata.jid : ''
		const groupMembers = isGroup ? groupMetadata.participants : ''
		const groupDesc = isGroup ? groupMetadata.desc : ''
		const groupOwner = isGroup ? groupMetadata.owner : ''
		const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''
		
		
		
		//INSTALLATION FOR DATABASE
		const isRegistered = register.checkRegisteredUser(sender, _registered)
		const isBotGroupAdmins = groupAdmins.includes(botNumber) || false
		const isGroupAdmins = groupAdmins.includes(sender) || false
		const isLevelingOn = isGroup ? _leveling.includes(from) : false
		const isAntilink = isGroup ? anlink.includes(from) : false
		const isWelkom = isGroup ? welkom.includes(from) : false
		const isKasar = isGroup ? kasar.includes(from) : false
		const isBot = isGroup ? _bot.includes(from) : false
		const isVirus = isGroup ? virus.includes(from) : false
		const isAutoSticker = isGroup ? autostick.includes(from) : false
		const isAutoAmbil = isGroup ? autoambil.includes(from) : false
		const isNsfw = isGroup ? nsfw.includes(from) : false
		const isSimi = isGroup ? samih.includes(from) : false
		const isKickArea = isGroup ? kickarea.includes(from) : false
		const isOwner = ownerNumber.includes(sender)
		const isDev = devNumber.includes(sender)
		const isBanned = _ban.includes(sender)
		const isAfk = _afk.includes(sender)
		const isPremium = premium.checkPremiumUser(sender, _premium)
		const isSewa = sewa.checkPremiumUser(from, _sewa)
        const chats = type == 'conversation' || type == 'extendedTextMessage'
		const isUrl = (url) => {
			return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%.+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%+.~#?&/=]*)/, 'gi'))
		}
		if (!isGroup && !isCmd) console.log(color(time, "gold"), color("[ PRIVATE ]", "aqua"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0], "yellow"))
            if (isGroup && !isCmd) console.log(color(time, "gold"), color("[  GROUP  ]", "aqua"), color(msgss(budy)), color("from", "pink"), color(sender.split('@')[0], "yellow"), color("in", "purple"), color(groupName, "yellow"))
            if (!isGroup && isCmd) console.log(color(time, "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color(sender.split('@')[0], "blue"))
            if (isGroup && isCmd) console.log(color(time, "gold"), color("[ COMMAND ]", "aqua"), color(msgs(command)), color("from", "pink"), color(sender.split('@')[0], "blue"), color("in", "purple"), color(groupName, "yellow"))
		switch(command) {
		case 'help':
		benny.sendMessage(from, help(prefix), text)
		break
		}
		} catch (e) {
			console.log('Error : %s', color(e, 'red'))
		}
})