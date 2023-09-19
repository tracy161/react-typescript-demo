type InputProps = React.ComponentProps<'input'>

export const Input = ({...rest}: InputProps) => {
  return <input  {...rest}/>
}
