import { coffeeData } from './data';
import type { Coffee } from '@/lib/type';

export const getCoffeeList = (): Promise<Coffee[]> => {
  return new Promise((resolve, reject) => {
    if (!coffeeData) {
      return setTimeout(() => reject(new Error('Coffee list not found')), 250);
    }

    setTimeout(() => resolve(coffeeData), 250);
  });
};

export const getCoffeeById = (id: string): Promise<Coffee> => {
  const coffee = coffeeData.find((coffee) => coffee.id === parseInt(id));
  return new Promise((resolve, reject) => {
    if (!coffee) {
      return setTimeout(() => reject(new Error('Coffee list not found')), 250);
    }

    setTimeout(() => resolve(coffee), 250);
  });
};
