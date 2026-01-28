import { ChatInputCommandInteraction, GuildMember } from "discord.js";

export const userIsInVoiceChannel = async (
  interaction: ChatInputCommandInteraction,
) => {
  return Boolean((interaction?.member as GuildMember)?.voice.channel);
};

export const replyNotInChannel = async (
  interaction: ChatInputCommandInteraction,
) => {
  const userInChannnel = userIsInVoiceChannel(interaction);
  if (!userInChannnel) {
    await interaction.reply(
      "You need to be in a voice channel to use this command!",
    );
  }
  return userInChannnel;
};

export const reply = async (
  interaction: ChatInputCommandInteraction,
  message: string,
  ephemeral: boolean = false,
) => {
  try {
    await interaction.reply({
      content: message,
      ephemeral: ephemeral,
    });
  } catch (error) {
    console.error(error);
  }
};

export const editReply = async (
  interaction: any,
  message: string,
  ephemeral: boolean = false,
) => {
  try {
    await interaction.editReply({
      content: message,
      ephemeral: ephemeral,
    });
  } catch (error) {
    console.error(error);
  }
};
