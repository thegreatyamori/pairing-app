import Member from "../models/member";
import StorageService from "./storage.service";

const storageService = new StorageService("members");

function addMember(name) {
    const nextId = crypto.randomUUID();
    const member = new Member(nextId, name);
    const result = storageService.store(member);

    return { ...member, status: result };
}

function getAllMembers() {
    return storageService.getAll();
}

function deleteMember(userId) {
    storageService.remove(userId);
}

export { addMember, getAllMembers, deleteMember };
