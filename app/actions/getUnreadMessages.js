'use server';
import connectDB from '@/config/database';
import Message from '@/models/Message';
import { getSessionUser } from '@/utils/getSessionUser';

async function getUnreadMessages() {
  await connectDB();

  const sessionUser = await getSessionUser();

  if (!sessionUser && !sessionUser.userId) {
    throw new Error('User ID is required');
  }

  const { userId } = sessionUser;

  const count = await Message.countDocuments({
    recipient: userId,
    read: false,
  });

  return { count };
}

export default getUnreadMessages;
