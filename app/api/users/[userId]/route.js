import User from "@models/User";
import { connectToDB } from "@mongodb";
import { Chat } from "@mui/icons-material";

export const GET = async (req, { params }) => {
  try {
    await connectToDB();
    const { userId } = params;
    const allChats = await Chat.find({ members: userId })
      .sort({
        lastMessageAt: -1,
      })
      .populate({ path: "members", model: User })
      .exec();
  } catch (e) {
    console.log(e);
    return new Response("Failed to get all chats of current user", {
      status: 500,
    });
  }
};
