import { useEffect } from "react";

export const useOutsideClick = (ref, callback) => {


    const outsideClickHandler = (event) => {
        const el = ref?.current

        if (!el || el.contains(event.target)) {
            return
        }
        if (typeof callback === 'function') {
            callback();
        }

    }

    useEffect(() => {
        document.addEventListener('click', outsideClickHandler, true);
        return () => {
            document.removeEventListener('click', outsideClickHandler, true)
        }
    }, [])
}

//eventCapchuring
//event