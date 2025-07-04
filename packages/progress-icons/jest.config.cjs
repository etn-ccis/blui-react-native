module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'node',
    collectCoverage: true,
    coverageThreshold: {
        global: {
            lines: 75,
        },
    },
    coverageReporters: ['text', 'cobertura'],
};
