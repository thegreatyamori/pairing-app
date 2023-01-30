import Rotation from "../models/rotation";
import StorageService from "./storage.service";

const storageService = new StorageService("rotations");

function addRotation(date, matrix) {
    const nextId = crypto.randomUUID();
    const _date = new Date(date);
    const rotation = new Rotation(nextId, _date, matrix);
    const result = storageService.store(rotation);

    return { ...rotation, status: result };
}

function getAllRotations() {
    return storageService.getAll();
}

function getCurrentRotation() {
    return storageService.getLast() || { matrix: [] };
}

function generateRotations(currentDate, rotationDays) {
    const weekIterations = 4;
    const initialDay = currentDate.getDate();
    const rotations = [];

    for (let index = 0; index < weekIterations; index++) {
        const nextId = crypto.randomUUID();
        const nextDay = initialDay + (rotationDays * index);
        const date = new Date().setDate(nextDay);

        if (nextDay > 31)
            break;

        rotations.push(new Rotation(nextId, date));
    }

    return {
        year: currentDate.getFullYear(),
        month: currentDate.toLocaleDateString("en-US", {month: "long"}),
        rotations: rotations
    }
}

export { addRotation, getAllRotations, generateRotations, getCurrentRotation };
