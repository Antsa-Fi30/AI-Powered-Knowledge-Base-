import UserBubble from "./UserBubble";
import AIBubble from "./AIBubble";
import Welcoming from "./Welcoming";

const History = () => {
  const messages = [
    { id: 1, role: "user", content: "Hey, what's the latest update?" },
    { id: 2, role: "ai", content: "Hello! The latest update is about v2..." },
    { id: 3, role: "user", content: "Thanks!" },
  ];

  if (messages.length === 0) {
    return <Welcoming />;
  }

  return (
    <div className="space-y-4">
      {messages.map((msg) =>
        msg.role === "user" ? (
          <UserBubble key={msg.id} content={msg.content} />
        ) : (
          <AIBubble key={msg.id} content={msg.content} />
        )
      )}
    </div>
  );
};

export default History;
