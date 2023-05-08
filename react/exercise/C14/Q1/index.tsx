import {
  FC,
  useRef,
  useState,
  useEffect,
  memo,
  useCallback,
  useMemo,
} from "react";
import { createRoot } from "react-dom/client";

// ----- ここから、数行先のログ用関数を触る必要はありません -----

type PerformanceCounter = {
  __Counter: number;
  __CounterButton: {
    start: number;
    stop: number;
  };
};

const initialPerformanceCounter = {
  __Counter: 0,
  __CounterButton: {
    start: 0,
    stop: 0,
  },
};

function usePerformanceCounter() {
  const perfRef = useRef<PerformanceCounter>(initialPerformanceCounter);

  function outputLog() {
    console.log("++++++++++++++++++++++++++++++");
    console.log(`Counter: ${perfRef.current.__Counter}`);
    console.log(
      `CounterButton: id=start: ${perfRef.current.__CounterButton.start}`
    );
    console.log(
      `CounterButton: id=stop:  ${perfRef.current.__CounterButton.stop}`
    );
    console.log("++++++++++++++++++++++++++++++");
  }

  function incrementPerformanceCounter(componentName: string, id?: string) {
    switch (componentName) {
      case "Counter":
        perfRef.current.__Counter += 1;
        console.info(`${componentName}: ${perfRef.current.__Counter}`);
        break;
      case "CounterButton":
        const key = id as keyof PerformanceCounter["__CounterButton"];
        perfRef.current.__CounterButton[key] += 1;
        console.info(
          `${componentName}: ${id}: ${perfRef.current.__CounterButton[key]}`
        );
        break;
      default:
        break;
    }
  }

  return {
    perfRef,
    outputLog,
    incrementPerformanceCounter,
  };
}
// ----- ここまで、触る必要ありません -----

interface CounterButtonProps {
  id: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled: boolean;
  label: string;
}

const CounterButton = (props: CounterButtonProps) => {
  const { id, onClick, disabled, label } = props;

  // --- 計測用 ---
  const { incrementPerformanceCounter } = usePerformanceCounter();
  incrementPerformanceCounter("CounterButton", id);
  // --- 計測用 ---

  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

interface CounterProps {
  handleCustomStartCount: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCustomStopCount: (e: React.MouseEvent<HTMLButtonElement>) => void;
  handleCustomResetCount: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Counter: FC<CounterProps> = (props) => {
  // --- 計測用 ---
  const { incrementPerformanceCounter } = usePerformanceCounter();
  incrementPerformanceCounter("Counter");
  // --- 計測用 ---

  const {
    handleCustomStartCount,
    handleCustomStopCount,
    handleCustomResetCount,
  } = props;
  const [count, setCount] = useState<number>(0);
  const [frameId, setFrameId] = useState<number>(0);

  function loop() {
    setCount((count) => count + 1);
    const id = window.requestAnimationFrame(loop);
    setFrameId(id);
    return id;
  }

  function stop() {
    window.cancelAnimationFrame(frameId);
  }

  const handleStartCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof handleCustomStartCount === "function") {
      handleCustomStartCount(e);
    }
    loop();
  };

  const handleStopCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (typeof handleCustomStopCount === "function") {
      handleCustomStopCount(e);
    }
    stop();
  };

  return (
    <>
      <p className="label">count= {count}</p>
      <CounterButton
        id="start"
        onClick={handleStartCount}
        disabled={false}
        label="start"
      />
      <CounterButton
        id="stop"
        onClick={handleStopCount}
        disabled={false}
        label="stop"
      />
    </>
  );
};

function App() {
  const { outputLog } = usePerformanceCounter();

  const handleCustomStartCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleCustomStartCount");
  };
  const handleCustomStopCount = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log("handleCustomStopCount");
    outputLog(); // コンソールログへ計測ログを出力
  };

  const props = {
    handleCustomStartCount,
    handleCustomStopCount,
  };

  return <Counter {...props} />;
}

createRoot(document.getElementById("root")!).render(<App />);
