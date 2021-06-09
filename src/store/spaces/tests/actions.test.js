import { FETCH_SPACES_SUCCESS, fetchSpacesSuccess } from "../actions";

describe("#fetchSpacesSuccess", () => {
  describe("if given an array of spaces", () => {
    const spaces = [{}, {}];
    test("should return an action object", () => {
      const expected = {
        type: FETCH_SPACES_SUCCESS,
        payload: spaces,
      };
      expect(fetchSpacesSuccess(spaces)).toEqual(expected);
    });
    expect(fetchSpacesSuccess(spaces).payload).toHaveLength(spaces.length);
  });
  describe("if given a null argument", () => {
    test("action.payload should be null", () => {
      expect(fetchSpacesSuccess(null).payload).toBeNull();
    });
  });
});
