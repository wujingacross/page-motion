import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * 合并 CSS 类名的工具函数
 * 结合了 clsx 的条件类名处理和 tailwind-merge 的 Tailwind CSS 类名去重
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
