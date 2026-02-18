import { makeClass } from "@lib/sharedTools/makeClass";
import {
  useEffect,
  useRef,
  useState,
  type FC,
  type PropsWithChildren,
} from "react";

interface PropTypes {
  open: boolean;
}

const Collapse: FC<PropsWithChildren<PropTypes>> = (props) => {
  const { children, open } = props;

  const [show, setShow] = useState(open);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (typeof timeoutRef.current === "number") {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }

    timeoutRef.current = setTimeout(
      () => {
        setShow(open);
      },
      open ? 0 : 300,
    );
  }, [open]);

  return (
    <div className={makeClass("matkit__collapse")}>
      <div></div>
    </div>
  );
};

export default Collapse;
