import Provider from "@components/provider/Provider";
import styles from "./styles.module.css";
import TextFieldList from "./components/TextFieldList";
import SelectList from "./components/SelectList";
import ToggleIconButtonsList from "./components/ToggleIconButtonsList";
import IconButtonsList from "./components/IconButtonsList";
import ToggleButtonsList from "./components/ToggleButtonsList";
import ButtonsList from "./components/ButtonsList";
import CheckboxList from "./components/CheckboxList";
import RadioList from "./components/RadioList";
import CollapseList from "./components/CollapseList";

function App() {
  return (
    <Provider>
      <div className={styles.container}>
        <h2 style={{ marginTop: "2rem" }}>Collapse</h2>
        <CollapseList />

        <h2 style={{ marginTop: "2rem" }}>Radios</h2>
        <RadioList />

        <h2 style={{ marginTop: "2rem" }}>Checkboxes</h2>
        <CheckboxList />

        <h2 style={{ marginTop: "2rem" }}>TextFields</h2>
        <TextFieldList />

        <h2 style={{ marginTop: "2rem" }}>Selects</h2>
        <SelectList />

        <h2 style={{ marginTop: "2rem" }}>Buttons</h2>
        <ButtonsList />

        <h2 style={{ marginTop: "2rem" }}>Toggle Buttons</h2>
        <ToggleButtonsList />

        <h2 style={{ marginTop: "2rem" }}>Icon Buttons</h2>
        <IconButtonsList />

        <h2 style={{ marginTop: "2rem" }}>Toggle Icon Buttons</h2>
        <ToggleIconButtonsList />
      </div>
    </Provider>
  );
}

export default App;
