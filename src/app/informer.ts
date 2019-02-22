import { Room } from './room'
import * as firebase from 'firebase/app';
import 'firebase/firestore';
export class Informer {
    private static instance: Informer;
    private _temperature: number;
    private _rooms: Room[];
    private constructor() {
        // Initialize Firebase
        var config = {
            apiKey: "AIzaSyCdWLtBoFdlno9ZMABmF9CjqHwDN23qpJo",
            authDomain: "homate-aacb0.firebaseapp.com",
            projectId: "homate-aacb0",
        };
        firebase.initializeApp(config);
    }
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
            new Room("", "")
        ]
        firebase.firestore().collection("rooms").get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                this._rooms.push(doc.data() as Room);
            });
        });
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
