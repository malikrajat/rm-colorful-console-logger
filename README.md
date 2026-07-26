# Colorful Console Logger

<p align="left">
  <img src="https://img.shields.io/npm/v/colorful-console-logger.svg" alt="npm version">
  <img src="https://img.shields.io/badge/Stability-production--ready-success" alt="Production ready">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="license">
  <img src="https://img.shields.io/badge/Standalone-supported-success" alt="Standalone API">
  <img src="https://img.shields.io/badge/SSR-compatible-success" alt="SSR compatible">
  <img src="https://img.shields.io/badge/TypeScript-strict-blue" alt="Strict TS">
  <img src="https://img.shields.io/badge/tree--shaking-supported-success" alt="Tree-shakable">
  <img src="https://img.shields.io/badge/Side%20Effects-none-blue" alt="No side effects">
  <img src="https://img.shields.io/badge/Linting-enabled-success" alt="Linting">
  <img src="https://img.shields.io/badge/Tests-covered-blue" alt="Tests">
  <img src="https://img.shields.io/badgeCoverage-90%25-success" alt="Coverage">
  <img src="https://img.shields.io/badge/A11y-WCAG%202.1-blue" alt="Accessibility compliant">
  <img src="https://img.shields.io/badge/Maintained-yes-success" alt="Maintained">
  <img src="https://img.shields.io/bundlephobia/minzip/colorful-console-logger" alt="minzipped size">
  <img src="https://img.shields.io/badge/Dependencies-none-success" alt="No dependencies">
  <img src="https://img.shields.io/npm/dw/colorful-console-logger" alt="weekly downloads">
  <img src="https://img.shields.io/badge/SemVer-compliant-blue" alt="SemVer">
  <img src="https://img.shields.io/npm/dt/colorful-console-logger" alt="total downloads">
  <img src="https://img.shields.io/npm/last-update/colorful-console-logger" alt="Last update">
  <img src="https://img.shields.io/github/issues/malikrajat/colorful-console-logger" alt="Open issues">
  <img src="https://img.shields.io/github/stars/malikrajat/colorful-console-logger" alt="GitHub stars">
</p>


## See It In Action

<div align="center">

  <img src="https://github.com/malikrajat/colorful-console-logger/blob/main/assets/demo.jpg" alt="colorful-console-logger Demo" width="800"/>

</div>

---

<p align="left">

A lightweight and developer-friendly logging library that allows you to print colorful messages to the console, complete with the filename and line number of the caller. This library is compatible with **Angular**, **React**, and plain **JavaScript** projects.

If you like this plugin, please give it a star.

</div>

---

## Live Demo & Playground

<div align="center">

<table>
  <tr>
    <td align="center" width="50%">
      <a href="https://stackblitz.com/edit/vitejs-vite-uufslecf" target="_blank">
        <img src="https://img.shields.io/badge/StackBlitz_Demo-1976D2?style=for-the-badge&logo=stackblitz&logoColor=white" alt="StackBlitz Demo"/>
      </a>
      <br/>
      <sub><b>Interactive Playground</b></sub><br/>
      <sub>Try all features live in your browser</sub>
    </td>
    <td align="center" width="50%">
      <a href="#quick-start">
        <img src="https://img.shields.io/badge/Code_Examples-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Examples"/>
      </a>
      <br/>
      <sub><b>Complete Examples</b></sub><br/>
      <sub>Copy-paste ready code samples</sub>
    </td>
  </tr>
  <tr>
    <td align="center" width="50%">
      <br/>
      <a href="https://www.npmjs.com/package/colorful-console-logger" target="_blank">
        <img src="https://img.shields.io/badge/npm_Package-CB3837?style=for-the-badge&logo=npm&logoColor=white" alt="npm Package"/>
      </a>
      <br/>
      <sub><b>npm Registry</b></sub><br/>
      <sub>Install and view package details</sub>
    </td>
    <td align="center" width="50%">
      <br/>
      <a href="https://github.com/malikrajat/colorful-console-logger" target="_blank">
        <img src="https://img.shields.io/badge/GitHub_Repo-181717?style=for-the-badge&logo=github&logoColor=white" alt="GitHub Repository"/>
      </a>
      <br/>
      <sub><b>Source Code</b></sub><br/>
      <sub>Star, fork, and contribute</sub>
    </td>
  </tr>
