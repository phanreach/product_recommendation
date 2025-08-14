// Utility function for className merging (tailwind, shadcn/ui pattern)
export function cn(...inputs: Array<string | undefined | false | null>) {
  return inputs.filter(Boolean).join(' ');
}
