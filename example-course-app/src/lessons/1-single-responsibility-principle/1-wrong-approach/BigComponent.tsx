// ❌ Too many responsibilities!
import {useEffect, useState} from "react";

function sendAnalyticsEvent(eventName: string, eventData: any) {
    // In a real app, this would send data to an analytics service
    console.log(`Analytics event: ${eventName}`, eventData);
}

export function BigComponent() {
    // Responsible for multiple unrelated states

    //@ts-ignore
    const [data, setData] = useState(); //@ts-ignore
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Responsible for fetching data
    useEffect(() => {
        fetch('/api/data')
            .then(response => response.json())
            .then(data => setData(data));
    }, []);

    // Responsible for implementing sending analytics events
    useEffect(() => {
        sendAnalyticsEvent('page_view', { page: 'big_component' });
    }, []);

    // Responsible for toggling modal
    // @ts-ignore
    function toggleModal() {
        setIsModalOpen(prev => !prev);
    }

    // ... other code
}
