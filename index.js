var login = require("facebook-chat-api");
 
var answeredThreads = {};
 
// Create simple echo bot
login({email: "thue.baibo.9", password: "1621997"}, function callback (err, api) {
    if(err) return console.error(err);
 
    api.listen(function callback(err, message) {
        console.log(message.threadID);
        if(!answeredThreads.hasOwnProperty(message.threadID)){
            answeredThreads[message.threadID] = true;
            api.sendMessage("Hiện tại HƯNG không có mặt ở FACEBOOK, hãy để lại tin nhắn ở đây, HƯNG sẽ trả lời ngay khi có thể! Bye "+ ret[prop].name + ", message.threadID);
        }
    });
});
console.log('Server running at http://127.0.0.1:2000/');