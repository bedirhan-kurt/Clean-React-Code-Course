import { useFetchData } from './useFetchData';
import { usePageAnalytics } from './usePageAnalytics';
import { Modal } from './Modal';

// ✅ Single responsibility: put everything together
export function BigComponent() {
  //@ts-ignore
  const data = useFetchData();

  usePageAnalytics({ page: 'big_component' });

  //@ts-ignore
  return <Modal>{/* ... other code */}</Modal>;
}
