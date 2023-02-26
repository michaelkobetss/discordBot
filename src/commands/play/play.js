const {
  createAudioPlayer,
  createAudioResource,
  joinVoiceChannel,
  NoSubscriberBehavior,
  AudioPlayerStatus,
} = require("@discordjs/voice");
const ytdl = require("ytdl-core");
const { OpusEncoder } = require("@discordjs/opus");

module.exports = async (int) => {
  const link = int.options.data[0].value;
  const voiceChannel = int.member.voice.channel;
  if (!voiceChannel) {
    return await int.reply(
      "You must be in a voice channel to use this command!"
    );
  }

  const connection = joinVoiceChannel({
    channelId: voiceChannel.id,
    guildId: voiceChannel.guild.id,
    adapterCreator: voiceChannel.guild.voiceAdapterCreator,
    selfDeaf: false,
  });

  const opusDecoder = new OpusEncoder(48000, 2); // Specify the sample rate and channel count

  const player = createAudioPlayer({
    behaviors: {
      noSubscriber: NoSubscriberBehavior.Play,
    },
  });

  const stream = ytdl(link, {
    filter: "audioonly",
    quality: "highestaudio",
    bitrate: 96,
    requestOptions: { timeout: 10000 },
  });

  const resource = createAudioResource(stream, {
    inputType: stream.contentType,
    inlineVolume: true,
    metadata: {
      encoder: "lavaplayer",
      opusDecoder: opusDecoder,
    },
  });

  player.on("ready", () => {
    console.log(`Audio player is ready to play`);
    player.play(resource);
  });

  player.play(resource);
  connection.subscribe(player);

  player.on("stateChange", (oldState, newState) => {
    console.log(
      `Audio player transitioned from ${oldState.status} to ${newState.status}.`
    );
  });

  player.on("error", (error) => {
    console.error(`Audio player error: ${error.message}.`);
  });

  player.on(AudioPlayerStatus.Idle, () => {
    connection.destroy;
  });

  connection.on("error", (error) => {
    console.error(`Voice connection error: ${error.message}.`);
  });

  console.log(`Playing audio from ${link}`);
  int.reply(`Playing audio from ${link}`);
};
