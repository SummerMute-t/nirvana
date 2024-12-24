import { HierarchicalSystem } from './module/hierarchical';
import dotenv from 'dotenv';
import * as path from 'path';
import * as fs from 'fs';
import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import { GroupConfig, Argv } from './types';

// Load environment variables from .env file
dotenv.config();

/**
 * Parses command-line arguments using yargs with type safety.
 * @returns The parsed Argv object containing the 'config' property.
 */
async function parseArguments(): Promise<Argv> {
  return await yargs(hideBin(process.argv))
    .option('config', {
      alias: 'c',
      type: 'string',
      description: 'Path to the agents configuration JSON file',
      demandOption: true
    })
    .help()
    .alias('help', 'h')
    .strict() // Enforce strict parsing
    .parse() as Argv; // Type assertion
}

/**
 * Loads the agents configuration from the specified JSON file.
 * @param configPath - The path to the configuration file.
 * @returns The parsed AgentsConfig object.
 */
function loadAgentsConfig(configPath: string): GroupConfig {
  try {
    const absolutePath = path.resolve(configPath);
    if (!fs.existsSync(absolutePath)) {
      console.error(`Configuration file not found at path: ${absolutePath}`);
      process.exit(1);
    }
    const fileContent = fs.readFileSync(absolutePath, 'utf8');
    const config: GroupConfig = JSON.parse(fileContent);
    // Validate config
    if (!config.type || !config.members) {
      throw new Error("Invalid AgentsConfig format.");
    }
    if (config.type === "hierarchical" && !config.leader) {
      throw new Error("Leader is required for hierarchical type.");
    }
    return config;
  } catch (error) {
    console.error(`Error loading configuration file:`, error);
    process.exit(1);
  }
}

/**
 * Main function to initialize and run the appropriate system.
 */
async function main() {
  // Retrieve Eliza Framework's base URL from environment variables
  const ELIZA_BASE_URL = process.env.ELIZA_BASE_URL || "http://localhost:3000";

  // Parse command-line arguments
  const argv: Argv = await parseArguments();

  // Access the config property using dot notation
  const configPath = argv.config;

  // Load AgentsConfig from the specified JSON file
  const agentsConfig = loadAgentsConfig(configPath);

  // Set the maximum number of communication cycles from environment variables or default to 10
  const MAX_COMMUNICATION_CYCLES = parseInt(process.env.MAX_COMMUNICATION_CYCLES || "10");

  // Initialize and run the appropriate system based on the configuration type
  if (agentsConfig.type === "hierarchical") {
    const hierarchicalSystem = new HierarchicalSystem(
      agentsConfig,
      ELIZA_BASE_URL,
      MAX_COMMUNICATION_CYCLES
    );
    await hierarchicalSystem.run();
  // } else if (agentsConfig.type === "joint") {
  //   const jointSystem = new JointSystem(
  //     agentsConfig,
  //     ELIZA_BASE_URL,
  //     MAX_COMMUNICATION_CYCLES
  //   );
  //   await jointSystem.run();
  } else {
    console.error(`Unsupported system type: ${agentsConfig.type}`);
    process.exit(1);
  }
}

main().then();
