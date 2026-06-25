import add from "../server.js";

test("add karna", ()=>{
    expect(add(2, 3)).toBe(5);
})