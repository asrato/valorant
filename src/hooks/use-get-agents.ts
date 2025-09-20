import { useEffect, useState } from "react";

import { valorantAPI } from "../api/base";
import type { AgentT } from "../data/types";

export default function useGetAgents() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<AgentT[] | null>([]);

  useEffect(() => {
    if (loading) {
      valorantAPI
        .getAgents()
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return { loading, error, data };
}
