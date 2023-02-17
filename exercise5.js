class ElectricalAppliance {
    constructor(powerСonsumption) {
        this.powСons = powerСonsumption;
        this.isPowerOn = false;
    }
    getPowerСonsumption() {
        return this.powСons;
    }
    setPowerOn() {
        this.isPowerOn = true;
    }
    setPowerOff() {
        this.isPowerOn = false;
    }
    getIsPowerOn() {
        return this.isPowerOn;
    }
}

class Fan extends ElectricalAppliance {
    constructor(fanSpeed, powerСonsumption) {
        super(powerСonsumption);
        this.fanSpeed = fanSpeed;
    }
    getFanSpeed() {
        return this.fanSpeed;
    }
    setFanSpeed(fSpeed) {
        this.fanSpeed = fSpeed;
    }
}

class Lamp extends ElectricalAppliance {
    constructor(timeout, powerСonsumption) {
        super(powerСonsumption);
        this.turnOffTimeout = timeout;
    }
    getTurnOffTimeout() {
        return this.turnOffTimeout;
    }
    setTurnOffTimeout(time) {
        this.turnOffTimeout = time;
    }
}

const myFan = new Fan(25, 30);
const myLamp = new Lamp(100, 50);

console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));
myFan.setPowerOn();
console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));
myLamp.setPowerOn();
console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));