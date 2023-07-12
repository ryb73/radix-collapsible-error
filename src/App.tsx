import * as Collapsible from "@radix-ui/react-collapsible";
import { CustomContent } from "example-collapsible-content";

function App() {
  return (
    <Collapsible.Root>
      <Collapsible.Trigger>Trigger</Collapsible.Trigger>
      <CustomContent />
    </Collapsible.Root>
  );
}

export default App;
