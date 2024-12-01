// // src/index.ts
//
// const logStyles = {
//     info: 'color: blue; font-weight: bold;',
//     warning: 'color: orange; font-weight: bold;',
//     error: 'color: red; font-weight: bold;',
// };
//
// export const colorfulLog = (message: string, level: keyof typeof logStyles = 'info') => {
//     const style = logStyles[level] || logStyles.info;
//     console.log(`%c${message}`, style);
// };

export class Log {
    static success(msg: string, clr: string = 'green') {
        // const { fileName, lineNumber } = this.getFileNameLineNumber()
        console.log(`%c ${msg}`, `color: ${clr}; font-weight: bold;`);
    }

    static error(msg: string, clr: string = 'red') {
        // const { fileName, lineNumber } = this.getF   ileNameLineNumber()
        console.log(`%c ${msg}`, `color: ${clr}; font-weight: bold;`);
    }

    static info(msg: string, clr: string = 'blue') {
        // const { fileName, lineNumber } = this.getFileNameLineNumber()
        console.log(`%c ${msg}`, `color: ${clr}; font-weight: bold;`);
    }

    // static getFileNameLineNumber() {
    //     const stack = new Error().stack;
    //     if (!stack) throw new Error('Failed to capture stack trace.');
    
    //     // Parse the stack to get the correct caller frame
    //     console.log(stack)
    //     const stackLines = stack.split('\n');
    //     const callerStack = stackLines[3]; // Move to the third line (caller of logMessage)
    
    //     const match = callerStack.match(/\((.*):(\d+):(\d+)\)/);
    //     if (!match) throw new Error('Failed to parse stack trace.');
    
    //     const fileName = match[1];
    //     const lineNumber = match[2];
    //     return {
    //         fileName,
    //         lineNumber
    //     }
    // }
}


