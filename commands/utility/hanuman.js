const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
  name: 'hanuman',
  run: async (client, message, args) => {
      
      const user = message.author;
      const list = args[0];
      
    const pag = new MessageActionRow().addComponents(
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol1`).setLabel(`≪`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol2`).setLabel(`Back`),
            new MessageButton().setStyle(`DANGER`).setCustomId(`lol3`).setEmoji(`1003992348205777036`),
            new MessageButton().setStyle(`SUCCESS`).setCustomId(`lol4`).setLabel(`Next`),
            new MessageButton().setStyle(`PRIMARY`).setCustomId(`lol5`).setLabel(`≫`)
        );
      
      const embed1 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`दोहा :

श्रीगुरु चरन सरोज रज निज मनु मुकुरु सुधारि।
बरनउँ रघुबर बिमल जसु जो दायकु फल चारि ॥

बुद्धिहीन तनु जानिके, सुमिरौं पवन कुमार |
बल बुधि विद्या देहु मोहि हरहु कलेश विकार ||`)
      .setFooter(`${client.user.username} • Page 1/10`)
      
      const embed2 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`चौपाई :

जय हनुमान ज्ञान गुन सागर
जय कपीस तिहुँ लोक उजागर॥१॥

राम दूत अतुलित बल धामा
अंजनि पुत्र पवनसुत नामा॥२॥

महाबीर बिक्रम बजरंगी
कुमति निवार सुमति के संगी॥३॥

कंचन बरन बिराज सुबेसा
कानन कुंडल कुँचित केसा॥४॥

हाथ बज्र अरु ध्वजा बिराजे
काँधे मूँज जनेऊ साजे॥५॥`)
      .setFooter(`${client.user.username} • Page 2/10`)
      
      const embed3 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`शंकर सुवन केसरी नंदन
तेज प्रताप महा जगवंदन॥६॥

विद्यावान गुनी अति चातुर
राम काज करिबे को आतुर॥७॥

प्रभु चरित्र सुनिबे को रसिया
राम लखन सीता मनबसिया॥८॥

सूक्ष्म रूप धरि सियहि दिखावा
विकट रूप धरि लंक जरावा॥९॥

भीम रूप धरि असुर सँहारे
रामचंद्र के काज सवाँरे॥१०॥`)
      .setFooter(`${client.user.username} • Page 3/10`)
      
      const embed4 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`लाय सजीवन लखन जियाए
श्री रघुबीर हरषि उर लाए॥११॥

रघुपति कीन्ही बहुत बड़ाई
तुम मम प्रिय भरत-हि सम भाई॥१२॥

सहस बदन तुम्हरो जस गावै
अस कहि श्रीपति कंठ लगावै॥१३॥

सनकादिक ब्रह्मादि मुनीसा
नारद सारद सहित अहीसा॥१४॥

जम कुबेर दिगपाल जहाँ ते
कवि कोविद कहि सके कहाँ ते॥१५॥`)
      .setFooter(`${client.user.username} • Page 4/10`)
      
      const embed5 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`तुम उपकार सुग्रीवहि कीन्हा
राम मिलाय राज पद दीन्हा॥१६॥

तुम्हरो मंत्र बिभीषण माना
लंकेश्वर भये सब जग जाना॥१७॥

जुग सहस्त्र जोजन पर भानू
लिल्यो ताहि मधुर फ़ल जानू॥१८॥

प्रभु मुद्रिका मेलि मुख माही
जलधि लाँघि गए अचरज नाही॥१९॥

दुर्गम काज जगत के जेते
सुगम अनुग्रह तुम्हरे तेते॥२०॥`)
      .setFooter(`${client.user.username} • Page 5/10`)
      
      const embed6 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`राम दुआरे तुम रखवारे
होत ना आज्ञा बिनु पैसारे॥२१॥

सब सुख लहैं तुम्हारी सरना
तुम रक्षक काहु को डरना॥२२॥

आपन तेज सम्हारो आपै
तीनों लोक हाँक तै कापै॥२३॥

भूत पिशाच निकट नहि आवै
महावीर जब नाम सुनावै॥२४॥

नासै रोग हरे सब पीरा
जपत निरंतर हनुमत बीरा॥२५॥`)
      .setFooter(`${client.user.username} • Page 6/10`)
      
      const embed7 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`संकट तै हनुमान छुडावै
मन क्रम वचन ध्यान जो लावै॥२६॥

सब पर राम तपस्वी राजा
तिनके काज सकल तुम साजा॥२७॥

और मनोरथ जो कोई लावै
सोई अमित जीवन फल पावै॥२८॥

चारों जुग परताप तुम्हारा
है परसिद्ध जगत उजियारा॥२९॥

साधु संत के तुम रखवारे
असुर निकंदन राम दुलारे॥३०॥`)
      .setFooter(`${client.user.username} • Page 7/10`)
      
      const embed8 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`अष्ट सिद्धि नौ निधि के दाता
अस बर दीन जानकी माता॥३१॥

राम रसायन तुम्हरे पासा
सदा रहो रघुपति के दासा॥३२॥

तुम्हरे भजन राम को पावै
जनम जनम के दुख बिसरावै॥३३॥

अंतकाल रघुवरपुर जाई
जहाँ जन्म हरिभक्त कहाई॥३४॥

और देवता चित्त ना धरई
हनुमत सेई सर्व सुख करई॥३५॥`)
      .setFooter(`${client.user.username} • Page 8/10`)
      
      const embed9 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`संकट कटै मिटै सब पीरा
जो सुमिरै हनुमत बलबीरा॥३६॥

जै जै जै हनुमान गुसाईँ
कृपा करहु गुरु देव की नाई॥३७॥

जो सत बार पाठ कर कोई
छूटहि बंदि महा सुख होई॥३८॥

जो यह पढ़े हनुमान चालीसा
होय सिद्ध साखी गौरीसा॥३९॥

तुलसीदास सदा हरि चेरा
कीजै नाथ हृदय मह डेरा॥४०॥`)
      .setFooter(`${client.user.username} • Page9 /10`)
      
      const embed10 = new MessageEmbed()
      .setColor('2f3136')
      .setAuthor(client.user.username, client.user.displayAvatarURL())
      .setDescription(`दोहा :
 
पवन तनय संकट हरन, मंगल मूरति रूप।
राम लखन सीता सहित, हृदय बसहु सुर भूप॥`)
      .setFooter(`${client.user.username} • Page 10/10`)
      
      if (list === `chalisa`) {
      let msg = await message.channel.send({embeds : [embed1] , components : [pag]});
        let page = 0;
    
        let embeds = [];
    
    embeds.push(embed1);
    embeds.push(embed2);
    embeds.push(embed3);
    embeds.push(embed4);
    embeds.push(embed5);
    embeds.push(embed6);
    embeds.push(embed7);
    embeds.push(embed8);
    embeds.push(embed9);
    embeds.push(embed10);
      
      const collector = await msg.createMessageComponentCollector({
            filter :(interaction) => {
                if (message.author.id === interaction.user.id) return true;
              else {
      return interaction.reply({content : `<a:ET_cross:1003992348205777036> | This Pagination is not for you.` , ephemeral : true})
        }
            },
            time : 400000,
            idle : 600000/2
        });

        collector.on('collect', async(interaction) => {
             if (interaction.isButton()) {
                if(interaction.customId === `lol4`) {
                    page = page + 1 < embeds.length ? ++page : 0;
                    return interaction.update({embeds : [embeds[page]]});
                } 
              if (interaction.customId === `lol5`) {
                    return interaction.update({embeds : [embed10]});
                }
              if(interaction.customId === `lol3`) {
                    return msg.delete()
                }
              if(interaction.customId === `lol2`) {
                    page = page > 0 ? --page : embeds.length - 1;
                    return interaction.update({embeds : [embeds[page]]});
                }
              if(interaction.customId === `lol1`) {
                    return interaction.update({embeds : [embed1]})
                }
            }
        });
        collector.on('end', async() => {
            msg.edit({embeds : [embed1] , components : [] })
         });
      }
   }
}