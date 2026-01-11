interface Property {
  id: string;
  title: string;
  description: string;
  location: string;
  price: number;
  image: string;
}

interface Props {
  property: Property;
}

export default function PropertyDetail({ property }: Props) {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <img
        src={property.image}
        alt={property.title}
        className="w-full h-80 object-cover rounded-lg"
      />

      <h1 className="text-2xl font-bold mt-4">{property.title}</h1>
      <p className="text-gray-500">{property.location}</p>

      <p className="mt-4">{property.description}</p>

      <p className="text-xl font-semibold mt-4">
        ${property.price} / night
      </p>
    </div>
  );
}
