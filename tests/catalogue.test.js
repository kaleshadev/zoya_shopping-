const test = require("node:test");
const assert = require("node:assert/strict");

const products = [
  {
    id: 1,
    name: "Classic T-Shirt",
    category: "Men",
    price: 799,
  },
  {
    id: 2,
    name: "Summer Dress",
    category: "Women",
    price: 1499,
  },
  {
    id: 3,
    name: "Running Shoes",
    category: "Footwear",
    price: 2499,
  },
];

test("catalogue should contain products", () => {
  assert.ok(products.length > 0);
});

test("every product should have required fields", () => {
  products.forEach((product) => {
    assert.ok(product.id);
    assert.ok(product.name);
    assert.ok(product.category);
    assert.ok(product.price > 0);
  });
});

test("product IDs should be unique", () => {
  const ids = products.map((product) => product.id);
  assert.equal(new Set(ids).size, ids.length);
});

test("product prices should be positive", () => {
  products.forEach((product) => {
    assert.ok(product.price > 0);
  });
});
