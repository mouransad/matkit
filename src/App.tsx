import Provider from "@components/provider/Provider";
import styles from "./styles.module.css";
import TextFieldList from "./components/TextFieldList";
import ToggleIconButtonsList from "./components/ToggleIconButtonsList";
import IconButtonsList from "./components/IconButtonsList";
import ToggleButtonsList from "./components/ToggleButtonsList";
import ButtonsList from "./components/ButtonsList";

function App() {
  return (
    <Provider>
      <div className={styles.container}>
        <h2 style={{ marginTop: "2rem" }}>TextFields</h2>
        <TextFieldList />

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
