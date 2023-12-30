import { useState } from "react";
import Child from "./Child";

const ParentComponent = () => {
  const [receivedData, setReceivedData] = useState<string | null>(null);

  const handleDataFromChild = (data: string) => {
    setReceivedData(data);
  };

  return (
    <div>
      <h1>Parent Component</h1>
      <p>Received Data: {receivedData}</p>
      <Child onDataSend={handleDataFromChild} />
    </div>
  );
};

export default ParentComponent;
