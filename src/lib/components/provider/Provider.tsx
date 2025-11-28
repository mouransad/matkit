import type { FC, PropsWithChildren } from "react";
import '@lib/sharedStyles/main.css';

const Provider: FC<PropsWithChildren> = (props) => {
    const { children } = props;

    return (
        <>
            {children}
        </>
    )
}

export default Provider;