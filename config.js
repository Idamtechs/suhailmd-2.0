const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="sodunkedavid@gmail.com"
global.location="Lagos,Nigeria.."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Lagos,Nigeria";
global.github=process.env.GITHUB|| "https://github.com/idamtechs";
global.gurl  =process.env.GURL  || "https://wa.me/+2348168772328";
global.website=process.env.GURL || "https://wa.me/+2348168772328" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/oq54ek.jpeg" || "https://files.catbox.moe/0xx09b.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© Spidey's sidekick" 


global.devs = "2348168772328" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348168772328";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "true" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://files.catbox.moe/0xx09b.jpeg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,234xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,234xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "2348168772328,234xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_40_11_12_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICA0LFxuICAgICAgICA5MCxcbiAgICAgICAgMjM5LFxuICAgICAgICA2LFxuICAgICAgICAzNSxcbiAgICAgICAgOTAsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDkwLFxuICAgICAgICA5NyxcbiAgICAgICAgMzQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjQsXG4gICAgICAgIDk5LFxuICAgICAgICA2OCxcbiAgICAgICAgMjIzLFxuICAgICAgICA2OCxcbiAgICAgICAgNTMsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NSxcbiAgICAgICAgNTksXG4gICAgICAgIDIyMixcbiAgICAgICAgMjgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDEsXG4gICAgICAgIDAsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA0MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxNTAsXG4gICAgICAgIDMxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDgwLFxuICAgICAgICAxOTksXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjIxLFxuICAgICAgICAyMjEsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTgyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDM2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTkwLFxuICAgICAgICA5NCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwLFxuICAgICAgICAxODAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjU0LFxuICAgICAgICA2N1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAyMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxODEsXG4gICAgICAgIDc5LFxuICAgICAgICA1MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDQ3LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA5LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTIsXG4gICAgICAgIDg3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0MCxcbiAgICAgICAgMjgsXG4gICAgICAgIDM5LFxuICAgICAgICA1MyxcbiAgICAgICAgMTcwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM2LFxuICAgICAgICAxODAsXG4gICAgICAgIDM2LFxuICAgICAgICA4M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTMsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDMxLFxuICAgICAgICAyMDcsXG4gICAgICAgIDg5LFxuICAgICAgICA1NCxcbiAgICAgICAgMjE3LFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjcsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE3NCxcbiAgICAgICAgNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjExLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTg3LFxuICAgICAgICA3NSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3MyxcbiAgICAgICAgMTg1LFxuICAgICAgICA2OCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTIyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyNDUsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTk1LFxuICAgICAgICA0MCxcbiAgICAgICAgNDIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjA5LFxuICAgICAgICA2MyxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTA4LFxuICAgICAgICA0MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTExLFxuICAgICAgICA1MCxcbiAgICAgICAgMzksXG4gICAgICAgIDc4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg3LFxuICAgICAgICA5OSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk1LFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTk1LFxuICAgICAgICAyMCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMixcbiAgICAgICAgMTkxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MCxcbiAgICAgICAgNDcsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1MyxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxODksXG4gICAgICAgIDU1LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQyLFxuICAgICAgICAyNTQsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE3LFxuICAgICAgICA1MFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDAsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICA2NixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwOVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5OSxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDIyOSxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDkzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAxODQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTgsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTE4LFxuICAgICAgICA2NSxcbiAgICAgICAgOTUsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDMsXG4gICAgICAgIDExLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY2LFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzYsXG4gICAgICAgIDc0LFxuICAgICAgICAyMyxcbiAgICAgICAgMCxcbiAgICAgICAgMTU0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTYwLFxuICAgICAgICA0NCxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMjMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMzMsXG4gICAgICAgIDQzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTc4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMDksXG4gICAgICAgIDc3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDQyLFxuICAgICAgICAxMjksXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDYsXG4gICAgICAgIDUwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMzVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDIxMSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJGNnVpc214MlNWVWJoNHNITmM1Rjk0NGxxZGRZQkVnMFVwZWtadm1xOEdrPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxNjg3NzIzMjhAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjI4MDQ2NEYzRjU3OEUxMDA2QTc0NUQzMEYyNkQ2OEE1XCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMTQzNjgyNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJoMkxJQ2lXWFNWcV9YY2NsYXQ4MHRRXCIsXG4gIFwicGhvbmVJZFwiOiBcIjZhOWJmZWVhLTdlNGMtNDc5Ny04YmY4LWMwZWIzOTIyZTY0YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA5NyxcbiAgICAgIDk2LFxuICAgICAgMTE0LFxuICAgICAgMjE4LFxuICAgICAgMTQzLFxuICAgICAgMjgsXG4gICAgICA3NyxcbiAgICAgIDgwLFxuICAgICAgMTYxLFxuICAgICAgOTUsXG4gICAgICAyMTcsXG4gICAgICAyMjYsXG4gICAgICAxNjAsXG4gICAgICAzNixcbiAgICAgIDc2LFxuICAgICAgNzUsXG4gICAgICAxMTYsXG4gICAgICAxMjksXG4gICAgICAxODEsXG4gICAgICAyMDZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODYsXG4gICAgICAyMjIsXG4gICAgICAyMjcsXG4gICAgICA5OSxcbiAgICAgIDIyNCxcbiAgICAgIDIzNSxcbiAgICAgIDE3LFxuICAgICAgMTQ2LFxuICAgICAgNzgsXG4gICAgICAyMDQsXG4gICAgICAyMixcbiAgICAgIDIxNCxcbiAgICAgIDEyOSxcbiAgICAgIDEyNCxcbiAgICAgIDE0OCxcbiAgICAgIDcyLFxuICAgICAgMTcxLFxuICAgICAgMjEwLFxuICAgICAgMjIsXG4gICAgICAyMzZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSFRLQ1pMUURcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxNjg3NzIzMjg6NDhAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjIyODAxNTg4NzkzNzc3Mzo0OEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNNVGQycDRDRUpMQ3pya0dHQXdnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkMzeE1TSFQvOGlVODQ2MXZKME1DMEdCcldmZkVuMmF6Z0VLRGNJWDFYMk09XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiVnhmSzhiSldqYVhKM2pSdE1lOEd3RDdpYkRpOVVkdTFyaGJVZGxtNXRSc3I0SlJtOG5ONEdteXpjRElER3J0T1JmRFdZRSttVk85M05FR21yU21hQWc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibllzMk81dDROL0VmcnNzSkhNOHBRbWoxelpBb1JyK0pOQjV5VU5IS3lhS3pmQk1FVHgwekpEd0I5YXkranFJODJMTHcrQTFJOE5tMzRiQXYxOTU2anc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODE2ODc3MjMyODo0OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA3NixcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAzNyxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDExMSxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA2NyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA5NixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgODksXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDk1LFxuICAgICAgICAgIDk5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzE0MzY4MjIsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFKSnFcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUpKcS5qc29uIjogIntcImtleURhdGFcIjpcIitKdlIrdGo0MVNnd01acmU0b2FZa0dKc2U3NUtlQ2tYS0xlMGxBL3c2VVk9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NjAxMjcyMDA0LFwiY3VycmVudEluZGV4XCI6NCxcImRldmljZUluZGV4ZXNcIjpbMCwyLDMsNF19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "Spidey",
  packname: process.env.PACK_NAME || "Spidey pack",
  botname : process.env.BOT_NAME  || "Spidey's sidekick",
  ownername:process.env.OWNER_NAME|| "Spiderman🕷️🕸️",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "Spiderman🕷️🕸️"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
