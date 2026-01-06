import Provider from "@components/provider/Provider"
import styles from './styles.module.css';
import ButtonsList from "./components/ButtonsList";
import ToggleButtonsList from "./components/ToggleButtonsList";

function App() {

  return (
    <Provider>
      <div className={styles.container}>
        {/* Buttons Demo */}
        <h2>Buttons</h2>
        <ButtonsList />

        {/* Toggle Buttons Demo */}
        <h2 style={{ marginTop: '2rem' }}>Toggle Buttons</h2>
        <ToggleButtonsList />
      </div>
    </Provider>
  )
}

export default App
