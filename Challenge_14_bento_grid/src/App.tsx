import { Button } from "./components/button/Button";
import { Text } from "./components/Text/Text";
import { Card } from "./components/card/Card";
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
      <div>
        <Card variant="primary">Primary Card</Card>
        <Card variant="secondary">Secondary Card</Card>
        <Card variant="light">Light Card</Card>
        <Card variant="sun">Sun Card</Card>
        <Card variant="light-sun">Light Sun Card</Card>
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
