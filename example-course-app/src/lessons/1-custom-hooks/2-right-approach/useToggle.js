import { useState } from 'react';

function ToggleComponent() {
    const [isOn, setIsOn] = useState(false);

    const toggle = () => {
        setIsOn(prev => !prev);
    };

    return (
        <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
    );
}

export default ToggleComponent;