import axios from "axios";
import type { AxiosInstance } from "axios";

import type { AgentT, BuddyT } from "../data/types";
import type { ApiResponse } from "./types";

const API_URL = "https://valorant-api.com/v1";

class ValorantAPI {
  private api: AxiosInstance;

  constructor() {
    this.api = axios.create({ baseURL: API_URL });
  }

  private async fetchEndpoint(endpoint: string) {
    const res = await this.api.get(endpoint);

    return res.data;
  }

  async getAgents(): Promise<ApiResponse<AgentT[]>> {
    return this.fetchEndpoint("/agents?isPlayableCharacter=true");
  }

  async getAgent(uuid: string): Promise<ApiResponse<AgentT>> {
    return this.fetchEndpoint(`/agents/${uuid}`);
  }

  async getBuddies(): Promise<ApiResponse<BuddyT[]>> {
    return this.fetchEndpoint("/buddies");
  }
}

export const valorantAPI = new ValorantAPI();
