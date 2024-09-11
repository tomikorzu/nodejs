const os = require("node:os");
console.log("Información del sistema operativo: ");
console.log("-----------------------------------");
console.log("Plataforma: " + os.platform());
console.log("Versión del SO: " + os.version());
console.log("Arquitectura del SO: " + os.arch());
console.log("Tiempo activo del SO: " + os.uptime());
console.log("Memoria total: " + os.totalmem() / 1024 / 1024);
console.log("Memoria libre: " + os.freemem() / 1024 / 1024);
console.log("CPU: ");
console.log("Modelo: " + os.cpus()[0].model);
console.log("Velocidad: " + os.cpus()[0].speed + " MHz");
console.log("Núcleos: " + os.cpus().length);
console.log("Núcleos: ");
os.cpus().forEach((core, index) => {
  console.log("Núcleo " + (index + 1) + ": ");
  console.log("Modelo: " + core.model);
  console.log("Velocidad: " + core.speed + " MHz");
});

console.log("uptime: " + os.uptime());
