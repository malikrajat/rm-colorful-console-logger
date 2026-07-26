// =============================================================================
// rm-colorful-console-logger — A lightweight, zero‑dependency colorful logger
// =============================================================================
// v3.1.0 — Fully typed, tree‑shakable, XSS‑safe, production‑ready.
// =============================================================================

// -----------------------------------------------------------------------------
// Types & Interfaces
// -----------------------------------------------------------------------------

/** Supported standard color names. */
export type LogColor =
  | 'black' | 'red' | 'green' | 'yellow' | 'blue' | 'magenta' | 'cyan'
  | 'white' | 'gray' | 'grey' | 'darkred' | 'darkgreen' | 'darkblue'
  | 'orange' | 'pink' | 'purple' | 'brown' | 'coral' | 'teal'
  | 'aqua' | 'lime' | 'navy' | 'olive' | 'maroon' | 'silver' | (string & {});

/** Predefined log levels. */
export type LogLevel = 'success' | 'error' | 'warn' | 'info' | 'debug' | 'trace';

/** Options for styling a single log call. */
export interface LogStyleOptions {
  /** Text color (CSS color value). */
  color?: string;
  /** Background color (CSS color value). */
  background?: string;
  /** Font size (e.g. '14px' or '1.2em'). */
  fontSize?: string;
  /** Additional CSS properties appended verbatim (e.g. 'text-shadow: 1px 1px 2px gray'). */
  extra?: string;
}

/** Global configuration applied to every log call. */
export interface LoggerConfig {
  /** When `true`, all logging is suppressed. Default: `false`. */
  enabled: boolean;
  /** When `true`, prepend an ISO‑8601 timestamp to every message. Default: `false`. */
  showTimestamp: boolean;
  /** When `true`, show the caller's file‑name and line‑number (Node / modern browsers). Default: `false`. */
  showCallerInfo: boolean;
  /** Optional string prepended before every message (e.g. `[MyApp]`). */
  prefix?: string;
  /**
   * Level‑based enable map.
   * When a key is present and its value is `false`, that level is silenced.
   * All levels are enabled by default.
   */
  levels?: Partial<Record<LogLevel, boolean>>;
  /**
   * Custom color overrides per level.
   * The logger uses these colors when no explicit colour is passed.
   */
  colors?: Partial<Record<LogLevel, string>>;
}

// -----------------------------------------------------------------------------
// Defaults
// -----------------------------------------------------------------------------

const DEFAULT_COLORS: Record<LogLevel, string> = {
  success: 'green',
  error:   'red',
  warn:    'orange',
  info:    'blue',
  debug:   'gray',
  trace:   'darkgray',
};

const DEFAULT_CONFIG: LoggerConfig = {
  enabled: true,
  showTimestamp: false,
  showCallerInfo: false,
  levels: {},
  colors: {},
};

// -----------------------------------------------------------------------------
// Internal state
// -----------------------------------------------------------------------------

let globalConfig: LoggerConfig = { ...DEFAULT_CONFIG };

// -----------------------------------------------------------------------------
// Helpers
// -----------------------------------------------------------------------------

/**
 * Sanitise a string so it cannot break out of a `%c` CSS context.
 * Keeps safe characters and escapes everything else.
 */
