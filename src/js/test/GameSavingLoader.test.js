import GameSavingLoader from '../GameSavingLoader';

const game = new GameSavingLoader();

test('test', () => game.load().then((data) => {
  expect(data).toBe({
    created: 1546300800,
    id: 9,
    userInfo: {
      id: 1, level: 10, name: 'Hitman', points: 2000,
    },
  });
}));
