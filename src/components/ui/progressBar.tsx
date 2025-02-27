interface ProgressBarProps {
  value: number;
}

const ProgressBar = ({ value }: ProgressBarProps) => {
  const getColor = (value: number) => {
    if (value < 33) return "bg-red-500";
    if (value < 66) return "bg-yellow-500";
    return "bg-green-500";
  };

  return (
    <div className="w-[400px] h-2 bg-gray-300 rounded">
      <div
        className={`h-2 ${getColor(value)} rounded`}
        style={{ width: `${value}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
