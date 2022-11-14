
// export const print=(message) => log(message, new Date().toJSON().toString())

// export const log=(message, timestamp = new Date().toJSON()) => console.log(`${timestamp.toString()}: ${message}`);


let drivers = ["first", "second", "third"]

for (let i = (drivers.length-1); i >= 0; i--) {
    console.log(drivers[i])
}