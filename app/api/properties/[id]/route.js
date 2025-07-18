import connectDB from '@/config/database';
import Property from '@/models/Property';

export const GET = async (res, { params }) => {
  try {
    await connectDB();
    const property = await Property.findById(params.id);
    if (!property) {
      return new Response(JSON.stringify({ error: 'Property not found' }), {
        status: 404,
      });
    }
    return new Response(property, { status: 200 });
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Failed to fetch properties' }),
      { status: 500 }
    );
  }
};
