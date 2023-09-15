import { Login } from './Login'
import { ProfileProps } from './Profile'

type PrivateProps = {
    isLoggedIn: Boolean
    component: React.ComponentType<ProfileProps>
}


export const Private = ({ isLoggedIn, component: Component }: PrivateProps) => {
  if (isLoggedIn) {
    return <Component name='Tracy' />
  } else {
    return <Login />
  }
}