import React, { createContext, useState, useContext, ReactNode } from 'react';

type RegistrationContextType = {
    isRequestingCode: number;
    setIsRequestingCode: (value: number) => void;
};

const RegistrationContext = createContext<RegistrationContextType | undefined>(undefined);

export const RegistrationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isRequestingCode, setIsRequestingCode] = useState(0);

    return (
        <RegistrationContext.Provider value={{ isRequestingCode, setIsRequestingCode }}>
            {children}
        </RegistrationContext.Provider>
    );
};

export const useRegistrationContext = (): RegistrationContextType => {
    const context = useContext(RegistrationContext);
    if (!context) {
        throw new Error('useRegistrationContext must be used within a RegistrationProvider');
    }
    return context;
};
