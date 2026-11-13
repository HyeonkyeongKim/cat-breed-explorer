
import cats from "../data/cats.json";

export async function getCats() {
  return cats;
}

export async function getRandomCat() {
  if (cats.length === 0) {
    throw new Error("No cat data available");
  }

  const randomIndex = Math.floor(Math.random() * cats.length);
  return cats[randomIndex];
}
