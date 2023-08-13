
const fs = require('fs');

// Write information about Node.js architecture to a file called nodejs_architecture.txt
const text = `
Node.js is a server-side JavaScript runtime environment. It is built on Chrome's V8 JavaScript engine and can be used to create web applications, APIs, and command-line tools.
Node.js is asynchronous and event-driven, which makes it efficient for handling multiple requests at the same time. It is also very scalable, making it a good choice for high-traffic applications.`

const writeFile = (path, data, cb) => {
  fs.writeFile(path, data, (err) => {
    if (err) {
      console.log(err);
    } else {
      console.log('Information about Node.js architecture has been written to nodejs_architecture.txt');
      cb();
    }
  });
};

writeFile('nodejs_architecture.txt', text, () => {
  const readFile = (path) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  };


  const advantagesOfNodeJS = `
  * **Easy to learn and use:** Node.js is a very easy language to learn and use, even for beginners.
  * **Robust and scalable:** Node.js is a very robust and scalable platform, making it a good choice for high-traffic applications.
  * **Open source:** Node.js is an open source platform, which means that it is free to use and modify.
  * **Active community:** Node.js has a large and active community, which means that there are plenty of resources available for help and support.
  `;
  
  const appendData = (path, data) => {
    fs.appendFile(path, data, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('Data has been appended to nodejs_architecture.txt');
      }
    });
  };
  
  appendData('nodejs_architecture.txt', advantagesOfNodeJS);
  
  const readData = (path) => {
    fs.readFile(path, (err, data) => {
      if (err) {
        console.log(err);
      } else {
        console.log(data);
      }
    });
  };

  const deleteFile = (path) => {
    fs.unlink(path, (err) => {
      if (err) {
        console.log(err);
      } else {
        console.log('File deleted successfully');
      }
    });
  };
  
  
  readFile('nodejs_architecture.txt');
  readData('nodejs_architecture.txt');
  deleteFile('nodejs_architecture.txt');
});