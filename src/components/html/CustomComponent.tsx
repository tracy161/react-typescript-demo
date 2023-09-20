import Greet from "../Greet"

// extracting a component prop type Greet: in the case to resue a components prop types but you don't have access the type itself

export const CustomComponent = (props: React.ComponentProps<typeof Greet>) => {
    return <div>{props.name}</div>
  }