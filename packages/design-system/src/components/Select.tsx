import React from "react";
import * as SelectPrimitive from "@radix-ui/react-select";
import {
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectViewPort,
} from "./Select.css"; // 스타일을 올바르게 import

type SelectProps = {
  options: Array<{
    value: string;
    label: string;
  }>;
};

const Select: React.FC<SelectProps> = ({ options }) => {
  return (
    <SelectPrimitive.Root>
      <SelectPrimitive.Trigger className={SelectTrigger}>
        <SelectPrimitive.Value placeholder="" />
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
        >
          <SelectPrimitive.ScrollUpButton />
          <SelectPrimitive.Viewport className={SelectViewPort}>
            {options.map((option) => (
              <SelectPrimitive.Item
                className={SelectItem}
                key={option.value}
                value={option.value}
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
