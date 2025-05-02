// jest.config.js
export default {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.ts'], // Correct setup for jest-dom
  testEnvironment: 'jsdom',
  transform: {
    "^.+\\.tsx?$": ["ts-jest", {}],
  },
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/src/$1", // Support for "@/..." imports
  },
};
