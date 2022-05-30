//do install the following packages. npm i discord.js and npm i discord-rpc
// in your discord api portal go to rich presence then upload a image of size of 512 x 512. now rename the following image as large or small. if you renamed one of the image large 
//then the large image size would be big in your status and if u have renamed your image to small then in your status the image would be in small size. 
// you can edit the details, state, the discord buttons, the large image key text and the small image key tet. 
//if any problem you can create an issuse or you can contact me on Discord - Seacold#3599. my server link - https://discord.gg/SUGX54SZKx
//hope it helps
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
        smallImageText: "Dhruvvv",
        buttons: [{label : "Discord Link <3", url : "https://discord.gg/Z6vXdaBXJn"}]
    })

    console.log("STATUS SUCCESSFULL")
})

rpc.login({
    clientId: 'YOUR-CLIENT-ID. DONT REMOVE THE COMMAS'
})
