import { RefObject, useCallback, useEffect } from "react";

const useOutsideClick = (exclude: RefObject<HTMLElement>, onClickOutside: (event: MouseEvent) => void) => {
    const handleClick = useCallback((event: MouseEvent) => {
        const element = exclude?.current;

        if (!element || element.contains(event.target as Node)) {
            return;
        }

        onClickOutside(event);
    }, [exclude, onClickOutside]);

    useEffect(() => {
        if (exclude) {
            window.addEventListener('click', handleClick);
        }

        return () => {
            if (exclude) {
                window.removeEventListener('click', handleClick);
            }
        }
    }, [handleClick, exclude]);
};

export default useOutsideClick;