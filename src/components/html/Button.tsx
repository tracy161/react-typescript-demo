type ButtonProps = {
  variant: "primary" | "secondary";
  children: string
} & Omit<React.ComponentProps<"button">, 'children'>; // html element generic type except those for type children

// type Omit<T, K extends string | number | symbol> = { [P in Exclude<keyof T, K>]: T[P]; }
// Construct a type with the properties of T except for those in type K.

export const CustomButton = ({ variant, children, ...rest }: ButtonProps) => {
  return (
    <button className={`class-with-${variant}`} {...rest}>
      {children}
    </button>
  );
};
