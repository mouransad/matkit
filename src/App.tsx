import Button from "@components/button"
import Provider from "@components/provider/Provider"
import styles from './styles.module.css';

function App() {

  return (
    <Provider>
      <Button>hello my button</Button>

      <div className={styles.card}>hello how are you</div>
    </Provider>
  )
}

export default App
