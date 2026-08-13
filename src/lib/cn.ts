/**
 * Margin Resume Builder - Utility: cn()
 * Combines clsx and tailwind-merge for optimal className handling
 */

import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

/**
 * Combines multiple class values into a single string,
 * handling Tailwind CSS class conflicts correctly.
 *
 * @example
 * cn('px-4 py-2', 'p-2') // 'p-2' (last wins for conflicts)
 * cn('text-red-500', condition && 'text-blue-500') // conditional classes
 * cn('base-class', { 'active-class': isActive }) // object syntax
 */
export function cn(...inputs: ClassValue[]): string {
  return twMerge(clsx(inputs));
}

/**
 * Creates a variant-based class name combiner.
 * Useful for component variants.
 *
 * @example
 * const buttonCn = createCn('inline-flex items-center justify-center');
 * buttonCn('bg-blue-500', 'hover:bg-blue-600');
 */
export function createCn(base: string) {
  return (...inputs: ClassValue[]): string => cn(base, ...inputs);
}
