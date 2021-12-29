import React from 'react'

import { NavigProvider } from './NavigationProvider'

const AppProvider: React.FC = ({ children }) => (
    <NavigProvider>
        {children}
    </NavigProvider>
)

export default AppProvider
