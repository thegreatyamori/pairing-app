import Parser from "../helpers/json";

export default class StorageService {
    constructor(storage_name) {
        this.storage_name = storage_name;
    }

    getLast() {
        const items = this.getAll();
        const lastItem = items[items.length - 1];
        return lastItem;
    }

    getAll() {
        return Parser.fromJSON(localStorage.getItem(this.storage_name)) || [];
    }

    store(item) {
        const items = this.getAll();
        const parseItems = Parser.asJSON([...items, item]);

        localStorage.setItem(this.storage_name, parseItems);

        return "ok";
    }

    remove(id) {
        const items = this.getAll();
        const new_items = items.filter(item => !Object.values(item).includes(id));
        const parseItems = Parser.asJSON(new_items);

        localStorage.setItem(this.storage_name, parseItems);
    }

    // storeAll(items) {
    //     const parseItems = Parser.asJSON([...members, items]);
    // }
}
