import {useEffect} from "react";

// Helper function to send analytics events
function sendAnalyticsEvent(eventName: string, eventData: any) {
    // In a real app, this would send data to an analytics service
    console.log(`Analytics event: ${eventName}`, eventData);
}

type Event = {
    page: string;
};

// ✅ Single responsibility: managing analytics
export function usePageAnalytics(event: Event) {
    useEffect(() => {
        sendAnalyticsEvent('page_view', event);
    }, [event]);
}
