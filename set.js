
// change only what you are ask to change else bit won't work thanks for your understanding 
const fs = require('fs'), 
      dotenv = fs.existsSync('config.env') ? require('dotenv').config({ path: '/.env' }) : undefined,
      convertToBool = (text, fault = 'true') => text === fault;


global.sessionServer = "https://sessions-r8cn.onrender.com";
global.session = "https://session-id-8pge.onrender.com"; 
 
 
module.exports = {
SESSION_ID: process.env.SESSION_ID || "PRINCE-MD~H4sIAAAAAAAAA5VUa5OiOBT9L/mKNSICKlVdtYgPwAcg2ra9NR8iCTHKyySAONX/fYt+TM9W7c72fqFCHueee8+59wfIcsrxAjfA+AEKRisocLsUTYGBAcZlHGMGOgBBAYEBDpMSq6ISs7N03/pTG2vWVl2S6eFyvB3tc71C6SaY0/C5Vz+Alw4oymNCo98AkiJK62OSuPg6u7i06ZM9LVaTmRIGjWedD8tkUztlpOi3FrBFhJTRjEyLE04xg8kCNz6k7Gv0Q2euqqf+dNNsPSLOMfFGDhnD7uR+XWmju5BhnC9VjzpP+dfob+S6GvarGeP14Ohy7aLPkXbTvKVYPwt/IE3RY6xXYn6pgzf6nJIMIwfhTFDRfLnuF7O/N2kQp+4+loIyLn2S7cnQIt5ue9PPj4HeFUMbo8Vc/RrxcDzNVbtyhtvQRJLnEzLRs4qXbtYcPHvky0HgEo+ypfU34j778Mrl/9R9vyysq7QbBYwvenYd962y0KRwfbqW1yOKi35TTgf+NVVnztfo215+vsey1fCqkgbBLVhZijY+xQ33rqNtXSfkWrlHLZht5E/6UJTsdywnj5HerFbLx+ETKRbaBq0Xw2MfSxZ7nJ7yR8nHMyGuSVk3HtXGT1TpZouREvUOUXGOHdecRkHOyMyf1BWq7sq+uzhbJnl4zeiCGwcBo/fSAQwTygWDguZZuzccdABEVYgjhsVrdcEhPOYHLw8Vd+Wu+7o07qab9ZqZm20TkuMt3CjHYdLVsmalPoAOKFgeYc4xsikXOWtWmHNIMAfGn987IMM38aZbG63f64CYMi52WVkkOUQfon4cwijKy0yETRZZ7QIzYMif21gImhHelrHMIItOtMLWCQoOjBgmHP9MEDOMgCFYiX82rZWjtu6qtVQVW56ADkhf9aAIGEDpq0N5oOk9VVGHRk/5g3+rW1xYFN8yLEAHZLC9DnyWx5jnrXDJ68uePhwqA0Vpv4Oe3r5tD15+km5jICwgTTgwgLWIk1HpWNNVOButnPncPBDTIib4TPLDLG9qdAfEq2WF757OTHjPcnSRF2tbixNpfFfjxS5FjT6ZnE89Ij/8AwgwwGx5SMRN1WbyVZf2uJ+Rs/bkBW7Xt/B5zGH1vD2zQc1CgSK5OF4G5nZZ99DtZo9vKttypzStCfevh9E0GF3V0t2Ppmb90EZDuKIR/jWYm/taaqNBUT4jm0JvXG6bTYNue/g8s/ubXrq/7AQa7/ZQdAPJjZ3N/TadrycWegyF2Aark+8rZuCol2saz8vDZZ3aE/PNxq9tlLyPL/rqsFa+9jem+HUavKv033K+MW9tJ790fgF5HzD/0qTjWFInfL1ms5mqD7Ypst21dd5IT1pMIsluEjeLSlKrKjqswcvL9w4oEijinKXAADw9QtABLC9bEztZnP8mkmXunI/2TSAX5mdjbGmKuYBpAYzeQJNHii4rw7dbPssLG/ITMECf+Dv3Al7+AnqmPkRlBwAA", // Add sess Id here espwcially when deploying on panels else use app.json and .env file...
SUDO_NUMBERS: process.env.SUDO_NUMBERS || "", //Add multiple Numbers with Country Codes without (+) Separated by Comma...
ANTI_DELETE: process.env.ANTI_DELETE || "inboxonly", // can be set to inboxonly/allchats/true/false
AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "true",
AUTO_LIKE_STATUS: process.env.AUTO_LIKE_STATUS || "true",
AUTO_LIKE_EMOJIS: process.env.AUTO_LIKE_EMOJIS || "💛,❤️,💜,🤍,💙", //Input Yours Custom...Can be one Emoji or Multiple Emojis Separated by Commas
AUTO_REPLY_STATUS: process.env.AUTO_REPLY_STATUS || "false",
STATUS_REPLY_MSG: process.env.STATUS_REPLY_MSG || "✅️ Status Viewed by prince-mdx", // // Input Yours custom...
MODE: process.env.MODE || "public", // Put private or public or inbox or groups
OWNER_NUMBER: process.env.OWNER_NUMBER || "2348075614248", // Only 1 owner Number Here, others Add to sudo numbers...
OWNER_NAME: process.env.OWNER_NAME || "𝐏", // Input Yours custom...(Maintain font for Flow)
PACK_AUTHOR: process.env.PACK_AUTHOR || "𝐓𝐄𝐂𝐇", // Added // Input Yours custom...
PACK_NAME: process.env.PACK_NAME || "💙", // Added // Input Yours custom...
PREFIX: process.env.PREFIX || ".",
VERSION: process.env.VERSION || "3.0.0",
ANTILINK: process.env.ANTILINK || "false", //  Enter true to kick automatically or delete to delete without kicking or warn to warn before kicking
ANTICALL: process.env.ANTICALL || "false",
ANTIBAD: process.env.ANTIBAD || "false",
BAD_WORDS: process.env.BAD_WORDS || "fuck, pussy, anus, idiot", // Add Yours Separated by Comma(will be deleted if ANTIBAD is set to true)
ANTICALL_MSG: process.env.ANTICALL_MSG || "*_📞 📵 No Calls Allowed!_*",
AUTO_REACT: process.env.AUTO_REACT || "false",
BOT_NAME: process.env.BOT_NAME || "𝐏𝐑𝐈𝐍𝐂𝐄 𝐌𝐃𝐗", //  don't change 
BOT_PIC: process.env.BOT_PIC || "https://raw.githubusercontent.com/Mayelprince/url/main/menun.jpg", //  don't change 
AUTO_AUDIO: process.env.AUTO_AUDIO || "false",
AUTO_BIO: process.env.AUTO_BIO || "false",
AUTO_BIO_QUOTE: process.env.AUTO_BIO_QUOTE || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ ᴘʀɪɴᴄᴇ ᴍᴅx ",
CHAT_BOT: process.env.CHAT_BOT || "false", // Put value to true to enablle for all chats only or inbox to ebanle in pm chats only or groups to enable in groups only else false
WELCOME: process.env.WELCOME || "false",
GOODBYE: process.env.GOODBYE || "false",    
AUTO_READ_MESSAGES: process.env.AUTO_READ_MESSAGES || "false", // Enter value to true for blueticking all messages, or commands for blueticking only commands else false
AUTO_BLOCK: process.env.AUTO_BLOCK || "333,799", // Add Multiple Country Codes Separated by Comma...
PRESENCE: process.env.PRESENCE || "online", // Choose one: typing, recording, online, null
TIME_ZONE: process.env.TIME_ZONE || "Africa/Douala", // Enter yours else leave blank if not sure
};

let file = require.resolve(__filename); 
fs.watchFile(file, () => { fs.unwatchFile(file); console.log(`Update '${__filename}'`); delete require.cache[file]; require(file); });
// That's All...
