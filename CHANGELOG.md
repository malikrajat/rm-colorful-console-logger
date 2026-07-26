# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2026-07-28

### Added
- `Log.success(msg, clr)` - Log success messages with customizable color (default: green)
- `Log.error(msg, clr)` - Log error messages with customizable color (default: red)
- `Log.info(msg, clr)` - Log info messages with customizable color (default: blue)
- Customizable color parameter for all log methods

### Changed
- Migrated from functional `colorfulLog` to class-based `Log` API
- Improved log message formatting with bold font-weight

### Package
- Updated TypeScript to ^6.0.3
- Updated tsup to ^8.5.1
- Added `dev` and `prepare` scripts
- Added `engines` field requiring Node.js >=18.0.0
- Added `publishConfig` for public npm access
- Enhanced description with API details
- Expanded keywords for better npm discoverability (log, colour, colorize, colorful, debugging, console.log, output, terminal-log, pretty-print, stylish, styled-logs, console-colors, node, javascript, typescript)
- Added `contributors` field

## [1.0.0] - 2024-01-15

### Added
- Initial release with `Log` class API for colorful console logging
- Three log levels: success (green), error (red), and info (blue)
- ESM module support for modern JavaScript environments
- TypeScript declarations for type safety
- tsup bundler configuration for optimized builds

### Features
- Bold font-weight styling for all log messages
- Zero external runtime dependencies
- Compatible with Angular 8+, React 16.8+, and Node.js 14+

### Package
- Initial TypeScript configuration with ES2020 target
- Source files in `src/` directory
- Distribution output to `dist/` directory