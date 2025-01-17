import type { ClassValue } from "clsx";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import type { z } from "zod";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function shuffleArray<T>(array: T[]): T[] {
  return array.sort(() => Math.random() - 0.5);
}

function shuffleObject<T extends Record<string, unknown>>(object: T) {
  const keys = Object.keys(object);
  const values = Object.values(object);
  const shuffledValues = shuffleArray(values);

  return Object.fromEntries(keys.map((key, index) => [key, shuffledValues[index]])) as T;
}

function getRandom<T>(array: T[]): T | undefined {
  return array[Math.floor(Math.random() * array.length)];
}

async function safeFetch<TData>(url: string, scheme: z.ZodSchema<TData>): Promise<TData> {
  const response = await fetch(url);
  if (!response.ok) throw new Error("Network response was not ok");

  return scheme.parse(await response.json());
}

function getRandomValue(obj: Record<string, unknown>) {
  const keys = Object.keys(obj);
  return getRandom(keys);
}

function stall(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

export { cn, getRandom, getRandomValue, safeFetch, shuffleArray, shuffleObject, stall };
