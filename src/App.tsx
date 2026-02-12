import Provider from "@components/provider/Provider";
import styles from "./styles.module.css";
import ButtonsList from "./components/ButtonsList";
import ToggleButtonsList from "./components/ToggleButtonsList";
import IconButtonsList from "./components/IconButtonsList";
import ToggleIconButtonsList from "./components/ToggleIconButtonsList";

function App() {
  return (
    <Provider>
      <div className={styles.container}>
        {/* Buttons Demo */}
        <h2 style={{ marginTop: "2rem" }}>Buttons</h2>
        <ButtonsList />

        {/* Toggle Buttons Demo */}
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
