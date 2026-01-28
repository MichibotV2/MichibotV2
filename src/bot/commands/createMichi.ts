import { ChatInputCommandInteraction } from "discord.js";
import { editReply, reply } from "../../helpers/voiceChannelHelper";
import User from "../../models/User";
export const createMichi = async (interaction: ChatInputCommandInteraction) => {
  await reply(interaction, "Generating michi...", true);
  const userId = interaction.user.id;

  // Find or create the user
  const [user, created] = await User.findOrCreate({
    where: { id: userId },
    defaults: { michiName: "DefaultMichi" },
  });

  if (created) {
    await editReply(
      interaction,
      `Welcome, ${interaction.user.username}! Your Michi has been created.`,
      true,
    );
  }

  // Display user profile
  await editReply(
    interaction,
    `Michi Name: ${user.michiName}\nCurrency: ${user.currency}\nLevel: ${user.level}`,
    true,
  );
};
