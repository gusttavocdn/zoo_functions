import { faker } from '@faker-js/faker/locale/pt_BR';
import { calculateEntry, countEntrants } from '../src/calculateEntry';

const { name } = faker;

describe('8 - Implemente a função `calculateEntry` que calcula o valor total da entrada', () => {
  it('ao receber um array de visitantes, retorna um objeto com a contagem', () => {
    const entrants = [
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 18 },
      { name: name.fullName(), age: 18 },
      { name: name.fullName(), age: 50 }
    ];

    const actual = countEntrants(entrants);
    const expected = { adult: 2, child: 3, senior: 1 };
    expect(actual).toEqual(expected);
  });

  it('ao receber um array de pessoas com 3 crianças, 2 pessoas adultas e 1 pessoa mais velha retorna o valor correto', () => {
    const entrants = [
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 18 },
      { name: name.fullName(), age: 18 },
      { name: name.fullName(), age: 50 }
    ];

    const actual = calculateEntry(entrants);
    const expected = 187.94;
    expect(actual).toEqual(expected);
  });

  it('ao receber um array com 1 pessoa adulta retorna o valor correto', () => {
    const entrants = [{ name: name.fullName(), age: 18 }];
    const actual = calculateEntry(entrants);
    const expected = 49.99;
    expect(actual).toEqual(expected);
  });

  it('ao receber um array com 1 pessoa mais velha retorna o valor correto', () => {
    const entrants = [{ name: name.fullName(), age: 50 }];
    const actual = calculateEntry(entrants);
    const expected = 24.99;
    expect(actual).toEqual(expected);
  });

  it('ao receber um array com 1 criança retorna o valor correto', () => {
    const entrants = [{ name: name.fullName(), age: 5 }];
    const actual = calculateEntry(entrants);
    const expected = 20.99;
    expect(actual).toEqual(expected);
  });

  it('ao receber um array com 1 criança e 1 pessoa mais velha retorna o valor correto', () => {
    const entrants = [
      { name: name.fullName(), age: 5 },
      { name: name.fullName(), age: 50 }
    ];
    const actual = calculateEntry(entrants);
    const expected = 45.98;
    expect(actual).toEqual(expected);
  });
});
