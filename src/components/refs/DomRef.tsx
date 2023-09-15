import { useRef, useEffect } from "react";

type Props = {};

const DomRef = (props: Props) => {
  const inputRef = useRef<HTMLInputElement>(null!); // non-null assertion

  useEffect(() => {
    inputRef.current.focus()
  },[]);
  return (
    <div>
      <input type="text" ref={inputRef} />
    </div>
  );
};

export default DomRef;
