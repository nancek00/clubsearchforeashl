import { createQueryStringFromObj } from "./reqeustbuilder";

test('Build Query String ?x=y', () => {
    const obj = {x: "y"};
    const st = createQueryStringFromObj(obj)
    expect(st).toBe('?x=y');
});

test('Build Query String ?x=y%20z', () => {
    const obj = {x: "y z"};
    const st = createQueryStringFromObj(obj)
    expect(st).toBe('?x=y%20z');
});