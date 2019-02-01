import * as colors from "../utils/colors";
import * as breakPoints from "../utils/breakPoints";

test("Colors match snapshot", () => {
  expect(colors).toMatchSnapshot();
});

test("Break points match snapshot", () => {
  expect(breakPoints).toMatchSnapshot();
});
