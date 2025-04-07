import { useState } from "react";
import Input from "../../components/Chat/Input";
import Sidebar from "../../components/Sidebar";
import History from "../../components/Chat/History";

const Chat = () => {
  const [message, setMessage] = useState<string>("");
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleSave = () => {
    console.log("Message envoyé:", message);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setMessage("");
  };

  return (
    <div className="flex min-h-screen font-[Poppins]">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 p-6 overflow-y-auto space-y-4">
        <History />
        <Input
          message={message}
          setMessage={setMessage}
          isEditing={isEditing}
          handleSave={handleSave}
          handleCancel={handleCancel}
        />
      </div>
    </div>
  );
};

export default Chat;
