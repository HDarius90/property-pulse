import PropertyCard from '@/components/PropertyCard';
import connectDB from '@/config/database';
import Property from '@/models/Property';
import User from '@/models/User';
import { getSessionUser } from '@/utils/getSessionUser';

const SavedPropertyPage = async () => {
  const { userId } = await getSessionUser();

  const { bookmarks } = await User.findById(userId).populate('bookmarks');

  return (
    <section className="container lg:container m-auto px-4 py-6">
      <h1 className="text-2l mb-4">Saved Properties</h1>
      {bookmarks.length === 0 ? (
        <p className="text-center text-gray-500">No saved properties found</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {bookmarks.map((property) => (
            <PropertyCard key={property._id} property={property} />
          ))}
        </div>
      )}
    </section>
  );
};

export default SavedPropertyPage;
