'use server';
import cloudinary from '@/config/cloudinary';
import Property from '@/models/Property';
import { getSessionUser } from '@/utils/getSessionUser';
import { revalidatePath } from 'next/cache';

async function deleteProperty(propertyId) {
  const sessionUser = await getSessionUser();

  if (!sessionUser || !sessionUser.userId) {
    throw new Error('User ID is required');
  }

  const { userId } = sessionUser;

  const property = await Property.findById(propertyId);

  if (!property) {
    throw new Error('Property not found');
  }

  // Verify ownership
  if (property.owner.toString() !== userId) {
    throw new Error('Unauthorized');
  }

  // Extract public ID from Image urls
  const publicIds = property.images.map((imageUrl) => {
    const parts = imageUrl.split('/');
    return parts.at(-1).split('.').at(0);
  });

  // Delete images from cloudinary
  if (publicIds.length > 0) {
    for (let publicId of publicIds) {
      await cloudinary.uploader.destroy('propertypulse/' + publicId);
    }
  }

  await property.deleteOne();

  revalidatePath('/', 'layout');
}

export default deleteProperty;