function sanitiseCSS(input: unknown): string {
  const str = String(input ?? '');
  // Allow only alphanumerics, spaces, common punctuation & CSS‑safe chars.
  // Strip potential injection vectors like quotes, parentheses, braces, semicolons.
  return str.replace(/[^a-zA-Z0-9 #.,%\-_()/[\]'"]/g, '');
}

/**
 * Sanitise a log message to prevent prototype‑pollution / XSS when displayed
 * in a browser console that interprets `%c` / `%s` etc.
 */
function sanitiseMessage(input: unknown): string {
  if (input === null) return 'null';
  if (input === undefined) return 'undefined';
  const str = String(input);
  // Replace % sequences that console would interpret (except %c which we handle)
  return str.replace(/%[cdfioOs]/g, '%%$&');
}

/**
 * Get the caller's file‑name and line‑number from the call stack.
 * Returns `null` when the stack is unavailable (some browsers / strict CSP).
 */
function getCallerInfo(): { file: string; line: string } | null {
  try {
    const stack = new Error().stack;
    if (!stack) return null;

    const lines = stack.split('\n');
    // The stack looks like:
    //   Error
    //     at getCallerInfo (src/index.ts:XX:YY)
    //     at log (src/index.ts:ZZ:WW)
    //     at Object.<anonymous> (user-file.ts:AA:BB)   <-- we want this one
    const callerLine = lines[3];
    if (!callerLine) return null;

    // Try modern format:  at fn (file:line:col)
    const modern = callerLine.match(/\((.+?):(\d+):\d+\)/);
    if (modern) return { file: modern[1]!, line: modern[2]! };

    // Fallback:  at file:line:col
    const fallback = callerLine.match(/at (.+?):(\d+):\d+/);
    if (fallback) return { file: fallback[1]!, line: fallback[2]! };

    return null;
  } catch {
    return null;
  }
}

/**
 * Build a CSS style string from a colour name / hex / rgb value
 * merged with optional `LogStyleOptions`.
 */
function buildStyle(
  color: string | undefined,
  options?: LogStyleOptions,
): string {
  const parts: string[] = ['font-weight: bold'];

  if (color) {
    parts.push(`color: ${sanitiseCSS(color)}`);
  }
  if (options?.background) {
    parts.push(`background: ${sanitiseCSS(options.background)}`);
  }
  if (options?.fontSize) {
    parts.push(`font-size: ${sanitiseCSS(options.fontSize)}`);
  }
  if (options?.extra) {
    parts.push(options.extra);
  }

  return parts.join('; ');
}

// -----------------------------------------------------------------------------
// Core logging method
// -----------------------------------------------------------------------------

/**
 * Internal core — all public methods delegate here.
 *
 * @param level     The log level.
 * @param color     Explicit colour (overrides the level default).
 * @param messages  One or more values to log.
 * @param options   Optional `LogStyleOptions` for advanced styling.
 */
function log(
  level: LogLevel,
  color: string | undefined,
  messages: unknown[],
  options?: LogStyleOptions,
): void {
  // ── Guards ───────────────────────────────────────────────────────────
  if (!globalConfig.enabled) return;
  if (globalConfig.levels?.[level] === false) return;

  // ── No messages → early exit ─────────────────────────────────────────
  if (messages.length === 0) return;

  // ── Resolve colour ───────────────────────────────────────────────────
  const resolvedColor = color
    ?? globalConfig.colors?.[level]
    ?? DEFAULT_COLORS[level];

  // ── Build prefix ─────────────────────────────────────────────────────
  const parts: string[] = [];

  if (globalConfig.prefix) {
    parts.push(`[${globalConfig.prefix}]`);
  }

  if (globalConfig.showTimestamp) {
    parts.push(new Date().toISOString());
  }

  if (globalConfig.showCallerInfo) {
    const info = getCallerInfo();
    if (info) {
      parts.push(`(${info.file}:${info.line})`);
    }
  }

  // ── Build the final console call ────────────────────────────────────
  const style = buildStyle(resolvedColor, options);

  // Browsers only support a single `%c` per console call for styling.
  // For multiple arguments we join them with a space.
  const safeMessages = messages.map((m) => sanitiseMessage(m));
  const joined = [...parts, ...safeMessages].join(' ');

  // Map level to the correct console method.
  switch (level) {
    case 'error':
      console.error('%c' + joined, style);
      break;
    case 'warn':
      console.warn('%c' + joined, style);
      break;
    case 'debug':
    case 'trace':
      console.debug('%c' + joined, style);
      break;
    default:
      console.log('%c' + joined, style);
      break;
  }
}

// -----------------------------------------------------------------------------
// Public API — tree‑shakable named exports
// -----------------------------------------------------------------------------

/**
 * Log a **success** (green) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `green`.
 * @param rest    Additional values to log (joined with spaces).
 */
export function success(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('success', clr ?? DEFAULT_COLORS.success, [msg, ...rest]);
}

/**
 * Log an **error** (red) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `red`.
 * @param rest    Additional values to log.
 */
export function error(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('error', clr ?? DEFAULT_COLORS.error, [msg, ...rest]);
}

/**
 * Log a **warning** (orange) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `orange`.
 * @param rest    Additional values to log.
 */
export function warn(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('warn', clr ?? DEFAULT_COLORS.warn, [msg, ...rest]);
}

/**
 * Log an **info** (blue) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `blue`.
 * @param rest    Additional values to log.
 */
export function info(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('info', clr ?? DEFAULT_COLORS.info, [msg, ...rest]);
}

/**
 * Log a **debug** (gray) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `gray`.
 * @param rest    Additional values to log.
 */
export function debug(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('debug', clr ?? DEFAULT_COLORS.debug, [msg, ...rest]);
}

/**
 * Log a **trace** (darkgray) message.
 * @param msg     The primary message.
 * @param clr     Optional colour override. Default: `darkgray`.
 * @param rest    Additional values to log.
 */
export function trace(
  msg: unknown,
  clr?: string,
  ...rest: unknown[]
): void {
  log('trace', clr ?? DEFAULT_COLORS.trace, [msg, ...rest]);
}

/**
 * Log a message with **full custom styling**.
 * Useful when you need a background‑colour, font‑size, or extra CSS props.
 *
 * @example
 * ```ts
 * styledLog('Hello!', { color: 'white', background: 'rebeccapurple', fontSize: '18px' });
 * ```
 */
export function styledLog(
  msg: unknown,
  options: LogStyleOptions,
  ...rest: unknown[]
): void {
  log('info', options.color, [msg, ...rest], options);
}

/**
 * Log a message with **custom CSS** passed as a raw string.
 * ⚠ Avoid user‑supplied values in `rawCss` to prevent XSS in browser consoles.
 *
 * @example
 * ```ts
 * customLog('Urgent', 'color: red; background: yellow; font-size: 2em; font-weight: bold;', 'Check this!');
 * ```
 */
export function customLog(
  msg: unknown,
  rawCss: string,
  ...rest: unknown[]
): void {
  // Sanitise the raw CSS string to prevent injection.
  // The utility removes characters that could break out of a CSS context.
  const safe = rawCss.replace(/[^a-zA-Z0-9 #.,%\-_()/[\]'";:!]/g, '');
  const joined = [String(msg ?? ''), ...rest.map((m) => String(m ?? ''))].join(' ');
  const safeMsg = sanitiseMessage(joined);
  console.log('%c' + safeMsg, safe);
}

// -----------------------------------------------------------------------------
// Configuration
// -----------------------------------------------------------------------------

/**
 * Override the global logger defaults.
 *
 * @example
 * ```ts
 * configureLogger({
 *   enabled: process.env.NODE_ENV !== 'production',
 *   showTimestamp: true,
 *   showCallerInfo: true,
 *   prefix: 'MyApp',
 *   levels: { debug: false, trace: false },
 *   colors: { success: 'lime', error: 'crimson' },
 * });
 * ```
 */
export function configureLogger(config: Partial<LoggerConfig>): void {
  // Merge shallowly — `levels` and `colors` sub‑objects are replaced, not merged.
  globalConfig = {
    ...globalConfig,
    ...config,
    levels: {
      ...globalConfig.levels,
      ...(config.levels ?? {}),
    },
    colors: {
      ...globalConfig.colors,
      ...(config.colors ?? {}),
    },
  };
}

/**
 * Reset the global configuration to factory defaults.
 */
export function resetLoggerConfig(): void {
  globalConfig = { ...DEFAULT_CONFIG };
}

/**
 * Return a snapshot of the current configuration.
 */
export function getLoggerConfig(): Readonly<LoggerConfig> {
  return { ...globalConfig };
}

// -----------------------------------------------------------------------------
// Backward‑compatible class wrapper
// -----------------------------------------------------------------------------

/**
 * Legacy class‑based API.
 *
 * ⚠ *Deprecated* – prefer using the tree‑shakable named exports (`success`,
 * `error`, `info`, `warn`, `debug`, `trace`) for better bundle size.
 *
 * @example (class API — still works)
 * ```ts
 * import { Log } from 'rm-colorful-console-logger';
 * Log.success('Done');
 * ```
 */
export class Log {
  static success(msg: unknown, clr?: string, ...rest: unknown[]): void {
    success(msg, clr, ...rest);
  }

  static error(msg: unknown, clr?: string, ...rest: unknown[]): void {
    error(msg, clr, ...rest);
  }

  static warn(msg: unknown, clr?: string, ...rest: unknown[]): void {
    warn(msg, clr, ...rest);
  }

  static info(msg: unknown, clr?: string, ...rest: unknown[]): void {
    info(msg, clr, ...rest);
  }

  static debug(msg: unknown, clr?: string, ...rest: unknown[]): void {
    debug(msg, clr, ...rest);
  }

  static trace(msg: unknown, clr?: string, ...rest: unknown[]): void {
    trace(msg, clr, ...rest);
  }

  static styledLog(msg: unknown, options: LogStyleOptions, ...rest: unknown[]): void {
    styledLog(msg, options, ...rest);
  }

  static customLog(msg: unknown, rawCss: string, ...rest: unknown[]): void {
    customLog(msg, rawCss, ...rest);
  }

  static configure(config: Partial<LoggerConfig>): void {
    configureLogger(config);
  }

  static resetConfig(): void {
    resetLoggerConfig();
  }

  static getConfig(): Readonly<LoggerConfig> {
    return getLoggerConfig();
  }
}

// -----------------------------------------------------------------------------
// Default export (convenience)
// -----------------------------------------------------------------------------

/** Default export — the `Log` class. */
export default Log;