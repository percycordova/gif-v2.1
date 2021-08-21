import React from 'react'

const StaticContex = React.createContext({
    name: 'sin Provider, si no ponemos el atributo <StaticContex value={{}}/>',
    suscribeteAlCanal: true,
});

export default StaticContex;