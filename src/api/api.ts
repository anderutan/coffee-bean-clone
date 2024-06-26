import { coffeeData } from './data';
import type { Coffee, Review } from '@/lib/type';

export const getCoffeeList = (): Promise<Coffee[]> => {
  return new Promise((resolve, reject) => {
    if (!coffeeData) {
      return setTimeout(() => reject(new Error('Coffee list not found')), 250);
    }

    setTimeout(() => resolve(coffeeData), 250);
  });
};

export const getCoffeeById = (id: string): Promise<Coffee> => {
  const coffee = coffeeData.find((coffee) => coffee.id === id);
  return new Promise((resolve, reject) => {
    if (!coffee) {
      return setTimeout(() => reject(new Error('Coffee list not found')), 250);
    }

    setTimeout(() => resolve(coffee), 250);
  });
};

type UpdateReviewsProps = {
  id: string;
  review: Review;
};

export const updateReviews = ({ id, review }: UpdateReviewsProps) => {
  return new Promise((resolve, reject) => {
    const coffeeIndex = coffeeData.findIndex((coffee) => coffee.id === id);

    if (coffeeIndex === -1) {
      return setTimeout(() => reject(new Error('Coffee not found')), 250);
    }

    const coffee = coffeeData[coffeeIndex];

    if (!coffee.reviews) {
      return setTimeout(() => reject(new Error('Review list not found')), 250);
    }

    const updatedCoffee = {
      ...coffee,
      reviews: [...coffee.reviews, review],
    };

    coffeeData[coffeeIndex] = updatedCoffee;

    setTimeout(() => resolve(updatedCoffee.reviews), 250);
  });
};
