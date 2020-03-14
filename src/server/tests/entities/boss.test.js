const Boss = require('./../../entities/boss');

test('created boss expect max life based on number of players', () => {
    const players = 5;
    let boss = new Boss(players);
    expect(boss.maxLife).toBe(5000);
});

test('created boss expect life to be equals max life', () => {
    const players = 5;
    let boss = new Boss(players);
    expect(boss.life).toBe(5000);
});

test('created boss expect attack to be 150', () => {
    const players = 1;
    let boss = new Boss(players);
    expect(boss.attack).toBe(150);
});

test('created boss expect percent of heal to be 30', () => {
    const players = 1;
    let boss = new Boss(players);
    expect(boss.percentOfHeal).toBe(0.30);
});

test('created boss expect is alive', () => {
    const players = 1;
    let boss = new Boss(players);
    expect(boss.alive).toBeTruthy();
});

test('boss take damage expect life smaller than maxlife', () => {
    const players = 1;
    let boss = new Boss(players);
    boss.takeDamage(100);
    expect(boss.life).toBeLessThan(boss.maxLife);
    expect(boss.alive).toBeTruthy();
});

test('boss take to many damage and expect died', () => {
    const players = 1;
    let boss = new Boss(players);
    boss.takeDamage(boss.maxLife);
    expect(boss.life).toBe(0);
    expect(boss.alive).toBeFalsy();
});

test('boss heal expect max life', () => {
    const players = 1;
    let boss = new Boss(players);
    boss.takeDamage(100);
    boss.heal();
    expect(boss.life).toBe(boss.maxLife);
    expect(boss.alive).toBeTruthy();
});

test('boss heal expect life less than max life', () => {
    const players = 1;
    let boss = new Boss(players);
    boss.takeDamage(500);
    boss.heal();
    expect(boss.life).toBeLessThan(boss.maxLife);
    expect(boss.alive).toBeTruthy();
});