import { get, post, remove } from "./request";

export const fetchNotes = () => {
	return get("/notes");
};