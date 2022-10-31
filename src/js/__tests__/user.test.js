import Character from '../user';
import Team from '../group';

test('Добавление выбранного персонажа в команду', () => {
  expect(() => {
    const team = new Team();
    const char = new Character('Ivan', 'Daemon');
    
    team.add(char);
    team.add(char);
  }).toThrow('Персонаж с таким именем уже добавлен');
});

test('Добавление произвольного количества персонажей', () => {
  const team = new Team();
  const char1 = new Character('Ivan', 'Daemon');
  const char2 = new Character('Anna', 'Daemon');
  const char3 = new Character('Oleg', 'Daemon');

  team.addAll([char1, char2, char3]);

  expect(team.members.size).toBe(3);
});

test('Конвертация в массив', () => {
  const team = new Team();
  const char1 = new Character('Ivan', 'Daemon');
  const char2 = new Character('Anna', 'Daemon');
  const char3 = new Character('Oleg', 'Daemon');

  team.addAll([char1, char2, char3]);

  expect(team.toArray()).toEqual([char1, char2, char3]);
});
