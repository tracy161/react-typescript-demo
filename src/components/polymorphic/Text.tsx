type TextOwnProps<E extends React.ElementType> = {
  // pass in generic Element Type
  size?: "sm" | "md" | "lg";
  color?: "primary" | "secondary";
  children: React.ReactNode; // children might collide with children for div tag
  as?: E;
};

// we now have all the types of the React.componentprops element except for the type that we have specified ourselves
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export const Text = <E extends React.ElementType = "div">({
  size,
  color,
  children,
  as,
}: TextProps<E>) => {
  const Component = as || "div";
  return (
    <Component className={`class-with-${size}-${color}`}>{children}</Component>
  );
};
