import { renderHook, act } from "@testing-library/react-hooks";
import { useInputValue } from "./useInputValue";

describe("useInputValue", () => {
  it("Should render component", () => {
    const { result } = renderHook(() => useInputValue());

    expect(result.current.onChange).toBeInstanceOf(Function);
  });

  it("Should render initial Value", () => {
    const { result } = renderHook(() => useInputValue());

    act(() => {
      result.current.onChange({
        target: { value: "testing" },
      });
    });
    expect(result.current.value).toBe("testing");
  });
});
