export interface ElizaResponse {
    user: string;
    text: string;
    action: string;
}

export interface GeneralizedAgentResponse {
    text: string;
}

export interface Member {
    id: string;
    name: string;
    role: string; // Description of the member's role within the group
}

export interface GroupConfig {
    type: "hierarchical" | "joint";
    goal: string;
    leader?: Member; // Required only for hierarchical type
    members: Member[];
}

export interface Argv {
    config: string;
    [key: string]: any; // Allow additional properties if needed
}
