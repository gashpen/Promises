/* eslint-disable class-methods-use-this */
import read from './reader';
import json from './parser';
import GameSaving from './GameSaving';

export default class GameSavingLoader {
  load() {
    const p = new Promise((resolve) => {
      setTimeout(() => {
        const data = read();
        resolve(data);
      }, 1000);
    });

    p.then((data) => {
      const p2 = new Promise((resolve) => {
        setTimeout(() => {
          const value = json(data);
          resolve(value);
        }, 1000);
      });
      p2.then((value) => {
        const save = new GameSaving(value);
        console.log(save.saving);
      });
    });
  }
}
