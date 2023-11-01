const { MessageEmbed } = require('discord.js');
const db = require('quick.db');

module.exports = {
  name: "badge",
  aliases: ["badges", "bg", "b", "pr", "profile"],
  description: "shows badges",
  run: async (client, message, args) => {
    
    let cache = []
    const user = client.users.cache.get(args[0]) || message.mentions.members.first() || message.author;
    const ID = user.id;
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
    const flags = {
  DISCORD_EMPLOYEE: "<:Discord_Staff:1013348258082471937> Discord Staff",
  DISCORD_PARTNER: "<:Discord_Partner:1013346792542314516> Discord Partner",
  BUGHUNTER_LEVEL_1: "<:Bug_Hunterlvl1:1013346970515017778> Bug Hunter Lvl 1",
  BUGHUNTER_LEVEL_2: "<:Bug_Hunterlvl2:1013346881130201178> Bug Hunter Lvl 2",
  HYPESQUAD_EVENTS: "<:HypeSquad:1013347042975830077> HypeSquad Events Member",
  HOUSE_BRAVERY: "<:HypeSquad_Bravery:1013347700395221122> House Bravery Member",
  HOUSE_BRILLIANCE: "<:HypeSquad_Brilliance:1013347826354364496> House Brilliance Member",
  HOUSE_BALANCE: "<:HypeSquad_Balance:1013347178791583834> House Balance Member",
  EARLY_SUPPORTER: "<:Discord_Early_Supporter:1013347105185746944> Discord Early Supporter",
  SYSTEM: "<a:Valid_Code_Developer:1006614554941337612> Discord System",
  VERIFIED_BOT:
    "<:verifiedbot1:974687683299393586><:verifiedbot2:974687670729072640> Verified Bot",
  VERIFIED_DEVELOPER: "<a:Valid_Code_Developer:1006614554941337612> Verified Bot Developer",
  NITRO: "<:nitro:1013354975289692231>",
  BOOSTER_1: "<:boosting_1:1013353952454127696> Booster 1",
  BOOSTER_2: "<:boosting_2:1013353948918325298> Booster 2",
  BOOSTER_3: "<:boosting_3:1013353944610770954> Booster 3",
  BOOSTER_4: "<:boosting_4:1013353941058191410> Booster 4",
  BOOSTER_5: "<:boosting_5:1013353937375604746> Booster 5",
  BOOSTER_6: "<:boosting_6:1013353934334722119> Booster 6",
  BOOSTER_7: "<:boosting_7:1013353931008638986> Booster 7",
  BOOSTER_8: "<:boosting_8:1013353927489626152> Booster 8",
  BOOSTER_9: "<:boosting_9:1013353920338337832> Booster 9",
};
    
          if(owner){
            cache.push(`<:Bahubali:1014858162387566662>ㆍ**Owner**`)
          }
          
          if(dev){
            cache.push(`<:botdev:1012366569730474075>ㆍ**Developer**`)
          }
          
          if(admin){
            cache.push(`<a:ET_version:1008356611808575568>ㆍ**Admin**`)
          }
      
          if(staff){
            cache.push(`<:ET_staff:1014136191878180917>ㆍ**Staff**`)
          }
          
          if(partner){
            cache.push(`<:ET_PartneredServer:1015922222197637170>ㆍ**Partner**`)
          }
      
          if(supporter){
            cache.push(`<:Discord_Early_Supporter:1013347105185746944>ㆍ**Bot's Early Supporter**`)
          }
      
          if(sponsor){
            cache.push(`<a:ET_Sponsor:1008363513749708991>ㆍ**Sponsor**`)
          }
      
          if(os){
            cache.push(`<:OwnerSpecial:1006274337197789218>ㆍ**Owner's Special**`)
          }
      
          if(vip){
            cache.push(`<:ET_vip:1014863106897354852>ㆍ**VIP**`)
          }
      
          if(friend){
            cache.push(`<:ET_friends:1014862965004062732>ㆍ**Friend**`)
          }
      
          if(bug){
            cache.push(`<:Bug_Hunterlvl2:1013346881130201178>ㆍ**Bug Hunter**`)
          }
          
          if (cache.length === 0){
              cache.push(`No Badges :(`, `Don't worry [Click Here](https://discord.gg/xu8ME4sqPH) to buy Bot's Premium and get some Badges :)`)
          }
    
        const embed = new MessageEmbed()
        .setColor(0x2F3136)
        .setThumbnail(user.displayAvatarURL({ dynamic: true }))
        .setAuthor({ name: `${user.tag}`, iconURL: `${user.displayAvatarURL({ dynamic: true })}`})
        .addFields({ name: '__*Badges*__', value: `${cache.join("\n")}`})
        return message.channel.send({embeds:[embed]})
  }
}