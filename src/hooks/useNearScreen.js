import { useState, useEffect, useRef } from 'react';

const useNearScreen = ({ distance = "100px", externalRef, once = true } = {}) => {

    const elementRef = useRef();
    const [isNearScreen, setIsNearScreen] = useState(false);


    useEffect(() => {
        //Si le pasamos como parametro un ref externo ese sera el elemento a observar, si no sera el elementRef
        const element = externalRef ? externalRef.current : elementRef.current;
        //funcion que permite ver el observador
        const onChange = (entries, observer) => {
            const el = entries[0]; // elemento a observar
            // console.log("valor", el.isIntersecting);
            if (el.isIntersecting) { //si es true
                setIsNearScreen(true);
                once && observer.disconnect();//desconectamos el observador
            } else {
                !once && setIsNearScreen(false)
            }
        }

        const observer = new IntersectionObserver(onChange, {
            rootMargin: distance
        });

        if (element) observer.observe(element); //si existe el elemento observamos
        return () => observer.disconnect();
    })
    return { isNearScreen, elementRef };

}

export default useNearScreen;
