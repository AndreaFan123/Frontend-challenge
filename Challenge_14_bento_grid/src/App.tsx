import { Button } from "./components/button/Button";
import { Text } from "./components/Text/Text";
import "./index.css";

function App() {
  return (
    <main>
      <div>
        <Text as="h1" variant="primary">
          Primary Text
        </Text>
        <Text as="h2" variant="secondary">
          Secondary Text
        </Text>
        <Text as="h3" variant="light">
          Light Text
        </Text>
        <Text as="h4" variant="ghost">
          Ghost Text
        </Text>
        <Text as="p">Default Text</Text>
      </div>
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="ghost" disabled>
        Ghost Disabled
      </Button>
    </main>
  );
}

export default App;
