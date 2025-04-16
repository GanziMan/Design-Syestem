import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectViewPort,
} from "./Select.css";

type SelectProps = {
  options: Array<{
    value: string;
    label: string;
  }>;
  placeholder?: string;
  onChange?: (value: string) => void;
  defaultValue?: string;
  disabled?: boolean;
};

const Select: React.FC<SelectProps> = ({
  options,
  placeholder = "",
  onChange,
  defaultValue,
  disabled = false,
}) => {
  return (
    <SelectPrimitive.Root onValueChange={onChange} defaultValue={defaultValue}>
      <SelectPrimitive.Trigger
        className={SelectTrigger}
        disabled={disabled}
        aria-label="Select an option"
        role="combobox"
      >
        <SelectPrimitive.Value placeholder={placeholder} />
        <SelectPrimitive.Icon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </SelectPrimitive.Icon>
      </SelectPrimitive.Trigger>

      <SelectPrimitive.Portal>
        <SelectPrimitive.Content
          className={SelectContent}
          position="popper"
          sideOffset={4}
          align="start"
          avoidCollisions
          aria-live="polite" // 화면 리더에게 실시간 업데이트 알리기
        >
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport className={SelectViewPort}>
            {options.map((option) => (
              <SelectPrimitive.Item
                className={SelectItem}
                key={option.value}
                value={option.value}
                aria-label={`Option: ${option.label}`}
              >
                <SelectPrimitive.ItemText>
                  {option.label}
                </SelectPrimitive.ItemText>
              </SelectPrimitive.Item>
            ))}
          </SelectPrimitive.Viewport>
          <SelectPrimitive.ScrollDownButton />
        </SelectPrimitive.Content>
      </SelectPrimitive.Portal>
    </SelectPrimitive.Root>
  );
};

export default Select;
