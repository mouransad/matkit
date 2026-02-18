import Collapse from "@components/collapse";
import styles from "./styles.module.css";

const AccordionList = () => {
  return (
    <div className={styles.container}>
      <Collapse>
        <div>hello how are you</div>
      </Collapse>
    </div>
  );
};

export default AccordionList;
