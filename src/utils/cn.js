/**
 * Class Name Utility
 * Combines clsx for conditional classes with tailwind-merge for deduplication
 * 
 * Usage:
 * cn('px-4 py-2', isActive && 'bg-brand', className)
 */

import { clsx } from 'clsx'

/**
 * Basic class name combiner using clsx
 * 
 * For projects without tailwind-merge, this provides clean conditional class composition
 * 
 * @param {...any} inputs - Class names, objects, arrays, or conditional expressions
 * @returns {string} Combined class string
 */
export function cn(...inputs) {
    return clsx(inputs)
}

// If you want to add tailwind-merge later for deduplication:
// npm install tailwind-merge
// 
// import { clsx } from 'clsx'
// import { twMerge } from 'tailwind-merge'
// 
// export function cn(...inputs) {
//   return twMerge(clsx(inputs))
// }

export default cn


