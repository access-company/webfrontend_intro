import { FC } from 'react';
import { createRoot } from 'react-dom/client';

type GreetingProps = {
  isLoggedIn: boolean;
};

const UserGreeting: FC = () => <h1>Welcome back!</h1>;
const GuestGreeting: FC = () => <h1>Please sign up.</h1>;
const Greeting: FC<GreetingProps> = (props) => {
  return props.isLoggedIn ? <UserGreeting /> : <GuestGreeting />;
};

createRoot(document.getElementById('root')!).render(
  // Try changing to isLoggedIn={false}:
  <Greeting isLoggedIn={true} />
);
