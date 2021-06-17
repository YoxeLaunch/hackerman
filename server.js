const http = require('http');
const express = require('express');
const app = express();


//
app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);



const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

client.on('ready', () => {
    setInterval(async ()=>{
      
        let textList = ['YoxeLaunch en Youtube','Love Foxfell','h/rep para Reportes','Tu Facebook','Nuevo Video En YoxeLaunch', '24/7 En Discord ']
        var text = textList[Math.floor(Math.random() * textList.length)];
        client.user.setActivity(text , { type: 'WATCHING' }) //'PLAYING''WATCHING''LISTENING''STREAMING'
    },5000) // milliseconds
});


client.on("guildCreate", guild => {

  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // This event will run on every single message received, from any channel or DM.
  
  // It's good practice to ignore other bots. This also makes your bot ignore itself
  // and not get into a spam loop (we call that "botception").
    
  
  
  
  
  if (message.content === 'hola') {
	message.react('😄');
}
  
  if (message.content === 'lol') {
	message.react('👀');
	message.react('🙃');
	message.react('😮');
}
  
 let words = ["puto", "puta", "putitos", "coño", "putes", "putito", "coña"] 

//Esto buscara las palabras en un array creado con el mensaje
if(words.some(p => message.content.toLowerCase().split(' ').includes(p.toLowerCase()))) { 


// Esto eliminara el mensaje que contega la palabra censurada
await message.delete();


//Esto enviara un mensaje avisando al usuario que no utilize mas la palabra
await message.channel.send(`<@${message.author.id}> :upside_down: | **Cuida tu lenguaje **`);

}
  
  if(message.author.bot) return;
  
  // Also good practice to ignore any message that does not start with our prefix, 
  // which is set in the configuration file.
  if(message.content.indexOf(config.prefix) !== 0) return;
  
  // Here we separate our "command" name, and our "arguments" for the command. 
  // e.g. if we have the message "+say Is this the real life?" , we'll get the following:
  // command = say
  // args = ["Is", "this", "the", "real", "life?"]
   
  
  
  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase()
  
  
client.on("error", (e) => console.error(e));
client.on("warn", (e) => console.warn(e));
client.on("debug", (e) => console.info(e));

  
  let prefix = config.prefix;
    
    if(command === '8ball'){
    var rpts = ["Sí", "No", "¿Por qué?", "Por favor", "Tal vez", "No sé", "Definitivamente?", " ¡Claro! "," Sí "," No "," Por supuesto! "," Por supuesto que no "];
    if (!args) return message.reply(`Escriba una pregunta.`);
    message.channel.send(message.member.user+' Mi respuesta es: `'+ rpts[Math.floor(Math.random() * rpts.length)]+'`');

  }  
  
   if(command === "ping") {
    // Calculates ping between sending a message and editing it, giving a nice round-trip latency.
    // The second ping is an average latency between the bot and the websocket server (one-way, not round-trip)
    const m = await message.channel.send("Ping?");
    m.edit(`Pong! Tu Latencia: ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
  }
  
  if(command === "ch") {
  if (!args) return message.reply(`Escriba el mensaje a enviar.`);
   message.delete("message")   
client.channels.get('590558406570541088').send(args.join(" "));
    
  }   
    
  
  if(command === "giox") {
  if (!args) return message.reply(`Escriba el mensaje a enviar.`);
   message.delete("message")  
client.channels.get('591384231087964162').send(args.join(" "));
    
  }   
  
  

  
   if(command === "say") {      
  if(!args) return message.channel.send(`debe escribir un mensaje a enviar.`);
message.delete("message")     
message.channel.send(args.join(" "));     
  } 
  
  if(command === "dm"){          
    let dUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if (!dUser) return message.channel.send("Can't find user!")
    if(!message.member.hasPermission("ADMIN")) return message.reply("You can't you that command!")
    let dMessage = args.join(" ").slice(22);
    if(dMessage.length < 1) return message.reply('You must supply a message!')
message.delete("message")
    dUser.send(`${dMessage}`)

  } 
  
 if(command === 'info'){
   message.delete("message")
    message.channel.send({embed: {
      color: 720587,
      author: {
          name: client.user.username,
          icon_url: client.user.avatarURL
      },
      title: "**__Informacion Acerca De Hackerman__** :spy: ",
      description: "Hackerman es un asistente creado para este servidor",
      fields: [{
          name: "**__Alojamiento__**",
          value: "Glitch :fish: "
        },
        {
          name: "**__Capacidad__**",
          value: " 512MB RAM :zap: | 200MB Hard Disc :minidisc: | 24/7 By UpTimeRobot :alarm_clock: "
        },
        {
          name: "**__Funciones__**",
          value: "Diversion, Administracion"
        },
               
        {
          name: "**__Comandos__**",
          value: ":keyboard: Escribe h/comandos para ver mis comandos."
        }       
      ],
      timestamp: new Date(),
      footer: {
        icon_url: client.user.avatarURL,
        text: "Hackerman Version 2.1.6 by YoxeLaunch"
      }
    }  
 });
}

  
  if(command === 'comandos'){

    message.channel.send('**'+message.author.username+'**, Revisa tus mensajes privados.');
    message.author.send('**ESTOS SON MIS COMANDOS**\n```\n'+
                        '-> '+prefix+'ping           :: Comprueba la latencia del bot y de tus mensajes.\n'+
                        '-> '+prefix+'avatar <@user> :: Muestra el avatar de un usuario.\n'+
                        '-> '+prefix+'user <@user>   :: Muestra información sobre un usuario mencioando.\n'+
                        '-> '+prefix+'radio          :: Si estas en un canal de voz. pongo la radio\n'+
                        '-> '+prefix+'server         :: Muestra información de un servidor determinado.\n'+
                        '-> '+prefix+'8ball          :: El bot respondera a tus preguntas.\n'+  
                        '-> '+prefix+'rep            :: comando para reportes/preguntas/sugerencias, por privado.\n'+
                        '-> '+prefix+'kick <@user>   :: Patear a un usuario del servidor incluye razon.\n'+
                        '-> '+prefix+'hola           :: Retorna un saludo como mensaje.\n```\n\n'+
                        'Version de Hackerman 2.1.6');
    
  
  }  
  
  if(command === 'avatar'){

      let img = message.mentions.users.first()
      if (!img) {

          const embed = new Discord.RichEmbed()
          .setImage(`${message.author.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${message.author.username}#${message.author.discriminator}`);
          message.channel.send({ embed });

      } else if (img.avatarURL === null) {

          message.channel.sendMessage("El usuario ("+ img.username +") no tiene avatar!");

      } else {

          const embed = new Discord.RichEmbed()
          .setImage(`${img.avatarURL}`)
          .setColor(0x66b3ff)
          .setFooter(`Avatar de ${img.username}#${img.discriminator}`);
          message.channel.send({ embed });

      };

  }

  if(command === 'server'){

     var server = message.guild;
  
     const embed = new Discord.RichEmbed()
     .setThumbnail(server.iconURL)
     .setAuthor(server.name, server.iconURL)
     .addField('ID', server.id, true)
     .addField('Region', server.region, true)
     .addField('Creado el', server.joinedAt.toDateString(), true)
     .addField('Dueño del Servidor', server.owner.user.username+'#'+server.owner.user.discriminator+' ('+server.owner.user.id +')', true)
     .addField('Miembros', server.memberCount, true)
     .addField('Roles', server.roles.size, true)
     .setColor(0x66b3ff)
    
     message.channel.send({ embed });

   }
    
     if(command === 'user'){
    let userm = message.mentions.users.first()
    if(!userm){
      var user = message.author;
      
        const embed = new Discord.RichEmbed()
        .setThumbnail(user.avatarURL)
        .setAuthor(user.username+'#'+user.discriminator, user.avatarURL)
        .addField('Jugando a', user.presence.game != null ? user.presence.game.name : "Nada", true)
        .addField('ID', user.id, true)
        .addField('Estado', user.presence.status, true)
        .addField('Apodo', message.member.nickname, true)
        .addField('Cuenta Creada', user.createdAt.toDateString(), true)
        .addField('Fecha de Ingreso', message.member.joinedAt.toDateString())
        .addField('Roles', message.member.roles.map(roles => `\`${roles.name}\``).join(', '))
        .setColor(0x66b3ff)
        
       message.channel.send({ embed });
    }
      const embed = new Discord.RichEmbed()
      .setThumbnail(userm.avatarURL)
      .setAuthor(userm.username+'#'+userm.discriminator, userm.avatarURL)
      .addField('Jugando a', userm.presence.game != null ? userm.presence.game.name : "Nada", true)
      .addField('ID', userm.id, true)
      .addField('Estado', userm.presence.status, true)
      .addField('Cuenta Creada', userm.createdAt.toDateString(), true)
      .setColor(0x66b3ff)
      
     message.channel.send({ embed });
    }
    

    
    if (command === 'join') { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz || Canalvoz.type !== 'voice') {
    message.channel.send('¡Necesitas unirte a un canal de voz primero!.').catch(error => message.channel.send(error));
    } else if (message.guild.voiceConnection) {
    message.channel.send('Ya estoy conectado en un canal de voz.');
    } else {
     message.channel.send('Conectando...').then(m => {
          Canalvoz.join().then(() => {
               m.edit(':white_check_mark: | Conectado exitosamente.').catch(error => message.channel.send(error));
         }).catch(error => message.channel.send(error));
     }).catch(error => message.channel.send(error));
    }
}
  
  if (command === 'leave') { 
    let Canalvoz = message.member.voiceChannel;
    if (!Canalvoz) {
        message.channel.send('No estoy en un canal de voz.');
    } else {
        message.channel.send('Dejando el canal de voz.').then(() => {
        Canalvoz.leave();
        }).catch(error => message.channel.send(error));
    }   
}
  
  if (command === 'ytplay') {
    const ytdl = require('ytdl-core');
    
    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
    if(!args) return message.channel.send('Ingrese un enlace de youtube para poder reproducirlo.');
    voiceChannel.join()
      .then(connection => {
        const url = ytdl(args, { filter : 'audioonly' });
        const dispatcher = connection.playStream(url);
        message.channel.send('Reproduciendo ahora: '+ args);
        message.delete();
      })
      .catch(console.error);
  }
  


  if (command === 'radio') {
    let voiceChannel = message.member.voiceChannel;
    if(!voiceChannel) return message.channel.send('¡Necesitas unirte a un canal de voz primero!.');
        voiceChannel.join().then(conexion =>{
        conexion.playStream('http://20423.live.streamtheworld.com:3690/LOS40_SC');
        message.channel.send('Los 40 Radio Esta EN VIVO.')
        return;
      })
      .catch(console.error);
  }
    
   if(command === "clear") {
    // This command removes all messages from all users in the channel, up to 100.
    
    // get the delete count, as an actual number.
    const deleteCount = parseInt(args[0], 10);
    
    // Ooooh nice, combined conditions. <3
    if(!deleteCount || deleteCount < 2 || deleteCount > 1000)
      return message.reply("Please provide a number between 2 and 100 for the number of messages to delete");
    
    // So we get our messages, and delete them. Simple enough, right?
    const fetched = await message.channel.fetchMessages({limit: deleteCount});
    message.channel.bulkDelete(fetched)
      .catch(error => message.reply(`Couldn't delete messages because of: ${error}`));
  
   }
  
  if(command === 'rol'){
let texto = args.slice(0).join(' ');

let miembro = message.mentions.members.first();
    let nombrerol = args.slice(1).join(' ');

    let role = message.guild.roles.find("name", nombrerol);
    let perms = message.member.hasPermission("MANAGE_ROLES_OR_PERMISSIONS");

    if(!perms) return message.channel.send("`Error` `|` No tienes Permisos para usar este comando.");
     
    if(message.mentions.users.size < 1) return message.reply('Debe mencionar a un miembro.').catch(console.error);
    if(!nombrerol) return message.channel.send('Escriba el nombre del rol a agregar, `-addrol @username [rol]`');
    if(!role) return message.channel.send('Rol no encontrado en el servidor.');
    message.delete("message")
    miembro.addRole(role).catch(console.error);
    message.channel.send(`El rol **${role.name}** fue agregado correctamente a **${miembro.user.username}**.`);

}
  
  if(command === 'rep'){
  let channel = client.channels.get('590558406570541088'); 

 let reporte = args.join(' ');
 if(!reporte) return message.channel.send(`:grey_exclamation: | **Envia un reporte o dudas(Recomendable Por Privado)**`)
 
 const embed = new Discord.RichEmbed()
  .setTitle(':e_mail: | **Reporte**')
  .setDescription('`Tu reporte se ha enviado al buzón del bot.`')
  .setDescription(reporte)
  .setThumbnail(`https://media.discordapp.net/attachments/576980879226961935/577344574931075072/carta.gif`)
  .setColor(0x77AEFF)
  .setFooter('Reporte enviado por '+ message.author.username)

 channel.send(embed)
 message.channel.send(":white_check_mark: | **Reporte enviado**")
        
 message.channel.send(embed).then(m =>  m.react("\u2709"))
  }
  
  
  if(command === 'encuesta'){
  if(!args) return message.channel.send('Agrege una pregunta para la encuesta.')

const embed = new Discord.RichEmbed()
      .setAuthor('Pregunta:')
      .setDescription('**'+args.join(' ')+'**\n')
      .addField('Opcion 1', '1\u20e3 Si')
      .addField('Opcion 2', '2\u20e3 No')
      .setColor(0xff4d4d)
      .setTimestamp()

message.channel.send(embed)
.then(m => {
        m.react("1\u20e3");
        m.react("2\u20e3");

});
  
}  
  
  });  

client.login(process.env.TOKEN);