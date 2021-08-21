import React, { useRef, useCallback, useEffect, useState } from 'react';

import debounce from 'just-debounce-it';
import { Link } from 'wouter';
import useGifs from '../../hooks/useGifs';
import useNearScreen from '../../hooks/useNearScreen';
import ImageGrid from '../../components/SvgPlaceholden/ImageGrid';
import ListofGifs from '../../components/ListoGifs/ListofGifs';

const SearchResults = ({ params }) => {
    //ya no me llega la category como atributo si no un ob params, que adentro hay una llave keyword
    //asigno el valor de keyword:category
    const { keyword: category } = params;
    const { loading, gifs, setPage } = useGifs(category, 10);
    const externalRef = useRef();
    const { isNearScreen } = useNearScreen({
        externalRef: loading ? null : externalRef,
        once: false
    });

    /*const handleNextPage = () => {
        console.log("next page");
    }*/

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const debounceHandleNextPage = useCallback(debounce(
        () => setPage(prevPage => prevPage + 1), 200
    ), [setPage])

    useEffect(() => {
        console.log(isNearScreen)
        if (isNearScreen) debounceHandleNextPage();
    }, [isNearScreen, debounceHandleNextPage])

    /* const handleNextPage = () => {
         setPage(prevPage => prevPage + 1)
 
     }*/
    const [show, setShow] = useState(false);


    useEffect(() => {
        const handleHome = (e) => {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            if (scrollTop > 900) {
                setShow(true);
            } else {
                setShow(false);
            }
        }
        window.addEventListener('scroll', handleHome);
        return () => { window.removeEventListener('scroll', handleHome) }

    }, [show])

    return (
        <>
            {
                (loading)
                    ? <ImageGrid />
                    : <>

                        <ListofGifs gifs={gifs} category={category} />
                        <div id="visor" style={{ marginTop: "3rem" }} ref={externalRef}></div>
                        {(show) ? <Link
                            className="btn-home-bottom"
                            to={(`/`)}
                        >{''}
                            

                                <svg  width="60" height="60" viewBox="0 0 37 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M18.5 7.3125L7 16.8125V27C7 27.5625 7.4375 28 8 28H15C15.5 28 15.9375 27.5625 15.9375 27V21C15.9375 20.5 16.4375 20 16.9375 20H20.9375C21.5 20 21.9375 20.5 21.9375 21V27C21.9375 27.5625 22.4375 28 22.9375 28H30C30.5 28 31 27.5625 31 27V16.75L19.4375 7.3125C19.3125 7.1875 19.125 7.125 19 7.125C18.8125 7.125 18.625 7.1875 18.5 7.3125ZM36.6875 13.75L31.5 9.4375V0.8125C31.5 0.375 31.125 0.0625 30.75 0.0625H27.25C26.8125 0.0625 26.5 0.375 26.5 0.8125V5.3125L20.875 0.6875C20.375 0.3125 19.6875 0.0625 19 0.0625C18.25 0.0625 17.5625 0.3125 17.0625 0.6875L1.25 13.75C1.0625 13.875 0.9375 14.125 0.9375 14.3125C0.9375 14.5 1.0625 14.6875 1.125 14.8125L2.75 16.75C2.875 16.9375 3.0625 17 3.3125 17C3.5 17 3.6875 16.9375 3.8125 16.8125L18.5 4.75C18.625 4.625 18.8125 4.5625 19 4.5625C19.125 4.5625 19.3125 4.625 19.4375 4.75L34.125 16.8125C34.25 16.9375 34.4375 17 34.625 17C34.875 17 35.0625 16.9375 35.1875 16.75L36.8125 14.8125C36.9375 14.6875 37 14.5 37 14.3125C37 14.125 36.875 13.875 36.6875 13.75Z"
                                        />
                                </svg>
                           


                        </Link>
                            : <Link
                                className="btn-home-top"
                                to={(`/`)}
                            >{"⏮️"}


                            </Link>
                        }

                    </>
            }

        </>
    )
}
export default SearchResults;
