import { useEffect, useState } from "react";
import type { BuddyT } from "../data/types";
import { valorantAPI } from "../api/base";

export default function useGetBuddy(uuid: string) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<BuddyT | null>(null);

  useEffect(() => {
    if (loading) {
      valorantAPI
        .getBuddy(uuid)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [loading, uuid]);

  return { loading, error, data };
}
