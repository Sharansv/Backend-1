const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user);



//method returns the system uptime in seconds
console.log(`the system uptime is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem : os.totalmem(),
    freeMem: os.freemem(),
    homedir: os.homedir(),
    hostname: os.hostname(),
    version : os.version(),
    loadavg : os.loadavg(),
    priority :os.getPriority(),
    network: os.networkInterfaces(),
    temdir:os.tmpdir()
}

console.log(currentOS);
