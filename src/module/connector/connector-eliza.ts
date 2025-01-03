import axios from 'axios';
import { GeneralizedAgentResponse, ElizaResponse } from '../../types';

export default class ElizaConnector {
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  /**
   * Sends a message to the specified agent via the Eliza Framework.
   * @param agentId - The unique ID of the agent.
   * @param text - The text message to send.
   * @returns The response from the Eliza Framework or null if an error occurs.
   */
  async sendMessage(agentId: string, text: string): Promise<GeneralizedAgentResponse | null> {
    const url = `${this.baseUrl}/${agentId}/message`;
    const payload = {
      text: text,
      userId: "system@nirvana",
      userName: "Nirvana System"
    };
    try {
      const response = await axios.post<ElizaResponse[]>(url, payload, {
        headers: {
          'Content-Type': 'application/json'
        }
      });
      if (response.data && response.data.length > 0) {
        return {
          text: response.data[0].text
        };
      } else {
        return {
          text: "Unable to generate a response."
        };
      }
    } catch (error) {
      console.error(`Error sending message to ${agentId}:`, error);
      return null;
    }
  }
}
