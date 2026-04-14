import { useEffect, useState, useCallback } from 'react';
import { supabase } from '../lib/supabaseClient';

export function useJobs() {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadJobs = useCallback(async () => {
    setLoading(true);
    setError(null);

    const { data, error } = await supabase
      .from('jobs')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      setError(error.message);
      setJobs([]);
    } else {
      setJobs(data);
    }

    setLoading(false);
  }, []);

/* eslint-disable react-hooks/set-state-in-effect */
useEffect(() => {
  loadJobs()
}, [loadJobs])
/* eslint-enable react-hooks/set-state-in-effect */

  return {
    jobs,
    loading,
    error,
    reload: loadJobs
  };
}
