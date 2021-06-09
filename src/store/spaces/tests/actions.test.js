import {
  FETCH_SPACES_SUCCESS,
  fetchSpacesSuccess,
  fetchSpaces,
} from "../actions";

import axios from "axios";
jest.mock("axios");

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

jest.mock("axios");

describe("#fetchSpaces", () => {
  describe("when called", () => {
    test("should dispatch an action FETCH_SPACES_SUCCESS", async () => {
      const fakeSpaces = [{}, {}];
      const response = { data: { spaces: { rows: fakeSpaces } } };
      axios.get.mockImplementationOnce(() => Promise.resolve(response));
      const dispatch = jest.fn();
      const getState = jest.fn().mockReturnValueOnce({ spaces: [] });
      await fetchSpaces()(dispatch, getState);
      expect(dispatch).toHaveBeenCalledWith(fetchSpacesSuccess(fakeSpaces));
      expect(getState).toHaveBeenCalledTimes(1);
    });
  });
});
