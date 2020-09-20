const Bicycle = require('../../models/bicycle');

beforeEach(() => { Bicycle.allBicycle = []; });

describe('Bicycle.allBicycle', () => {
  it('Starts empty', () => {
    expect(Bicycle.allBicycle.length).toBe(0);
  });
});

describe('Bicycle.add', () => {
  it('add one', () => {
    expect(Bicycle.allBicycle.length).toBe(0);

    const a = new Bicycle(1, 'red', 'veloz', [10.982342, -74.836292]);

    Bicycle.add(a);

    expect(Bicycle.allBicycle.length).toBe(1);
    expect(Bicycle.allBicycle[0]).toBe(a);
  });
});

describe('Bicycle.findById', () => {
  it('return bicycle with id 1', () => {

    expect(Bicycle.allBicycle.length).toBe(0);

    const bicy1 = new Bicycle(1, 'green', 'veloz', [10.982342, -74.836292]);
    const bicy2 = new Bicycle(2, 'blue', 'veloz', [10.983184, -74.775524]);

    Bicycle.add(bicy1);
    Bicycle.add(bicy2);

    const targetBicy = Bicycle.findById(1);

    expect(targetBicy.id).toBe(bicy1.id);
    expect(targetBicy.color).toBe(bicy1.color);
    expect(targetBicy.model).toBe(bicy1.model);
  });
});

describe('Bicycle.removeById', () => {
  it('remove bicycle with id 1', () => {
    expect(Bicycle.allBicycle.length).toBe(0);

    const bicy1 = new Bicycle(1, 'green', 'veloz', [10.982342, -74.836292]);
    const bicy2 = new Bicycle(2, 'blue', 'veloz', [10.983184, -74.775524]);

    Bicycle.add(bicy1);
    Bicycle.add(bicy2);

    let targetBicy = Bicycle.findById(bicy1.id);

    expect(targetBicy.id).toBe(bicy1.id);

    Bicycle.removeById(bicy1.id);

    expect(Bicycle.allBicycle[0].id).toBe(bicy2.id);
  });
});