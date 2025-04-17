// Polyfill for scrollIntoView in JSDOM
if (!Element.prototype.scrollIntoView) {
  Element.prototype.scrollIntoView = () => {};
}

// Polyfill for pointer capture in JSDOM (Radix Popper)
if (!Element.prototype.hasPointerCapture) {
  Element.prototype.hasPointerCapture = () => false;
}

import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, it, expect, vi } from "vitest";
import Select from "./Select"; // Select 컴포넌트의 위치에 맞게 수정하세요

// 테스트에 사용할 옵션 데이터
const options = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
];

describe("Select 컴포넌트 단위 테스트", () => {
  it("초기 렌더링 시 플레이스홀더 혹은 기본값이 올바르게 표시된다", () => {
    // Given: 옵션 리스트와 플레이스홀더를 props로 전달하여 컴포넌트를 렌더링
    const { asFragment } = render(
      <Select options={options} placeholder="Select an option" />
    );

    // Then: 플레이스홀더 텍스트가 화면에 보여야 함
    expect(asFragment()).toMatchSnapshot();
  });

  it("마우스 클릭으로 옵션 선택 시 onChange 이벤트가 올바르게 호출된다", async () => {
    // Given: onChange 핸들러를 모킹한 상태로 컴포넌트를 렌더링
    const handleChange = vi.fn();
    render(
      <Select
        options={options}
        onChange={handleChange}
        placeholder="Select an option"
      />
    );

    // When: 사용자가 드롭다운을 클릭하여 옵션을 선택
    const selectToggle = screen.getByRole("combobox");
    const user = userEvent.setup();
    await user.click(selectToggle);
    const optionItem = await screen.findByRole("option", { name: "Apple" });
    await user.click(optionItem);

    // Then: onChange 핸들러가 호출되어 값이 변경된 것을 검증
    expect(handleChange).toHaveBeenCalledWith("apple");
  });
});
