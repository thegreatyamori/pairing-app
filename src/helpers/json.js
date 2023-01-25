export default class Parser {
    static asJSON(_object) {
        return JSON.stringify(_object);
    }

    static fromJSON(_object) {
        return JSON.parse(_object);
    }
}
