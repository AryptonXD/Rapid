const { MessageEmbed } = require("discord.js");
const { ownerIDS } = require('../../owner.json');

module.exports = {
  name: "bdg",
  run: async (client, message, args) => {
      
    const user = client.users.cache.get(args[1]) || message.mentions.members.first() || message.author;
    const ID = user.id
    
    if (ownerIDS.includes(message.author.id)) {
    const badge1 = [];
    const badge2 = [];
    const badge3 = [];
    const badge4 = [];
    const badge5 = [];
    const badge6 = [];
    const badge7 = [];
    const badge8 = [];
    const badge9 = [];
    const badge10 = [];
    const badge11 = [];
    const bbadge1 = [];
    const bbadge2 = [];
    const bbadge3 = [];
    const bbadge4 = [];
    const bbadge5 = [];
    const bbadge6 = [];
    const bbadge7 = [];
    const bbadge8 = [];
    const bbadge9 = [];
    const bbadge10 = [];
    const bbadge11 = [];
    const owner = await client.db2.get(`${ID}_owner`);
    const dev = await client.db2.get(`${ID}_dev`);
    const admin = await client.db2.get(`${ID}_admin`);
    const staff = await client.db2.get(`${ID}_staff`);
    const partner = await client.db2.get(`${ID}_partner`);
    const supporter = await client.db2.get(`${ID}_supporter`);
    const sponsor = await client.db2.get(`${ID}_sponsor`);
    const os = await client.db2.get(`${ID}_os`);
    const vip = await client.db2.get(`${ID}_vip`);
    const friend = await client.db2.get(`${ID}_friend`);
    const bug = await client.db2.get(`${ID}_bug`);
    const bowner = "<:Bahubali:1014858162387566662>";
    const bdev = "<:botdev:1012366569730474075>";
    const badmin = "<a:ET_version:1008356611808575568>";
    const bstaff = "<:ET_staff:1014136191878180917>";
    const bpartner = "<:ET_PartneredServer:1015922222197637170>";
    const bsupporter = "<:Discord_Early_Supporter:1013347105185746944>";
    const bsponsor = "<a:ET_Sponsor:1008363513749708991>";
    const bownerspecial = "<:OwnerSpecial:1006274337197789218>";
    const bvip = "<:ET_vip:1014863106897354852>";
    const bfriend = "<:ET_friends:1014862965004062732>";
    const bbug = "<:Bug_Hunterlvl2:1013346881130201178>";

      if (owner) {
        badge1.push(`${bowner}`)
      }

      if (dev) {
        badge2.push(`${bdev}`)
      }

      if (admin) {
        badge3.push(`${badmin}`)
      }

      if (staff) {
        badge4.push(`${bstaff}`)
      }

      if (partner) {
        badge5.push(`${bpartner}`)
      }

      if (supporter) {
        badge6.push(`${bsupporter}`)
      }

      if (sponsor) {
        badge7.push(`${bsponsor}`)
      }

      if (os) {
        badge8.push(`${bownerspecial}`)
      }

      if (vip) {
        badge9.push(`${bvip}`)
      }

      if (friend) {
        badge10.push(`${bfriend}`)
      }

      if (bug) {
        badge11.push(`${bbug}`)
      }

      if (!owner) {
        bbadge1.push(`${bowner}`)
      }

      if (!dev) {
        bbadge2.push(`${bdev}`)
      }

      if (!admin) {
        bbadge3.push(`${badmin}`)
      }

      if (!staff) {
        bbadge4.push(`${bstaff}`)
      }

      if (!partner) {
        bbadge5.push(`${bpartner}`)
      }

      if (!supporter) {
        bbadge6.push(`${bsupporter}`)
      }

      if (!sponsor) {
        bbadge7.push(`${bsponsor}`)
      }

      if (!os) {
        bbadge8.push(`${bownerspecial}`)
      }

      if (!vip) {
        bbadge9.push(`${bvip}`)
      }

      if (!friend) {
        bbadge10.push(`${bfriend}`)
      }

      if (!bug) {
        bbadge11.push(`${bbug}`)
      }

const havebadge1 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge1.join()} badge`);

const havebadge2 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge2.join()} badge`);

const havebadge3 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge3.join()} badge`);

const havebadge4 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge4.join()} badge`);

const havebadge5 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge5.join()} badge`);

const havebadge6 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge6.join()} badge`);

const havebadge7 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge7.join()} badge`);

const havebadge8 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge8.join()} badge`);

const havebadge9 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge9.join()} badge`);

const havebadge10 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge10.join()} badge`);

const havebadge11 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Already have ${badge11.join()} badge`);

const eowner = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bowner} badge to <@${ID}>`);

const edev = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bdev} badge to <@${ID}>`);
    
const eadmin = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${badmin} badge to <@${ID}>`);
    
const estaff = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bstaff} badge to <@${ID}>`);
    
const epartner = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bpartner} badge to <@${ID}>`);
    
const esupporter = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bsupporter} badge to <@${ID}>`);
    
const esponsor = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bsponsor} badge to <@${ID}>`);
    
