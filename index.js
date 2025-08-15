import 'dotenv/config';
import { ChannelType, Client, GatewayIntentBits, PermissionFlagsBits } from 'discord.js';

const client = new Client({ intents: [GatewayIntentBits.Guilds] });

async function ensureCategory(guild, name) {
  let cat = guild.channels.cache.find(c => c.type === ChannelType.GuildCategory && c.name === name);
  if (!cat) cat = await guild.channels.create({ name, type: ChannelType.GuildCategory });
  return cat;
}

async function ensureText(guild, name, parent) {
  let ch = guild.channels.cache.find(c => c.type === ChannelType.GuildText && c.name === name && c.parentId === parent.id);
  if (!ch) ch = await guild.channels.create({ name, type: ChannelType.GuildText, parent: parent.id });
  return ch;
}

async function ensureVoice(guild, name, parent) {
  let ch = guild.channels.cache.find(c => c.type === ChannelType.GuildVoice && c.name === name && c.parentId === parent.id);
  if (!ch) ch = await guild.channels.create({ name, type: ChannelType.GuildVoice, parent: parent.id });
  return ch;
}

async function createStructure(guild) {
  const info    = await ensureCategory(guild, '📢 Info & Regeln');
  const allg    = await ensureCategory(guild, '💬 Allgemein');
  const search  = await ensureCategory(guild, '🎮 Teammate-Suche');
  const voice   = await ensureCategory(guild, '🔊 Voice');
  const events  = await ensureCategory(guild, '🏆 Events');

  await ensureText(guild, '📜│regeln', info);
  await ensureText(guild, '📢│ankündigungen', info);
  await ensureText(guild, '🎯│willkommen', info);

  await ensureText(guild, '💬│chat', allg);
  await ensureText(guild, '🏀│nba2k-news', allg);
  await ensureText(guild, '📸│build-galerie', allg);
  await ensureText(guild, '❓│hilfe-fragen', allg);

  await ensureText(guild, '🎮│ps5-suche', search);
  await ensureText(guild, '🎮│xbox-suche', search);
  await ensureText(guild, '🎮│pc-suche', search);
  await ensureText(guild, '🏆│pro-am-suche', search);
  await ensureText(guild, '🏟│rec-park-suche', search);

  await ensureVoice(guild, '🎙│Lobby', voice);
  await ensureVoice(guild, '🎙│Rec Match', voice);
  await ensureVoice(guild, '🎙│Pro-Am Match', voice);

  await ensureText(guild, '📅│turniere', events);
  await ensureText(guild, '🎥│highlight-clips', events);
}

client.once('ready', () => console.log(`Eingeloggt als ${client.user.tag}`));

client.on('interactionCreate', async (i) => {
  if (!i.isChatInputCommand()) return;
  if (i.commandName !== 'setup2k') return;

  const me = await i.guild.members.fetchMe();
  if (!me.permissions.has(PermissionFlagsBits.ManageChannels)) {
    await i.reply({ content: 'Ich brauche **Manage Channels** Rechte.', ephemeral: true });
    return;
  }

  await i.reply({ content: 'Erstelle/aktualisiere Struktur…', ephemeral: true });
  await createStructure(i.guild);
  await i.followUp({ content: '✅ Struktur ist bereit!', ephemeral: true });
});

client.login(process.env.DISCORD_TOKEN);