import { create } from "zustand";

export const useCharacterStore = create((set) => ({
  selectedCharacters: [],
  addCharacter: (character) =>
    set((state) => ({
      selectedCharacters: [...state.selectedCharacters, character],
    })),
  removeCharacter: (id) =>
    set((state) => ({
      selectedCharacters: state.selectedCharacters.filter(
        (character) => character.id !== id
      ),
    })),
}));