const eos = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bownerspecial} badge to <@${ID}>`);
    
const evip = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bvip} badge to <@${ID}>`);
    
const efriend = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bfriend} badge to <@${ID}>`);
    
const ebug = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Added ${bbug} badge to <@${ID}>`);
    
const eall = new MessageEmbed()
.setColor("2f3136")
  .setDescription(`Added ${bowner} ${bdev} ${badmin} ${bstaff} ${bpartner} ${bsupporter} ${bsponsor} ${bownerspecial} ${bvip} ${bfriend} ${bbug} badges to <@${ID}>`)

//////////////////////////////////////////////////////////////////////////////////////////////////

const nhavebadge1 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge1.join()} badge`);

const nhavebadge2 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge2.join()} badge`);

const nhavebadge3 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge3.join()} badge`);

const nhavebadge4 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge4.join()} badge`);

const nhavebadge5 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge5.join()} badge`);

const nhavebadge6 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge6.join()} badge`);

const nhavebadge7 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge7.join()} badge`);

const nhavebadge8 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge8.join()} badge`);

const nhavebadge9 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge9.join()} badge`);

const nhavebadge10 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge10.join()} badge`);

const nhavebadge11 = new MessageEmbed()
.setColor("2f3136")
.setDescription(`<@${ID}> Not having ${bbadge11.join()} badge`);

const neowner = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bowner} badge from <@${ID}>`);

const nedev = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bdev} badge from <@${ID}>`);
    
const neadmin = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${badmin} badge from <@${ID}>`);
    
const nestaff = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bstaff} badge from <@${ID}>`);
    
const nepartner = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bpartner} badge from <@${ID}>`);
    
const nesupporter = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bsupporter} badge from <@${ID}>`);
    
const nesponsor = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bsponsor} badge from <@${ID}>`);
    
const neos = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bownerspecial} badge from <@${ID}>`);
    
const nevip = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bvip} badge from <@${ID}>`);
    
const nefriend = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bfriend} badge from <@${ID}>`);
    
const nebug = new MessageEmbed()
.setColor("2f3136")
.setDescription(`Removed ${bbug} badge from <@${ID}>`);
    
