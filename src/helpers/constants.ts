export const os = {
  apple: 0,
  normal: 1,
} as const;
export type Os = (typeof os)[keyof typeof os];
