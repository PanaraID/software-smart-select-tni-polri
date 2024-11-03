import React from "react";
import Form from "react-bootstrap/Form";

type PropsType<T extends { [key: string]: string }> = {
  title?: string;
  label?: string;
  optionTitle?: string;
  enumType: T;

  selected: keyof T | null;
  setSelected: (data: keyof T | null) => void;
};

function InputChoice<T extends { [key: string]: string }>({
  title,
  enumType,
  optionTitle,
  label,
  selected,
  setSelected,
}: PropsType<T>) {
  
  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value as keyof T;
    setSelected(value); // Pass the key to setSelected
  }

  // Create options from the enum
  const options = Object.keys(enumType).map((key) => ({
    key: key as keyof T,
    label: enumType[key], // Use enum value as label
  }));

  return (
    <section>
      {title && <span>{title}</span>}
      <Form.Select
        aria-label={label ?? "Masukkan pilihan anda!"}
        onChange={handleChange}
        value={selected?.toString() || ""} // Set the initial value based on selected
      >
        <option value="">
          {optionTitle ?? "Masukkan pilihan anda!"}
        </option>
        {options.map(({ key, label }, index) => (
          <option key={index} value={key.toString()}>
            {label}
          </option>
        ))}
      </Form.Select>
    </section>
  );
}

export default InputChoice;
