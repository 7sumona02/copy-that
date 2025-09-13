import CopyCode from "@/components/CopyCode";

export default function Home() {
  const exampleCode = `
const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: {item.price}</p>
      <p>Quantity: {item.quantity}</p>
    </div>
  );
};
  `.trim();

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <CopyCode code={exampleCode} language="tsx" />
    </div>
  );
}
