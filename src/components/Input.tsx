import { FloatingLabel } from "flowbite-react";

interface IinputProps extends React.ComponentPropsWithoutRef<"input"> {
  type: string;
  id: string;
  name: string;
  label: string;
  fieldError?: string;
  variant: "filled" | "outlined" | "standard";
  color: "default" | "success" | "error";
  autoFocus?: boolean;
  updateField: (fieldName: string, value: string) => void;
}

const Input = ({
  type,
  id,
  name,
  label,
  fieldError,
  variant,
  color,
  min,
  max,
  maxLength,
  autoFocus,
  updateField,
}: IinputProps): React.ReactElement => {
  return (
    <>
      <FloatingLabel
        variant={variant}
        label={label}
        type={type}
        id={id}
        name={name}
        color={color}
        maxLength={maxLength}
        min={min}
        max={max}
        className="mb-4"
        autoFocus={autoFocus}
        onChange={(e) => updateField(name, e.target.value)}
      />
      <p className="mb-5 text-sm text-red-600 dark:text-red-500">
        {fieldError}
      </p>
    </>
  );
};

export default Input;
