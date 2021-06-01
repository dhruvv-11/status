const RPC = require('discord-rpc')
const rpc = new RPC.Client({
    transport: 'ipc'
})

rpc.on("ready", () => {
    rpc.setActivity({
        details: "Making Thumbnails for PowerPoint :)", 
        state: "Currently in Photoshop🤦‍♂️", 
        startTimestamp: new Date(), 
        largeImageKey: "large", 
        largeImageText: "Making Custom Templates and Photoshop",
        smallImageKey: "small", 
        smallImageText: "-D H R U V",
        buttons: [{label : "Discord Link <3", url : "https://discord.gg/Z6vXdaBXJn"}]
    })

    console.log("STATUS_MARK-1 SUCCESSFUL")
})

rpc.login({
    clientId: '849349996607307796'
})