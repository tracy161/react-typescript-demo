import React from "react";

// check prop types
type GreetProps = { name: string; messageCount?: number; isLoggedIn: boolean }; //optional type

const Greet = ({ name, messageCount = 0, isLoggedIn }: GreetProps) => {
  return (
    <div>
      <h2>
        {isLoggedIn
          ? `Welcome {name}! You have {messageCount} messages!`
          : `Please sign in`}
      </h2>
    </div>
  );
};

export default Greet;
