const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "923184474176";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_21_26_07_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTg3LFxuICAgICAgICA1NCxcbiAgICAgICAgNTksXG4gICAgICAgIDIzMixcbiAgICAgICAgMTMyLFxuICAgICAgICAxMDUsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNDMsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxODMsXG4gICAgICAgIDc4LFxuICAgICAgICAyNDMsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTExLFxuICAgICAgICAxNDMsXG4gICAgICAgIDIzLFxuICAgICAgICAyNyxcbiAgICAgICAgNjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgOTksXG4gICAgICAgIDM2LFxuICAgICAgICAyMjgsXG4gICAgICAgIDc4LFxuICAgICAgICAyNSxcbiAgICAgICAgMjI4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDIzLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzLFxuICAgICAgICA1NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE4MyxcbiAgICAgICAgNTksXG4gICAgICAgIDczLFxuICAgICAgICAxMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzksXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDgyLFxuICAgICAgICAxNjksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTI2LFxuICAgICAgICAxODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgNjAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxNTAsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTk0LFxuICAgICAgICAzOSxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDk1LFxuICAgICAgICAxNDksXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDEwLFxuICAgICAgICAzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTkzLFxuICAgICAgICA2NixcbiAgICAgICAgOTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIxLFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3MCxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA3NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNDAsXG4gICAgICAgIDU5LFxuICAgICAgICA1NyxcbiAgICAgICAgMTg5LFxuICAgICAgICAyOSxcbiAgICAgICAgNTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE1NixcbiAgICAgICAgNjUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM2LFxuICAgICAgICA1LFxuICAgICAgICA5OSxcbiAgICAgICAgMTI5LFxuICAgICAgICA1NSxcbiAgICAgICAgMTQsXG4gICAgICAgIDc4LFxuICAgICAgICA3MSxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NCxcbiAgICAgICAgOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0NCxcbiAgICAgICAgMCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzksXG4gICAgICAgIDEzMixcbiAgICAgICAgMzQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNzEsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICA0MSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxODIsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTk3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk0LFxuICAgICAgICA2NyxcbiAgICAgICAgOTcsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDAsXG4gICAgICAgIDE4MixcbiAgICAgICAgODEsXG4gICAgICAgIDIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTMxLFxuICAgICAgICA2MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMixcbiAgICAgICAgMTc1LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0NyxcbiAgICAgICAgNDUsXG4gICAgICAgIDY1LFxuICAgICAgICA3M1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAyNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAzMSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDE0OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxNDAsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTAzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMixcbiAgICAgICAgMjM0LFxuICAgICAgICAyNDgsXG4gICAgICAgIDE0LFxuICAgICAgICA4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY3LFxuICAgICAgICA2NSxcbiAgICAgICAgMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDg5LFxuICAgICAgICAyNTMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA1LFxuICAgICAgICA4MSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNyxcbiAgICAgICAgNTMsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTc1LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDIsXG4gICAgICAgIDUsXG4gICAgICAgIDEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTgwLFxuICAgICAgICA5MCxcbiAgICAgICAgMjQyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDY1LFxuICAgICAgICA4MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1LFxuICAgICAgICA3NSxcbiAgICAgICAgNjksXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM3LFxuICAgICAgICA0MCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAzMixcbiAgICAgICAgMTE1LFxuICAgICAgICAxNjMsXG4gICAgICAgIDE4OSxcbiAgICAgICAgNjYsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEsXG4gICAgICAgIDQwLFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDE0MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTg2LFxuICBcImFkdlNlY3JldEtleVwiOiBcIm40UDFJWFJ6b3Yxd1k3emZGdzd0YWxpUnIwelNSL2pIalYxTjIzUVpKTXc9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInZkSm0zWjVrUzhtZHZTclB1YXdyWHdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNzQxNzE4NjAtMDk5Yy00M2JiLThjZTUtNGM2ZDQ5NjBiNWEyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ4LFxuICAgICAgMjgsXG4gICAgICAxODMsXG4gICAgICAxNjMsXG4gICAgICAyMyxcbiAgICAgIDEzNyxcbiAgICAgIDM2LFxuICAgICAgMTEsXG4gICAgICAyNDQsXG4gICAgICAxOSxcbiAgICAgIDI0NyxcbiAgICAgIDgzLFxuICAgICAgMjQ1LFxuICAgICAgOTgsXG4gICAgICAxODQsXG4gICAgICAyMjQsXG4gICAgICAxNTUsXG4gICAgICAxNzIsXG4gICAgICAxNzcsXG4gICAgICAxNTJcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjQsXG4gICAgICAxNDcsXG4gICAgICAyNDgsXG4gICAgICAyMTcsXG4gICAgICAxNjAsXG4gICAgICAyNTMsXG4gICAgICA3LFxuICAgICAgNjgsXG4gICAgICAxNTYsXG4gICAgICA3NCxcbiAgICAgIDkyLFxuICAgICAgMjM0LFxuICAgICAgMTYxLFxuICAgICAgMTI3LFxuICAgICAgMjM2LFxuICAgICAgMjEzLFxuICAgICAgMTQxLFxuICAgICAgNjgsXG4gICAgICAyNTIsXG4gICAgICAzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJOMlhLRkE3WlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY4MzAzMDozNUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiMjQzMzMxNzI0NTMzODY0OjM1QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIlRIxJjDmFLDik0g4pqT77iP8J+Sm1wiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ05YQXM3UUVFSUcrakxRR0dBTWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiVkpiLzdqUExtZTFFenRtRFFMaWRvM1diKzYrbGNFSWZkOG50cEZ5U0JYOD1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ2VXRMdkJrUUlKWDNsclRxaUlKSzVmOFhpeTZGMXJ6RkxTTXVoV3ArNDExYldlZCtRZ1A5dGRzMWh3dXZoN1ZaVHNZdldOQ01ZeXloeHNqZWFsZlhEUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCIvUWU4YUFtNy9MUXRiRHBUVlpLdmluWEhYZklDdTNGdGpUcENqbjIvVEVjOWhBc1hJSGtUQUpRdTUzUnUwQ3JYOW9Ra0ozWG82NDZxT1JaVzhMMnpoUT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI1NjgzMDMwOjM1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMTg0LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE1NSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDE2NSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTk4NjkxODcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFEK2tcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUQray5qc29uIjogIntcImtleURhdGFcIjpcInNBMDNRUHdycjBDYWlrK3pqaHg4eDY0TnQxU1JUWnl4TWlNRi9kcjFRa1U9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTE4MzYzNzU4OSxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE5Njg1ODE3MjU5XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
