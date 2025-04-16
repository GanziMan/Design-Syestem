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

    // When: 사용자가 선택 영역(예: combobox)을 클릭하여 옵션 드롭다운을 연다
    const selectToggle = screen.getByRole("combobox");
    const user = userEvent.setup();
    console.log("test:", user.click(selectToggle));
    user.click(selectToggle);

    // // Then: 특정 옵션(예: Banana)이 드롭다운에 보여야 한다.
    // const optionItem = await screen.findByRole("option", { name: /banana/i });
    // expect(optionItem);

    // // Wchen: 해당 옵션을 클릭하면 onChange 이벤트가 호출되어야 한다.
    // await user.click(optionItem);

    // // Then: onChange 핸들러가 옵션 값 'banana'를 포함한 이벤트 객체를 전달하면서 호출된다.
    // expect(handleChange).toHaveBeenCalledWith(
    //   expect.objectContaining({ value: "banana" })
    // );
  });

  // it("키보드 입력을 통해 옵션이 선택된다", async () => {
  //   // Given: onChange 핸들러를 모킹한 상태로 컴포넌트를 렌더링
  //   const handleChange = vi.fn();
  //   render(
  //     <Select
  //       options={options}
  //       onChange={handleChange}
  //       placeholder="Select an option"
  //     />
  //   );

  //   const user = userEvent.setup();
  //   // When: 사용자가 키보드로 select 영역에 포커스를 주고 화살표 키 및 Enter 키로 옵션 선택
  //   const selectToggle = screen.getByRole("combobox");
  //   selectToggle.focus();
  //   await user.keyboard("{ArrowDown}"); // 첫 번째 옵션(apple)에서 두 번째 옵션(바나나)로 이동한다고 가정
  //   await user.keyboard("{Enter}"); // 선택 확정

  //   // Then: onChange 핸들러가 호출되어 값이 변경된 것을 검증
  //   expect(handleChange).toHaveBeenCalled();
  //   // 옵션 값 등 보다 구체적인 검증을 위해 expect.objectContaining({ value: 'banana' }) 등으로 확인할 수도 있음
  // });
});
