import { createContext, useState, useContext, ReactNode, ButtonHTMLAttributes } from 'react';

interface ToggleContextType {
    on: boolean;
    toggle: () => void;
}

const ToggleContext = createContext<ToggleContextType | undefined>(undefined);

function useToggleContext(): ToggleContextType {
    const context = useContext(ToggleContext);
    if (!context) {
        throw new Error('Toggle components must be used within <Toggle>');
    }
    return context;
}

interface ToggleProps {
    children: ReactNode;
}

export default function Toggle({ children }: ToggleProps) {
    const [on, setOn] = useState(false);

    const toggle = () => setOn(prev => !prev);

    return (
        <ToggleContext.Provider value={{ on, toggle }}>
            {children}
        </ToggleContext.Provider>
    );
}

// Compound component: Toggle.On
Toggle.On = function ToggleOn({ children }: { children: ReactNode }) {
    const { on } = useToggleContext();
    return on ? <>{children}</> : null;
};

// Compound component: Toggle.Off
Toggle.Off = function ToggleOff({ children }: { children: ReactNode }) {
    const { on } = useToggleContext();
    return !on ? <>{children}</> : null;
};

// Compound component: Toggle.Button
Toggle.Button = function ToggleButton(
    props: ButtonHTMLAttributes<HTMLButtonElement>
) {
    const { toggle } = useToggleContext();
    return <button onClick={toggle} {...props} />;
};