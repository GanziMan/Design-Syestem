import type { Meta, StoryObj } from "@storybook/react";
import Select from "./Select";

const DUMMY_OPTIONS = [
  { value: "option1", label: "Option 1" },
  { value: "option2", label: "Option 2" },
  { value: "option3", label: "Option 3" },
  { value: "option4", label: "Option 4" },
  { value: "option5", label: "Option 5" },
  { value: "option6", label: "Option 6" },
  { value: "option7", label: "Option 7" },
];
const meta: Meta<typeof Select> = {
  title: "Components/Select",
  component: Select,
};
export default meta;

type Story = StoryObj<typeof meta>;

export const General: Story = {
  args: {
    options: DUMMY_OPTIONS,
  },
};
