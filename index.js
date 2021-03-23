const RPC = require("discord-rpc");
const rpc = new RPC.Client({
    transport: "ipc"
});
rpc.on('ready', () => {
    rpc.setActivity({
        details: "Text at the top",
        state: "Text on bottom",
        startTimestap: new Date(),
        largeImageKey: "Large image name",
        largeImageText: "Large image text",
        smallImageKey: "Small image name",
        smallImageText: "Small image text"
    });

    console.log("Wystartowano status gry na discord!");
});

rpc.login({
    clientId: "Your application ID"
});