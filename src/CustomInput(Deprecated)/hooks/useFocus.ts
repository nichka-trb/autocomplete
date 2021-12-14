import { useCallback, useState } from "react"

export const useFocus = () => {
    const [focus, setFocus] = useState(false);

    const setFocusOn = useCallback(() => setFocus(true), []);
    const setFocusOff = useCallback(() => setFocus(false), []);

    return {
        focus,
        setFocusOn,
        setFocusOff,
    };
}