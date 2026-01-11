import axios from "axios";
import { useEffect, useState } from "react";

interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

interface Props {
  propertyId: string;
}

export default function ReviewSection({ propertyId }: Props) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(
          `/api/properties/${propertyId}/reviews`
        );
        setReviews(response.data);
      } catch (err) {
        console.error("Error fetching reviews:", err);
        setError("Failed to load reviews");
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) {
    return <p className="mt-4">Loading reviews...</p>;
  }

  if (error) {
    return <p className="mt-4 text-red-500">{error}</p>;
  }

  if (reviews.length === 0) {
    return <p className="mt-4">No reviews yet.</p>;
  }

  return (
    <div className="mt-6 space-y-4">
      <h2 className="text-xl font-semibold">Reviews</h2>

      {reviews.map((review) => (
        <div
          key={review.id}
          className="border rounded-lg p-4 shadow-sm"
        >
          <p className="font-medium">{review.author}</p>
          <p className="text-sm text-gray-500">
            Rating: {review.rating} / 5
          </p>
          <p className="mt-2">{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
