'use client';
import bookmarkProperty from '@/app/actions/bookmarkProperty';
import { useSession } from 'next-auth/react';
import { FaBookmark } from 'react-icons/fa';
import { toast } from 'react-toastify';

const BookmarkButton = ({ property }) => {
  const { data: session } = useSession();
  const userId = session?.user?.id;
  const handleClick = async () => {
    if (!userId) {
      toast.error('Please sign in to bookmark a property');
      return;
    }

    bookmarkProperty(property._id).then((res) => {
      if (res.error) return toast.error(res.error);
      toast.success(res.message);
    });
  };

  return (
    <button
      className="bg-blue-500 hover:bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-full flex items-center justify-center"
      onClick={handleClick}
    >
      <FaBookmark className="mr-2"></FaBookmark> Bookmark Property
    </button>
  );
};

export default BookmarkButton;
