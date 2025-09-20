import { useEffect, useState } from "react";

import { valorantAPI } from "../api/base";
import type { AgentT } from "../data/types";

export default function useGetAgents(uuid: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<AgentT | null>(null);

  useEffect(() => {
    if (loading) {
      valorantAPI
        .getAgent(uuid)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [loading, uuid]);

  return { loading, error, data };
}
