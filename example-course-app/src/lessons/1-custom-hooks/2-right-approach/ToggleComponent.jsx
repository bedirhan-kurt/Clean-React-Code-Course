import useToggle from './useToggle';

function ToggleComponent() {
    const [isOn, toggle] = useToggle();

    return (
        <div>
            <button onClick={toggle}>{isOn ? 'ON' : 'OFF'}</button>
        </div>
    );
}

export default ToggleComponent;