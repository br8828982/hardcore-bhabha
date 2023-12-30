interface ChildProps {
  onDataSend: (data: string) => void;
}

const Child = ({ onDataSend }: ChildProps) => {
  const handleButtonClick = () => {
    onDataSend("Hello, Parent!");
  };

  return (
    <div>
      <h2>Child Component</h2>
      <button onClick={handleButtonClick}>Send Data to Parent</button>
    </div>
  );
};

export default Child;
