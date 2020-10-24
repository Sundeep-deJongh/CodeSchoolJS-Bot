<div align="center">
  <br />
  <p>
   <a href="https://code-school.nl"><img src="http://sundeep.nl/codeschool3.png" width="546" alt="CodeSchool" /></a>
  </p>
  <br />
  <p>
    <a href="https://discord.gg/Tg5k6vF"><img src="https://discord.com/api/guilds/768898592307937321/embed.png" alt="Discord server" /></a>
    <a href="https://github.io/Sundeep-deJongh"<img src="https://img.shields.io/github/followers/Sundeep-deJongh?style=social" alt="GitHub"</a>
    <a href="https://www.paypal.me/SundeepDonate"><img src="https://img.shields.io/badge/paypal.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/node-fetch/"><img src="https://nodei.co/npm/node-fetch.png"></a>
    <a href="https://nodei.co/npm/discord-giveaways/"><img src="https://nodei.co/npm/discord-giveaways.png?downloads=true&downloadRank=true&stars=true"></a>
    <a href="https://nodei.co/npm/nodemon/"><img src="https://nodei.co/npm/nodemon.png?downloads=true&downloadRank=true&stars=true"></a>
  </p>
</div>

## About
discord.js is a powerful [Node.js](https://nodejs.org) module that allows you to easily interact with the
[Discord API](https://discordapp.com/developers/docs/intro).

- Object-oriented
- Predictable abstractions
- Performant
- 100% coverage of the Discord API

## Installation
**Node.js 10.0.0 or newer is required.**  
Ignore any warnings about unmet peer dependencies, as they're all optional.

Without voice support: `npm install discordjs/discord.js`  
With voice support ([node-opus](https://www.npmjs.com/package/node-opus)): `npm install discordjs/discord.js node-opus`  
With voice support ([opusscript](https://www.npmjs.com/package/opusscript)): `npm install discordjs/discord.js opusscript`

### Audio engines
The preferred audio engine is node-opus, as it performs significantly better than opusscript. When both are available, discord.js will automatically choose node-opus.
Using opusscript is only recommended for development environments where node-opus is tough to get working.
For production bots, using node-opus should be considered a necessity, especially if they're going to be running on multiple servers.

### Optional packages
- [zlib-sync](https://www.npmjs.com/package/zlib-sync) for faster WebSocket data inflation (`npm install zlib-sync`)
- [zucc](https://www.npmjs.com/package/zucc) for significantly faster WebSocket data inflation (`npm install zucc`)
- [erlpack](https://github.com/discordapp/erlpack) for significantly faster WebSocket data (de)serialisation (`npm install discordapp/erlpack`)
- One of the following packages can be installed for faster voice packet encryption and decryption:
    - [sodium](https://www.npmjs.com/package/sodium) (`npm install sodium`)
    - [libsodium.js](https://www.npmjs.com/package/libsodium-wrappers) (`npm install libsodium-wrappers`)
- [uws](https://www.npmjs.com/package/@discordjs/uws) for a much faster WebSocket connection (`npm install @discordjs/uws`)
- [bufferutil](https://www.npmjs.com/package/bufferutil) for a much faster WebSocket connection when *not* using uws (`npm install bufferutil`)

## Example usage
```js
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('pong');
  }
});

client.login('token');
```

## Links
* [Website](https://discord.js.org/) ([source](https://github.com/discordjs/website))
* [Documentation](https://discord.js.org/#/docs/main/master/general/welcome)
* [Guide](https://discordjs.guide/) ([source](https://github.com/discordjs/guide)) - this is still for stable  
  See also the WIP [Update Guide](https://github.com/discordjs/guide/blob/v12-changes/guide/additional-info/changes-in-v12.md) also including updated and removed items in the library.
* [Discord.js Discord server](https://discord.gg/bRCvFy9)
* [Discord API Discord server](https://discord.gg/discord-api)
* [GitHub](https://github.com/discordjs/discord.js)
* [NPM](https://www.npmjs.com/package/discord.js)
* [Related libraries](https://discordapi.com/unofficial/libs.html)

### Extensions
* [RPC](https://www.npmjs.com/package/discord-rpc) ([source](https://github.com/discordjs/RPC))

## Contributing
Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
[documentation](https://discord.js.org/#/docs).  
See [the contribution guide](https://github.com/discordjs/discord.js/blob/master/.github/CONTRIBUTING.md) if you'd like to submit a PR.

## Help
If you don't understand something in the documentation, you are experiencing problems, or you just need a gentle
nudge in the right direction, please don't hesitate to join our official [Discord.js Server](https://discord.gg/bRCvFy9).
