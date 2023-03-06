import React from "react";

// check prop types
type GreetProps = { name: string; messageCount: number; isLoggedIn: boolean };

const Greet = ({ name, messageCount, isLoggedIn }: GreetProps) => {
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
