import { useState } from "preact/hooks";

interface Props {
  messages: Array<string>;
}

export default function Greeting({ messages }: Props) {
  const getRandomMessage = () =>
    messages[Math.floor(Math.random() * messages.length)];
  const [greeting, setGreeting] = useState(messages[0]);

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button class="cta" onClick={() => setGreeting(getRandomMessage())}>
        New Greeting
      </button>
    </div>
  );
}
