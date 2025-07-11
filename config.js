const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({ path: './config.env' });

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}
module.exports = {
SESSION_ID: process.env.SESSION_ID || "",
ALIVE_IMG: process.env.ALIVE_IMG || https://github.com/dasunsa/MR-DS-OFFICIAL/blob/main/images/WhatsApp%20Image%202025-06-09%20at%2014.28.44_e0d443cb.jpg?raw=true"",
ALIVE_MSG: process.env.ALIVE_MSG || "*Hello👋 MR DS OFFICIAL Is Alive Now😍*",
BOT_OWNER: '94776121326',  // Replace with the owner's phone number



};
