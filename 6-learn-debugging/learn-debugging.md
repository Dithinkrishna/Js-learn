Debugging       
 Debugging is the process of testing, finding, and reducing bugs (errors) in computer programs.
Code Debugging 
 1. Programming code might contain syntax errors, or logical errors.
 2. Many of these errors are difficult to diagnose.
 3. Often, when programming code contains errors, nothing will happen. There are no error messages, and you will get no indications where to search for errors.
 4. Searching for (and fixing) errors in programming code is called code debugging.
Chrome        
 Open the browser > More Tools > Developer Tools > [ ctrl+shift+I ]
JavaScript Debuggers   
 Debugging is not easy. But fortunately, all modern browsers have a built-in JavaScript debugger.
 Built-in debuggers can be turned on and off, forcing errors to be reported to the user.
 With a debugger, you can also set breakpoints (places where code execution can be stopped), and examine variables while the code is executing.
Methods Of Debugging    
 1. console.log()           :If your browser supports debugging, you can use console.log() to display JavaScript values in the debugger window.
 2. Setting Breakpoints     : In the debugger window, you can set breakpoints in the JavaScript code.
                              At each breakpoint, JavaScript will stop executing, and let you examine JavaScript values.
                              After examining values, you can resume the execution of code (typically with a play button).
 3. The debugger Keyword    : The debugger keyword stops the execution of JavaScript, calls (if available)          debugging function.                
                              This has the same function as setting a breakpoint in the debugger.
                              If no debugging is available, the debugger statement has no effect.
                              With the debugger turned on, this code will stop executing before it executes the third line.
Major Browsers' Debugging Tools : 
1. Chrome
2. Edge
3. Firefox
4. Opera
5. Safari
WE HAVE SEVEN DEBUGGING TOOLS IN CHROME BROWSER 
1.ELEMENTS:
   By using the "Elements" tab effectively, you can inspect and manipulate the HTML and CSS of your web page, helping you debug layout issues and understand the structure of your page's content.
2.CONSOLE:
   The "Console" tab in Chrome Developer Tools provides an interactive JavaScript console where you can execute JavaScript commands, log information, and debug your code.
   We can execute JavaScript code directly in the Console tab. Type your code into the input field at the bottom and press `Enter` to execute it.
3.SOURCES:
   The "Sources" tab is a powerful tool for debugging and inspecting JavaScript source code in web applications. 
   "Set breakpoints in your JavaScript code by clicking on the line numbers. A blue marker indicates the breakpoint.
   Reload the page or trigger the relevant JavaScript code to pause execution at the breakpoints.
    Use debugging controls such as Step Over (`F10`), Step Into (`F11`), Step Out (`Shift + F11`), Continue (`F8`), and Pause (`Ctrl + \` or `Cmd + \`) to navigate through the code execution."
4.NETWORK:
   The "Network" tab in Chrome Developer Tools provides detailed information about the network activity of a webpage, including requests, responses, timings, and performance metrics. Here's how you can use it:
5.PERFORMANCE:
   Performance in debugging developer tools is crucial for ensuring smooth and efficient software development processes. 
6.MEMORY:
   Memory debugging refers to the process of identifying and resolving issues related to memory usage in software applications during the debugging phase of development. This involves detecting and fixing memory-related errors such as memory leaks, buffer overflows, and dangling pointers that can cause program crashes, performance degradation, or security vulnerabilities. 
7.APPLICATION:
   In the context of memory debugging, an "application" refers to the software program or system being developed or maintained. Memory debugging techniques and tools are applied to this application to identify and resolve memory-related issues such as memory leaks, buffer overflows, and memory corruption errors.
