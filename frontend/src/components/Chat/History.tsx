import UserBubble from "./UserBubble";
import AIBubble from "./AIBubble";
import Welcoming from "./Welcoming";

const History = () => {
  const messages = [];
  if (messages.length === 0) {
    return (
      <div>
        <Welcoming />
      </div>
    );
  }
  return (
    <>
      <UserBubble />
      <AIBubble />
    </>
  );
};

export default History;
