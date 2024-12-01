# Colorful Console Logger

[![npm version](https://img.shields.io/npm/v/colorful-console-logger.svg)](https://www.npmjs.com/package/colorful-console-logger)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dw/colorful-console-logger.svg)](https://www.npmjs.com/package/colorful-console-logger)

A lightweight and developer-friendly logging library that allows you to print colorful messages to the console, complete with the filename and line number of the caller. This library is compatible with **Angular**, **React**, and plain **JavaScript** projects.

---

## 🚀 Features

- 🌈 Log messages in vibrant colors.
- 📂 Automatically fetches the file and line number of the caller.
- 🛠️ Compatible with modern frontend frameworks like **Angular**, **React**, and vanilla JavaScript.
- 🔒 Follows best practices for security and performance.
- 📦 Lightweight and easy to integrate.

---

## 📦 Installation

Install the package via npm:

```bash
  npm install @rm/rm-colorful-console-logger
```

Or with Yarn:

```bash
  yarn add @rm/rm-colorful-console-logger
```

---

## 🛠️ Usage

### Basic Usage

Import and use the library in your project:

```javascript
import { Log } from '@rm/rm-colorful-console-logger';

Log.success('Hello, World!', 'green'); // Logs "Hello, World!" in green
Log.error('This is an error message', 'red'); // Logs "This is an error message" in red
Log.info('This is an error message', 'blue'); // Logs "This is an error message" in blue
```

### Parameters

| Parameter | Type     | Default                                       | Description                                                        |
|-----------|----------|-----------------------------------------------|--------------------------------------------------------------------|
| `message` | `string` | `Required`                                    | The message to log.                                                |
| `color`   | `string` | Optional<br/> Default is `green` `red` `blue` | The color for the message (e.g., `green` `red`, `blue`, `yellow`). |

---

### Advanced Usage

To log messages dynamically based on runtime conditions:

```javascript
const isError = true;
const message = isError ? 'Something went wrong!' : 'All systems operational.';
const color = isError ? 'red' : 'green';

Log.success(message, color);
Log.error(message, color);
Log.info(message, color);
```
---

## 🌐 Compatibility

This library works seamlessly in:

- Angular 8+
- React 16.8+
- Node.js 14+

*(Feel free to add compatibility notes for other environments.)*

---

## 🛡️ Security

This library does not store or expose any sensitive information. It is designed to operate purely on the client side. If you find any vulnerabilities, please report them.

---

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](./LICENSE) file for details.

---

## Issues

If you identify any errors in this component, or have an idea for an improvement, please open
an [issue](https://github.com/malikrajat/rm-colorful-console-logger/issues). I am excited to see what the community thinks of this
project, and I would love your input!

## Author services

Are you interested in this library but lacks features? Write to the author, he can do it for you.

## Author

**Rajat Malik**

- [github/malikrajat](https://github.com/malikrajat)

