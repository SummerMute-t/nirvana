# Nirvana System

![](docs/png/misa-nirvana.png)

## Overview

The Nirvana System is a versatile communication framework designed to facilitate structured interactions among multiple agents. It supports both Hierarchical and Joint communication modes, enabling efficient collaboration and task management within teams. Leveraging the AI Agents for natural language processing, the system ensures dynamic and meaningful exchanges among participants.

## Background

Some complicated tasks like managing liquidity pools on Solana can be challenging even for AI Agent. To address this, SummerMute introduces Nirvana, an AI discussion framework. This system allows AI agents to aggregate data from various sources, analyze it collaboratively above AI Agent frameworks, LLM Models.

## Features

- **Hierarchical Communication Mode**: Designate a leader to manage and coordinate interactions among team members.
- **Dynamic Logging**: Automatically generates log files with system type and timestamp for enhanced traceability.
- **Comprehensive Reporting**: Creates detailed Markdown reports capturing all communication cycles and interactions.
- **TypeScript Integration**: Ensures type safety and maintainability with well-defined interfaces and modular code structure.
- **Environment Configuration**: Easily configurable through .env and JSON configuration files.
- **Scalable Architecture**: Designed to handle increasing numbers of agents and complex communication flows.

## To Do

- **Packaging utilize nirvana system as Framework**: Create a package to utilize Nirvana System as a framework for AI Agent communication.
- **Joint Communication Mode**: Implement a mode where all agents can communicate with each other without a designated leader.
- **AI Agent Integration**: Integrate additional AI Agent frameworks to support a wider range of natural language processing capabilities.
- **Web Interface**: Develop a user-friendly web interface for easy configuration and monitoring of the Nirvana System.
- **Enhanced Logging**: Implement advanced logging features such as error handling, warnings, and debugging information.
- **Real-Time Reporting**: Enable real-time generation of reports during communication cycles for immediate feedback.
- **Security Enhancements**: Implement security measures to protect sensitive data and prevent unauthorized access.
- **Performance Optimization**: Optimize system performance to handle large volumes of data and complex communication scenarios.
- **Testing Framework**: Develop a comprehensive testing framework to validate system functionality and performance.
- **Documentation**: Create detailed documentation for the Nirvana System

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
Refer to the sample configuration files in groups/ for reference.

### Run

To start the Nirvana System in Hierarchical Mode, execute the following command:

pnpm start --config groups/filename.json

# License

This project is licensed under the MIT License.

---

Developed with SummerMute by Blair Lee.
