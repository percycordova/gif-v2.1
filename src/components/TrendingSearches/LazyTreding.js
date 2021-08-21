
import React, { Suspense } from 'react';
import useNearScreen from '../../hooks/useNearScreen';
import Spinner from '../spinner/Spinner';


const TrendingSearches = React.lazy(() => import('.'))

//React.Lazy sirve para cargar los archivos js solo cuando sea necesario
const LazyTreding = () => {

    const { isNearScreen, elementRef } = useNearScreen();

    return (
        <div ref={elementRef} >

            <Suspense fallback={<Spinner />}>
                {(isNearScreen)
                    ? <TrendingSearches />
                    : <Spinner />
                }

            </Suspense>

        </div>
    )

}
export default LazyTreding;