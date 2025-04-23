import { createRoot } from 'react-dom/client';

interface Props {
  name: string;
}

function Welcome(props: Props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div>
      <Welcome name="Seiji" />
      <Welcome name="Masashi" />
      <Welcome name="ACCESS" />
    </div>
  );
}

createRoot(document.getElementById('root')!).render(<App />);
