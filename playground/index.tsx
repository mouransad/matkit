import { createRoot } from "react-dom/client";
import Button from "./../src/components/button"; // from your library source via alias
import heroImage from './hero_image.webp';
import styles from './styles.module.css';
import Mamad from "./Mamad";
import { CallIn } from "@src/icons";

function App() {
    return (
        <div style={{ padding: 24 }}>
            <h1>Playground</h1>
            <Button>Click me mamad</Button>
            <img src={heroImage} width={100} height={100} />
            <div className={styles.hello}>hello style</div>
            <Mamad />
            <CallIn width={50} height={50} />
        </div>
    );
}

createRoot(document.getElementById("root")!).render(<App />);
