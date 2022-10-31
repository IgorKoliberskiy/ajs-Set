export default class Team {
  constructor() {
    this.members = new Set();
  }

  add(char) {
    if (this.members.has(char)) {
      throw new Error('Персонаж с таким именем уже добавлен');
    }

    this.members.add(char);
  }

  addAll(characterList) {
    this.members = new Set([...this.members, ...characterList]);
  }

  toArray() {
    return [...this.members];
  }
}