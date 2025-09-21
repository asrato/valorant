import { useEffect, useState } from "react";
import { valorantAPI } from "../api/base";
import type { BuddyT } from "../data/types";

export default function useGetBuddies() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<Error | null>(null);
  const [data, setData] = useState<BuddyT[] | null>(null);

  useEffect(() => {
    if (loading) {
      valorantAPI
        .getBuddies()
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => setError(error))
        .finally(() => setLoading(false));
    }
  }, [loading]);

  return { loading, error, data };
}
