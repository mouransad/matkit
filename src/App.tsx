import Provider from "@components/provider/Provider"
import styles from './styles.module.css';
import Button from "@components/button";
import type { ComponentProps } from "react";
import CallIn from "@icons/CallIn";

function App() {

  return (
    <Provider>
      <div className={styles.container}> {
        (["filled", "tonal", "outlined", "elevated", "text"] as ComponentProps<typeof Button>['variant'][]).map((variant) => {
          return (['primary', 'secondary', 'tertiary', 'error'] as ComponentProps<typeof Button>['color'][]).map((color) => {
            return (
              <div className={styles.buttonVariantGroup}>
                <span>{variant} {color}</span>
                <div className={styles.buttonsGroup}>
                  <Button color={color} variant={variant} size="xSmall">hello</Button>
                  <Button color={color} variant={variant} size="small">hello</Button>
                  <Button color={color} variant={variant} size="medium">hello</Button>
                  <Button color={color} variant={variant} size="large">hello</Button>
                  <Button color={color} variant={variant} size="xLarge">hello</Button>
                  <Button color={color} disabled variant={variant} size="xLarge">hello</Button>
                </div>

                <div className={styles.buttonsGroup}>
                  <Button color={color} variant={variant} round size="xSmall">hello</Button>
                  <Button color={color} variant={variant} round size="small">hello</Button>
                  <Button color={color} variant={variant} round size="medium">hello</Button>
                  <Button color={color} variant={variant} round size="large">hello</Button>
                  <Button color={color} variant={variant} round size="xLarge">hello</Button>
                  <Button color={color} disabled variant={variant} round size="xLarge">hello</Button>
                </div>


                <div className={styles.buttonsGroup}>
                  <Button color={color} startIcon={<CallIn />} variant={variant} round size="xSmall">hello</Button>
                  <Button color={color} startIcon={<CallIn />} variant={variant} round size="small">hello</Button>
                  <Button color={color} startIcon={<CallIn />} variant={variant} round size="medium">hello</Button>
                  <Button color={color} startIcon={<CallIn />} variant={variant} round size="large">hello</Button>
                  <Button color={color} startIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                  <Button color={color} disabled startIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                </div>


                <div className={styles.buttonsGroup}>
                  <Button color={color} endIcon={<CallIn />} variant={variant} round size="xSmall">hello</Button>
                  <Button color={color} endIcon={<CallIn />} variant={variant} round size="small">hello</Button>
                  <Button color={color} endIcon={<CallIn />} variant={variant} round size="medium">hello</Button>
                  <Button color={color} endIcon={<CallIn />} variant={variant} round size="large">hello</Button>
                  <Button color={color} endIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                  <Button color={color} disabled endIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                </div>

                <div className={styles.buttonsGroup}>
                  <Button color={color} endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="xSmall">hello</Button>
                  <Button color={color} endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="small">hello</Button>
                  <Button color={color} endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="medium">hello</Button>
                  <Button color={color} endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="large">hello</Button>
                  <Button color={color} endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                  <Button color={color} disabled endIcon={<CallIn />} startIcon={<CallIn />} variant={variant} round size="xLarge">hello</Button>
                </div>
              </div>
            )
          })
        })
      }
      </div>
    </Provider>
  )
}

export default App
