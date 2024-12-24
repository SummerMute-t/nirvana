// src/utils/logger.ts

import * as winston from 'winston';
import * as path from 'path';
import fs from "fs";

/**
 * Creates a Winston logger with a dynamic filename based on system type and timestamp.
 * @param systemType - The type of the system ('hierarchical' or 'joint').
 * @returns A configured Winston logger instance.
 */
export function createLogger(systemType: string): winston.Logger {
  const logDir = path.resolve(__dirname, '../../logs');
  const logTimestamp = new Date().toISOString().replace(/[:.]/g, '-');

  return winston.createLogger({
    level: 'info',
    format: winston.format.combine(
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss'
      }),
      winston.format.printf(info => `${info.timestamp} [${info.level.toUpperCase()}]: ${info.message}`)
    ),
    transports: [
      new winston.transports.File({ filename: path.join(logDir, `nirvana-${systemType}-${logTimestamp}.log`) }),
      new winston.transports.Console()
    ]
  });
}

/**
 * Saves the communication report to the reports directory as a Markdown file.
 */
export function saveReport(systemType: string, content: string): void {
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-');
  const reportPath = path.resolve(__dirname, '../../reports', `nirvana-${systemType}-${timestamp}.md`);
  fs.writeFileSync(reportPath, content, 'utf8');
  console.log(`Report saved to ${reportPath}`);
}
