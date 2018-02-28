import * as help from "./helper.js";

describe("generators", () => {
  it("doesn't explode", () => {
    expect(true).toEqual(true);
  });

  it("generates initial URL", () => {
    const url = {
      value: `https://api.unsplash.com/collections/featured/?client_id=${
        process.env.REACT_APP_SPLASH_ID
      }&per_page=6&page=1`,
      done: false
    };
    expect(help.generateUrl().next()).toEqual(url);
  });

  it("generates incremented page counts in url", () => {
    const generator = help.generateUrl();

    expect(generator.next().value).toEqual(
      `https://api.unsplash.com/collections/featured/?client_id=${process.env.REACT_APP_SPLASH_ID}&per_page=6&page=1`
    );
    expect(generator.next().value).toEqual(
      `https://api.unsplash.com/collections/featured/?client_id=${process.env.REACT_APP_SPLASH_ID}&per_page=6&page=2`
    );
  });

  describe("page count generator", () => {
    it("should produce first default value", () => {
      const pages = help.generatePages();
      const one = pages.next();
      expect(one.value).toEqual(1);
      expect(!one.done);
    });

    it("should produce the second value", () => {
      const one = { value: 1, done: false };
      const two = { value: 2, done: false };
      const generator = help.generatePages();

      expect(generator.next()).toEqual(one);
      expect(generator.next()).toEqual(two);
    });
  });
});
