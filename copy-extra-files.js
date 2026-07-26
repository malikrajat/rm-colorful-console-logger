/*
created a file at root pf project named copy-extra-files.js
and update command in package.json commadn of build
*/
import fs from 'fs-extra';

const dist = 'dist/';

fs.copySync('CHANGELOG.md', `${dist}/CHANGELOG.md`);
fs.copySync('LICENSE', `${dist}LICENSE`);
fs.copySync('README.md', `${dist}/README.md`);
fs.copySync('.npmignore', `${dist}/.npmignore`);
fs.copySync('.gitignore', `${dist}/.gitignore`);

if (fs.existsSync('assets')) {
  fs.copySync('assets', `${dist}assets`);
}

console.log('Extra files copied successfully!');