</table>

</div>

---

## Features

- Log messages in vibrant colors.
- Automatically fetches the file and line number of the caller.
- Compatible with modern frontend frameworks like **Angular**, **React**, **Vue.js** and vanilla JavaScript.
- Follows best practices for security and performance.
- Lightweight and easy to integrate.

---

## Installation

Install the package via npm:

```bash
  npm install rm-colorful-console-logger
```

Or with Yarn:

```bash
  yarn add rm-colorful-console-logger
```

---
<div id="#quick-start"></div>

## Usage

### Basic Usage

Import and use the library in your project:

```javascript
import { Log } from 'rm-colorful-console-logger';

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

## Changelog

See [CHANGELOG.md](CHANGELOG.md)  for release history and updates.

---

### Latest Release

Check the [releases page](https://github.com/malikrajat/rm-colorful-console-logger/releases) for the most recent version and updates.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

**TL;DR:** You can use this library freely in commercial and personal projects.

### MIT License Summary

**You can:**
- Use commercially
- Modify the code
- Distribute
- Use privately

**You must:**
- Include the license and copyright notice

**You cannot:**
- Hold the author liable

---

## Browser Compatibility

### Supported Browsers

| Browser | Version | Support Level | Notes |
|---------|---------|---------------|-------|
| Chrome | 80+ | Full Support | Recommended browser |
| Firefox | 75+ | Full Support | Works perfectly |
| Safari | 13+ | Full Support | iOS and macOS |
| Edge | 80+ | Full Support | Chromium-based |
| Opera | 67+ | Full Support | Works well |
| Samsung Internet | 12+ | Full Support | Mobile support |

### Mobile Support

- iOS Safari 13+
- Chrome for Android 80+
- Samsung Internet
- All mobile browsers with modern JavaScript support

### Download Behavior by Platform

| Platform | Behavior |
|----------|----------|
| Desktop Chrome/Firefox/Edge | Direct download to Downloads folder |
| Desktop Safari | May prompt for download location |
| iOS Safari | Opens download manager |
| Android Chrome | Downloads to Downloads folder |
| Mobile Safari | Shows share sheet with save option |

### Not Supported

- Internet Explorer (all old versions)
- Very old mobile browsers (pre-2019)


---

## FAQ

### What is rm-colorful-console-logger?

rm-colorful-console-logger is a lightweight, developer-friendly logging library that allows you to print colorful, structured messages to the browser console. It automatically captures the filename and line number of the caller, making debugging faster and more intuitive.

### How is this different from console.log()?

Unlike plain `console.log()`, this library provides:
- Predefined log methods (`Log.success()`, `Log.error()`, `Log.info()`) with semantic color coding
- Automatic file name and line number detection for each log call
- Consistent formatting across your entire application
- Better readability during debugging sessions

### Which frameworks are supported?

The library works with **Angular**, **React**, **Vue.js**, and plain **JavaScript** projects. It has zero dependencies and is framework-agnostic.

### Is this compatible with server-side rendering (SSR)?

Yes, the library is fully compatible with SSR frameworks like Angular Universal and Next.js. It safely handles environments where `console` may not be fully available.

### Does the library support TypeScript?

Yes, it includes full TypeScript type definitions out of the box with strict type checking support.

### What colors are available?

The library supports standard color names: `green`, `red`, `blue`, `yellow`, `cyan`, `magenta`, `white`, `gray`, and more. Each log method (`success`, `error`, `info`) has its own default color.

### Can I use custom colors?

Yes, you can pass any valid CSS color name or hex code as the second parameter to any log method.

### Is this library tree-shakable?

Yes, the library is fully tree-shakable. Unused methods and code are automatically removed during the build process, resulting in smaller bundle sizes.

### Are there any dependencies?

No, the library has **zero external dependencies**. It is completely standalone and self-contained.

### How do I report a bug or request a feature?

Visit the [GitHub Issues page](https://github.com/malikrajat/rm-colorful-console-logger/issues) to report bugs or request new features. You can also use the [Discussions](https://github.com/malikrajat/rm-colorful-console-logger/discussions) page for general questions.

### What is the bundle size?

The library is extremely lightweight with a minimal footprint. Check the badges at the top of this README for the latest minzipped size.

### Is this library maintained?

Yes, the library is actively maintained with regular updates, bug fixes, and feature improvements.

---

## Statistics

[![npm downloads](https://img.shields.io/npm/dt/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger)
[![npm version](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger)
[![GitHub issues](https://img.shields.io/github/issues/malikrajat/rm-colorful-console-logger.svg)](https://github.com/malikrajat/rm-colorful-console-logger/issues)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-colorful-console-logger.svg?style=social)](https://github.com/malikrajat/rm-colorful-console-logger/stargazers)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/malikrajat/rm-colorful-console-logger/blob/main/LICENSE)


---

## Support This Project

If **rm-colorful-console-logger** has helped you build better  applications, please consider:

If this library has saved you development time and helped create amazing image sliders in your projects, **please consider giving it a star!** 

 **Why star this repo?**
- Help other developers discover this lightweight, optimized solution
- Support continued development and improvements
- Show appreciation for free, quality tools
- Boost visibility in the community
- Increases visibility in the community
- Supports ongoing development and maintenance
- Encourages more open-source contributions
- Helps other developers find quality tools

###  **Want More Quality Libraries?**

This is just one of several useful libraries I've created. **[Explore my other Angular/ React / Vue.js & web development libraries](https://github.com/malikrajat?tab=repositories)** that might solve your next challenge:

-  **Utility libraries** for common development tasks
-  **UI components** for better user experiences  
-  **Performance tools** for optimization
-  **Mobile-friendly solutions** for responsive apps

**Found them helpful?** A star on each repo you find useful helps tremendously! It takes just one click but means the world to open-source maintainers.

[![GitHub](https://img.shields.io/badge/View_All_Repositories-181717?logo=github)](https://github.com/malikrajat?tab=repositories)
[![GitHub followers](https://img.shields.io/github/followers/malikrajat?style=social)](https://github.com/malikrajat)
[![GitHub stars](https://img.shields.io/github/stars/malikrajat/rm-colorful-console-logger?style=social)](https://github.com/malikrajat/rm-colorful-console-logger/stargazers)

---


## Support and Community

### Getting Help

Need assistance? We're here to help!

| Support Channel | Link | Best For |
|----------------|------|----------|
| Bug Reports | [Report Bug](https://github.com/malikrajat/rm-colorful-console-logger/issues/new?template=bug_report.md) | Technical issues |
| Feature Requests | [Request Feature](https://github.com/malikrajat/rm-colorful-console-logger/issues/new?template=feature_request.md) | New features |
| Discussions | [Join Discussion](https://github.com/malikrajat/rm-colorful-console-logger/discussions) | General questions |
| Email | [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com?subject=rm-colorful-console-logger%20Support) | Direct support |

### Documentation

- [GitHub Repository](https://github.com/malikrajat/rm-colorful-console-logger)
- [npm Package](https://www.npmjs.com/package/rm-colorful-console-logger)
- [Live Demo](https://stackblitz.com/edit/vitejs-vite-uufslecf)
- [Changelog](https://github.com/malikrajat/rm-colorful-console-logger/blob/main/CHANGELOG.md)

### Community

- Star the repository to show support
- Watch for updates and new releases
- Share your use cases and feedback
- Contribute code or documentation

### Stay Updated

- Follow the project on [GitHub](https://github.com/malikrajat/rm-colorful-console-logger)
- Star the repository for updates
- Watch for new releases


---

## Acknowledgments

This library was created to provide a simple, lightweight solution for your applications. Special thanks to the  community for their feedback and contributions.

Special thanks to:
- **Contributors** - Thank you for making this library better
- **Community** - For feedback and feature requests


---

## Other Libraries

### UI Components

| Library                           | Description                                                              | npm Link                                                                                                        |
|-----------------------------------| ------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------- |
| **rm-range-slider**               | Lightweight two-thumb range slider with tooltips and color customization | [![npm](https://img.shields.io/npm/v/rm-range-slider.svg)](https://www.npmjs.com/package/rm-range-slider)       |
| **rm-ng-range-slider**            | Angular-specific version of the dual range slider                        | [![npm](https://img.shields.io/npm/v/rm-ng-range-slider.svg)](https://www.npmjs.com/package/rm-ng-range-slider) |
| **rm-carousel**                   | Simple, responsive carousel component                                    | [![npm](https://img.shields.io/npm/v/rm-carousel.svg)](https://www.npmjs.com/package/rm-carousel)               |
| **rm-image-slider**               | Minimal image slider with smooth transitions                             | [![npm](https://img.shields.io/npm/v/rm-image-slider.svg)](https://www.npmjs.com/package/rm-image-slider)       |
| **rm-ng-star-rating**             | Configurable Angular star rating component with readonly mode            | [![npm](https://img.shields.io/npm/v/rm-ng-star-rating.svg)](https://www.npmjs.com/package/rm-ng-star-rating)   |
| **@codewithrajat/rm-ng-typeahead** | Angular autocomplete/typeahead component with search suggestions and keyboard navigation | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-typeahead) |
| **@codewithrajat/rm-ng-editor**                  | Rich text editor component for Angular applications with customizable toolbar support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-editor) |

---

### PDF & Export Libraries

| Library                                | Description                                                  | npm Link                                                                                                                                        |
| -------------------------------------- | ------------------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-export-to-csv**                | Export JSON data to CSV with zero dependencies               | [![npm](https://img.shields.io/npm/v/rm-ng-export-to-csv.svg)](https://www.npmjs.com/package/rm-ng-export-to-csv)                               |
| **@codewithrajat/rm-ng-pdf-export**    | Image-based PDF export tool for Angular applications         | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-pdf-export.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-pdf-export)       |
| **@codewithrajat/rm-ng-structure-pdf** | Generate structured PDFs for reports, invoices, or documents | [![npm](https://img.shields.io/npm/v/@codewithrajat/rm-ng-structure-pdf.svg)](https://www.npmjs.com/package/@codewithrajat/rm-ng-structure-pdf) |
| **@codewithrajat/rm-ng-pdf-viewer** | Angular PDF viewer component with zoom, navigation, and document rendering support | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-pdf-viewer) |

---

### Chrome Extension

| Library | Description | Link                                                                                                                                    |
|----------|-------------|-----------------------------------------------------------------------------------------------------------------------------------------|
| **quickocr** | Chrome extension that extracts text from images using OCR technology | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/quickocr/releases)                                     |
| **readLoude** | Chrome extension that read you web page loude e.g article etc. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/readLoude/releases)                            |
| **ai-assistant-reply** | AI Chrome extension to auto generate reply on linked in posts. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/ai-assistant-reply/releases) |

---

### VS Code Extension

| Library | Description | Link                                                                                                                                      |
|----------|-------------|-------------------------------------------------------------------------------------------------------------------------------------------|
| **dead-css-cleaner** | VS Code extension for identifying and cleaning unused CSS styles | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/dead-css-cleaner/releases)      |
| **file-coverage-insight** | VS Code extension for auto generated component file coverage automatelly on open. | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/file-coverage-insight/releases) |

---

### Desktop Applications - All Plateform

| Library | Description | Link                                                                                                                           |
|----------|-------------|--------------------------------------------------------------------------------------------------------------------------------|
| **deepwork** | Cross-platform productivity application for focus sessions and deep work tracking | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/deepwork/releases)          |
| **JsSandbox** | Cross-platform JavaScript playground and code execution environment | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/JsSandbox/releases) |

---

### Device Detection

| Library                        | Description                                             | npm Link                                                                                                                        |
| ------------------------------ | ------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------- |
| **rm-ng-device-detection**     | Detect device type, OS, and browser in Angular          | [![npm](https://img.shields.io/npm/v/rm-ng-device-detection.svg)](https://www.npmjs.com/package/rm-ng-device-detection)         |

---

### Notifications

| Library           | Description                                       | npm Link                                                                                              |
| ----------------- | ------------------------------------------------- | ----------------------------------------------------------------------------------------------------- |
| **rm-pushnotify** | Lightweight push-style toast notification utility | [![npm](https://img.shields.io/npm/v/rm-pushnotify.svg)](https://www.npmjs.com/package/rm-pushnotify) |
| **@codewithrajat/rm-toast-notification** | Cross-platform toast and desktop notification library for web, Angular, and desktop applications | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-toast-notification) |


---

### Layout & Dynamic Rendering

| Library | Description | Link |
|----------|-------------|------|
| **rm-ng-dynamic-layout** | Dynamic layout rendering engine for Angular applications using JSON-driven UI configuration | [![GitHub](https://img.shields.io/badge/GitHub-Repository-blue?logo=github)](https://github.com/malikrajat/rm-ng-dynamic-layout) |

---

### Developer Tools & Extensions

| Library | Description | Link                                                                                                                            |
|----------|-------------|---------------------------------------------------------------------------------------------------------------------------------|
| **rm-colorful-console-logger** | Structured and colorized console logging utility for developers | [![npm](https://img.shields.io/npm/v/rm-colorful-console-logger.svg)](https://www.npmjs.com/package/rm-colorful-console-logger) |

---

### Meta & Personal Branding

| Library         | Description                                                      | npm Link                                                                                          |
| --------------- | ---------------------------------------------------------------- | ------------------------------------------------------------------------------------------------- |
| **about-rajat** | Developer portfolio package for branding and quick personal info | [![npm](https://img.shields.io/npm/v/about-rajat.svg)](https://www.npmjs.com/package/about-rajat) |

---


### All Packages

Browse all my packages:
- [npm: @codewithrajat](https://www.npmjs.com/~codewithrajat)
- [npm: rajatmalik](https://www.npmjs.com/~rajatmalik)
- [GitHub: @malikrajat](https://github.com/malikrajat?tab=repositories)

---

## Author

**Rajat Malik**

Full-Stack Developer and Frontend Architect at Siemens with 14+ years building scalable enterprise platforms, specializing in micro-frontends, AI-native development, React, and Angular.  
Author of 10+ open-source libraries and 100+ technical articles, driving innovation through developer-friendly tools, performance optimization, and AI-assisted workflows.

### GET IN TOUCH

- Portfolio:  [rajatmalik.dev](https://rajatmalik.dev)
- Email:      [mr.rajatmalik@gmail.com](mailto:mr.rajatmalik@gmail.com)
- LinkedIn:   [errajatmalik](https://linkedin.com/in/errajatmalik)
- GitHub:     [@malikrajat](https://github.com/malikrajat)
- npm:        [rajatmalik](https://www.npmjs.com/~rajatmalik)

### SOCIAL PRESENCE
- Threads:    [rajatmalik](https://www.threads.net/@er.rajatmalik)
- Twitter/X:  [rajatmalik](https://x.com/er_rajatmalik)
- BlueSky:    [rajatmalik](http://devrajat.bsky.social)

### CONTENT & WRITING

- Medium:    [rajatmalik]( https://medium.com/@codewithrajat)
- Dev.to:    [rajatmalik]( https://dev.to/codewithrajat)
- Substack:   [rajatmalik](https://codewithrajat.substack.com)
- Hashnode:   [rajatmalik](https://hashnode.com/@codeswithrajat)

---

<p align="center">
  <p align="center">Made with care and love by <a href="https://rajatmalik.dev">Rajat Malik</a> for the community</p>
</p>

<p align="center">
  <a href="https://github.com/malikrajat/rm-colorful-console-logger/stargazers">Star on GitHub</a> •
  <a href="https://www.npmjs.com/package/rm-colorful-console-logger">View on npm</a> •
  <a href="https://github.com/malikrajat/rm-colorful-console-logger/issues">Report Issue</a> 
</p>

<p align="center">
  Made with dedication by <a href="https://rajatmalik.dev">Rajat Malik</a>
</p>