const neall = new MessageEmbed()
.setColor("2f3136")
  .setDescription(`Removed ${bowner} ${bdev} ${badmin} ${bstaff} ${bpartner} ${bsupporter} ${bsponsor} ${bownerspecial} ${bvip} ${bfriend} ${bbug} badges from <@${ID}>`)
     
        if (args[0] === "add" && args[2] === "owner") {
          if (owner) {
            return message.channel.send({ embeds: [havebadge1] })
          } else {
            await client.db2.set(`${ID}_owner`, true);
            return message.channel.send({ embeds: [eowner] })
          }
        } else if (args[0] === "add" && args[2] === "dev") {
          if (dev) {
            return message.channel.send({ embeds: [havebadge2] })
          } else {
            await client.db2.set(`${ID}_dev`, true);
            return message.channel.send({ embeds: [edev] })
          }
        } else if (args[0] === "add" && args[2] === "admin") {
          if (admin) {
            return message.channel.send({ embeds: [havebadge3] })
          } else {
            await client.db2.set(`${ID}_admin`, true);
            return message.channel.send({ embeds: [eadmin] })
          }
        } else if (args[0] === "add" && args[2] === "staff") {
          if (staff) {
            return message.channel.send({ embeds: [havebadge4] })
          } else {
            await client.db2.set(`${ID}_staff`, true);
            return message.channel.send({ embeds: [estaff] })
          }
        } else if (args[0] === "add" && args[2] === "partner") {
          if (partner) {
            return message.channel.send({ embeds: [havebadge5] })
          } else {
            await client.db2.set(`${ID}_partner`, true);
            return message.channel.send({ embeds: [epartner] })
          }
        } else if (args[0] === "add" && args[2] === "supporter") {
          if (supporter) {
            return message.channel.send({ embeds: [havebadge6] })
          } else {
            await client.db2.set(`${ID}_supporter`, true);
            return message.channel.send({ embeds: [esupporter] })
          }
        } else if (args[0] === "add" && args[2] === "sponsor") {
          if (sponsor) {
            return message.channel.send({ embeds: [havebadge7] })
          } else {
            await client.db2.set(`${ID}_sponsor`, true);
            return message.channel.send({ embeds: [esponsor] })
          }
        } else if (args[0] === "add" && args[2] === "os") {
          if (os) {
            return message.channel.send({ embeds: [havebadge8] })
          } else {
            await client.db2.set(`${ID}_os`, true);
            return message.channel.send({ embeds: [eos] })
          }
        } else if (args[0] === "add" && args[2] === "vip") {
          if (vip) {
            return message.channel.send({ embeds: [havebadge9] })
          } else {
            await client.db2.set(`${ID}_vip`, true);
            return message.channel.send({ embeds: [evip] })
          }
        } else if (args[0] === "add" && args[2] === "friend") {
          if (friend) {
            return message.channel.send({ embeds: [havebadge10] })
          } else {
            await client.db2.set(`${ID}_friend`, true);
            return message.channel.send({ embeds: [efriend] })
          }
        } else if (args[0] === "add" && args[2] === "bug") {
          if (bug) {
            return message.channel.send({ embeds: [havebadge11] })
          } else {
            await client.db2.set(`${ID}_bug`, true);
            return message.channel.send({ embeds: [ebug] })
          }
        } else if (args[0] === "add" && args[2] === "all") {
            await client.db2.set(`${ID}_owner`, true),
            await client.db2.set(`${ID}_dev`, true),
            await client.db2.set(`${ID}_admin`, true),
            await client.db2.set(`${ID}_staff`, true),
            await client.db2.set(`${ID}_partner`, true),
            await client.db2.set(`${ID}_supporter`, true),
            await client.db2.set(`${ID}_sponsor`, true),
            await client.db2.set(`${ID}_os`, true),
            await client.db2.set(`${ID}_vip`, true),
            await client.db2.set(`${ID}_friend`, true),
            await client.db2.set(`${ID}_bug`, true);
            return message.channel.send({ embeds: [eall] })
          
        } else if (args[0] === "remove" && args[2] === "owner") {
          if (!owner) {
            return message.channel.send({ embeds: [nhavebadge1] })
          } else {
            await client.db2.delete(`${ID}_owner`, true);
            return message.channel.send({ embeds: [neowner] })
          }
        } else if (args[0] === "remove" && args[2] === "dev") {
          if (!dev) {
            return message.channel.send({ embeds: [nhavebadge2] })
          } else {
            await client.db2.delete(`${ID}_dev`, true);
            return message.channel.send({ embeds: [nedev] })
          }
        } else if (args[0] === "remove" && args[2] === "admin") {
          if (!admin) {
            return message.channel.send({ embeds: [nhavebadge3] })
          } else {
            await client.db2.delete(`${ID}_admin`, true);
            return message.channel.send({ embeds: [neadmin] })
          }
        } else if (args[0] === "remove" && args[2] === "staff") {
          if (!staff) {
            return message.channel.send({ embeds: [nhavebadge4] })
          } else {
            await client.db2.delete(`${ID}_staff`, true);
            return message.channel.send({ embeds: [nestaff] })
          }
        } else if (args[0] === "remove" && args[2] === "partner") {
          if (!partner) {
            return message.channel.send({ embeds: [nhavebadge5] })
          } else {
            await client.db2.delete(`${ID}_partner`, true);
            return message.channel.send({ embeds: [nepartner] })
          }
        } else if (args[0] === "remove" && args[2] === "supporter") {
          if (!supporter) {
            return message.channel.send({ embeds: [nhavebadge6] })
          } else {
            await client.db2.delete(`${ID}_supporter`, true);
            return message.channel.send({ embeds: [nesupporter] })
          }
        } else if (args[0] === "remove" && args[2] === "sponsor") {
          if (!sponsor) {
            return message.channel.send({ embeds: [nhavebadge7] })
          } else {
            await client.db2.delete(`${ID}_sponsor`, true);
            return message.channel.send({ embeds: [nesponsor] })
          }
        } else if (args[0] === "remove" && args[2] === "os") {
          if (!os) {
            return message.channel.send({ embeds: [nhavebadge8] })
          } else {
            await client.db2.delete(`${ID}_os`, true);
            return message.channel.send({ embeds: [neos] })
          }
        } else if (args[0] === "remove" && args[2] === "vip") {
          if (!vip) {
            return message.channel.send({ embeds: [nhavebadge9] })
          } else {
            await client.db2.delete(`${ID}_vip`, true);
            return message.channel.send({ embeds: [nevip] })
          }
        } else if (args[0] === "remove" && args[2] === "friend") {
          if (!friend) {
            return message.channel.send({ embeds: [nhavebadge10] })
          } else {
            await client.db2.delete(`${ID}_friend`, true);
            return message.channel.send({ embeds: [nefriend] })
          }
        } else if (args[0] === "remove" && args[2] === "bug") {
          if (!bug) {
            return message.channel.send({ embeds: [nhavebadge11] })
          } else {
            await client.db2.delete(`${ID}_bug`, true);
            return message.channel.send({ embeds: [nebug] })
          }
        } else if (args[0] === "remove" && args[2] === "all") {
            await client.db2.delete(`${ID}_owner`, true),
            await client.db2.delete(`${ID}_dev`, true),
            await client.db2.delete(`${ID}_admin`, true),
            await client.db2.delete(`${ID}_staff`, true),
            await client.db2.delete(`${ID}_partner`, true),
            await client.db2.delete(`${ID}_supporter`, true),
            await client.db2.delete(`${ID}_sponsor`, true),
            await client.db2.delete(`${ID}_os`, true),
            await client.db2.delete(`${ID}_vip`, true),
            await client.db2.delete(`${ID}_friend`, true),
            await client.db2.delete(`${ID}_bug`, true);
            return message.channel.send({ embeds: [neall] })
          }
    }
  }
}