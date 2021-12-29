import React, { useState, useContext, useCallback, createContext } from 'react';
import Router, { useRouter } from 'next/router';

interface ContextProps {
    navSelected: string;
    handleNavSelected(navigationName: string): void;
}

const NavigContext = createContext<ContextProps>({} as ContextProps);


const NavigProvider: React.FC = ( {children} ) => {
    const router = useRouter();
    const [navSelected, setNavSelected] = useState('home');


    const handleNavSelected = useCallback(
        (navigationName: string) => {
            setNavSelected(navigationName);
            router.push(`/${navigationName}`)
        },
        []
    )

    return (
        <NavigContext.Provider
          value={{
            navSelected,
            handleNavSelected
          }}
        >
          {children}
        </NavigContext.Provider>
      )
}


function useNavig(): ContextProps {
  const context = useContext(NavigContext)

  if (!context) {
    throw new Error('useNavig must be inside NavigContext')
  }

  return context
}

export { NavigProvider, useNavig }