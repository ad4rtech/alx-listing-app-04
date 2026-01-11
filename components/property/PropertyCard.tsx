interface Property {
  id: string;
  title: string;
  location: string;
  price: number;
  image: string;
}

interface Props {
  property: Property;
}

export default function PropertyCard({ property }: Props) {
  return (
    <div className="border rounded-lg overflow-hidden shadow hover:shadow-lg transition">
      <img
        src={property.image}
        alt={property.title}
        className="h-48 w-full object-cover"
      />

      <div className="p-4">
        <h3 className="font-semibold text-lg">{property.title}</h3>
        <p className="text-gray-500">{property.location}</p>
        <p className="font-bold mt-2">${property.price} / night</p>
      </div>
    </div>
  );
}
