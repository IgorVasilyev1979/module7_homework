function ElectricalAppliance(powerСonsumption) {
    this.powСons = powerСonsumption;
    this.getPowerСonsumption = function() {
        return this.powСons;
    }
    this.isPowerOn = false;
    this.setPowerOn = function() {
        this.isPowerOn = true;
    }
    this.setPowerOff = function() {
        this.isPowerOn = false;
    }
    this.getIsPowerOn = function() {
        return this.isPowerOn;
    }
}

function Fan(powerСonsumption, fanSpeed = 100) {
    this.powСons = powerСonsumption;
    this.fanSpeed = fanSpeed;
    this.getFanSpeed = function() {
        return this.fanSpeed;
    }
    this.setFanSpeed = function(fSpeed) {
        this.fanSpeed = fSpeed;
    }
}

Fan.prototype = new ElectricalAppliance();

function Lamp(powerСonsumption, timeout = 60) {
    this.powСons = powerСonsumption;
    this.turnOffTimeout = timeout;
    this.getTurnOffTimeout = function() {
        return this.turnOffTimeout;
    }
    this.setTurnOffTimeout = function(time) {
        this.turnOffTimeout = time;
    }
}

Lamp.prototype = new ElectricalAppliance();

const myFan = new Fan(30, 25);
const myLamp = new Lamp(50, 100);

console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));
myFan.setPowerOn();
console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));
myLamp.setPowerOn();
console.log((myFan.getIsPowerOn() ? myFan.getPowerСonsumption() : 0) + (myLamp.getIsPowerOn() ? myLamp.getPowerСonsumption() : 0));