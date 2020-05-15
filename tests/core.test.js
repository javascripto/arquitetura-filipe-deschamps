/// <reference types="jest" />

const createCore = require('../src/core');

function createMock() {
  function start() {
    console.log('[mock] ...');
  }
  function stop() {
    console.log('[mock] ...');
  }
  return {
    start,
    stop,
  };
}

describe('Core quando importado', () => {
  test('deve ter o metodo #start e #stop', () => {
    const core = createCore();
    expect(core).toHaveProperty('start');
    expect(core).toHaveProperty('stop');
  });
});

describe('Code quando inicializado', () => {
  test('não deve retornar erros', () => {
    const databaseMock = createMock();
    const webserverMock = createMock();
    const core = createCore({
      database: databaseMock,
      webserver: webserverMock,
    });
    expect(() => {
      core.start();
    }).not.toThrow();
  });
});
