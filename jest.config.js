module.exports = {
  setupFilesAfterEnv: ['<rootDir>/testSetup.js'],
  moduleNameMapper: {
    '^.+\\.(css|less|scss)$': 'identity-obj-proxy'
  }
};
