import Character from '../app';

const obj = {
  name: "Max",
  type: "Swordsman",
  attack: 40, defence: 10, health: 100, level: 1};

test('should Character', () => {
  let result = new Character("Max", "Swordsman");
  expect(result).toEqual(obj);
});
test('should error name', () => {
  try {
      let result = new Character("M", "Swordsman");
  } catch (error) {
      expect(error.message).toEqual("error name size");
  }
});
test('should error type', () => {
  try {
      let result = new Character("Max", "Swordsm");
  } catch (error) {
      expect(error.message).toEqual("error type");
  }
});