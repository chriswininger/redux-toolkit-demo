import { useEffect, useState } from 'react';

export default function useCurrentEvents(): UseCurrentEvents {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [currentEvents, setCurrentEvents] = useState<CurrentEvent []>([]);

  useEffect(() => {
    const endpoint = '/v1/current-events/verified';

    setIsLoading(true);

    console.info('initiate fetch ' + Date.now());
    fetch(endpoint)
        .then(result => result.json())
        .then(data => {
          console.info('fetch completed ' + Date.now());
          setIsLoading(false);
          setError(null);
          setCurrentEvents(data.events);
        })
        .catch(err => {
          setError(new Error(`Error loading event ${err}`));
          setIsLoading(false);
        });
  }, []);

  return {
    isLoading,
    error,
    currentEvents
  }
}

export interface UseCurrentEvents {
  isLoading: boolean,
  error: null | Error,
  currentEvents: CurrentEvent []
}

export type CurrentEvent = Record<string, unknown>;
