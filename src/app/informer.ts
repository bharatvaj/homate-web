import { Room } from './room'
export class Informer {
    private static instance: Informer;
    private _temperature: number;
    private _rooms: Room[];
    private constructor() { }
    static getInstance() {
        if (!Informer.instance) {
            Informer.instance = new Informer();
            Informer.instance._temperature = 0;
        }
        return Informer.instance;
    }

    get rooms(): Room[] {
        //todo fetch from firebase?
        this._rooms = [
            new Room("https://image.flaticon.com/icons/svg/895/895474.svg", "Master Bedroom"),
            new Room("https://image.flaticon.com/icons/svg/895/895474.svg", "Living Area")
        ];
        return this._rooms;
    }

    get temperature(): number {
        return this._temperature;
    }
    set temperature(score) {
        this._temperature = score;
    }
    increaseTemperature(): number {
        return this._temperature += 1;
    }
    decreaseTemperature(): number {
        return this._temperature -= 1;
    }
}
