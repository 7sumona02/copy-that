// import CopyCode from "@/src/components/CopyCode";

// export default function Home() {
//   const exampleCode = `
// const GroceryItem: React.FC<GroceryItemProps> = ({ item }) => {
//   return (
//     <div>
//       <h2>{item.name}</h2>
//       <p>Price: {item.price}</p>
//       <p>Quantity: {item.quantity}</p>
//     </div>
//   );
// };
//   `.trim();

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
//       <CopyCode code={exampleCode} language="tsx" />
//     </div>
//   );
// }

import { themes } from 'prism-react-renderer';
import CopyCode from '../components/CopyCode';

export default function HomePage() {
  const exampleCode = `
import { CopyCode } from 'copythat';

function Example() {
  const code = \`console.log("Hello world!");\`;

  return <CopyCode code={code} language="javascript" />;
}`;

  return (
    <div className="min-h-screen bg-gray-100 p-8 text-gray-800">
      <header className="max-w-3xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold mb-4">CopyThat</h1>
        <p className="text-lg text-gray-600">A simple, customizable code copy button for React.</p>
      </header>

      <section className="max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-3">Installation</h2>
        <CopyCode code={`npm install copythat`} language="bash" theme={themes.dracula} />
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-3">Usage</h2>
        <CopyCode code={exampleCode} language="tsx" theme={themes.dracula} />
      </section>

      <section className="max-w-3xl mx-auto mb-8">
        <h2 className="text-2xl font-semibold mb-3">Customization</h2>
        <p>You can pass custom icons or themes to match your app&apos;s look and feel.</p>
      </section>

      <footer className="max-w-3xl mx-auto text-center mt-12 text-gray-500">
        © {new Date().getFullYear()} CopyThat. Built with Next.js & Tailwind CSS.
      </footer>
    </div>
  );
}
