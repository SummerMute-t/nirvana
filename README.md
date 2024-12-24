# Nirvana System

## Overview

The Nirvana System is a versatile communication framework designed to facilitate structured interactions among multiple agents. It supports both Hierarchical and Joint communication modes, enabling efficient collaboration and task management within teams. Leveraging the AI Agents for natural language processing, the system ensures dynamic and meaningful exchanges among participants.

## Features

- **Hierarchical Communication Mode**: Designate a leader to manage and coordinate interactions among team members.
- **Joint Communication Mode(WIP)**: Foster equal participation and collaboration among all agents without a designated leader.
- **Dynamic Logging**: Automatically generates log files with system type and timestamp for enhanced traceability.
- **Comprehensive Reporting**: Creates detailed Markdown reports capturing all communication cycles and interactions.
- **TypeScript Integration**: Ensures type safety and maintainability with well-defined interfaces and modular code structure.
- **Environment Configuration**: Easily configurable through .env and JSON configuration files.
- **Scalable Architecture**: Designed to handle increasing numbers of agents and complex communication flows.

### Supported AI Agent Frameworks

- ELIZA

## Prerequisites

Before setting up the Nirvana System, ensure you have the following installed on your machine:
- **Node.js**: v23.3.0 (Recommended)
- **pnpm**: v9.15.1 (Recommended)

### Installation

1. Clone the Repository

``` shell
git clone git@github.com/SummerMute-t/nirvana.git
cd nirvana
```


2. Install Dependencies Using pnpm

``` shell
pnpm install
```


### Configuration

Environment Variables

Copy .env.sample to create .env file in the root directory of the project.

#### .env

- Base URL for the Agent (Eliza Framework)

```yaml
ELIZA_BASE_URL=http://localhost:3000
```

- Maximum number of communication cycles

```yaml
MAX_COMMUNICATION_CYCLES=10
```


#### Agents Configuration

Define your agents and their roles in JSON configuration files. Two separate configurations are provided for Hierarchical and Joint modes.
Refer to the sample configuration files in agents/ for reference.

### Run

To start the Nirvana System in Hierarchical Mode, execute the following command:

pnpm start --config agents/filename.json

# License

This project is licensed under the MIT License.

---

Developed with SummerMute by Blair Lee.
