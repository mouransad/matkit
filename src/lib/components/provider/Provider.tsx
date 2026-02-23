import type { FC, PropsWithChildren } from "react";
import '@lib/internal-styles/main.css';

const Provider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <>
            {children}
        </>
    )
}

export default Provider;