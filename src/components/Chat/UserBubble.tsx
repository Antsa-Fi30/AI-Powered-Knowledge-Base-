import { useState } from "react";
import { EditOutlined } from "@ant-design/icons";
import Input from "./Input";

const UserBubble = () => {
  const [message, setMessage] = useState<string>(
    "Preline UI Figma is the largest free design system for Figma..."
  );
  const [isEditing, setIsEditing] = useState<boolean>(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    console.log("Message updated:", message);
    setIsEditing(false);
  };

  const handleCancel = () => {
    setIsEditing(false);
    setMessage(
      "Preline UI Figma is the largest free design system for Figma..."
    );
  };

  return (
    <li className="group max-w-4xl py-2 px-4 sm:px-6 lg:px-8 mx-auto my-10 flex gap-x-2 sm:gap-x-4">
      <div className="w-10  sm:w-12 h-12 flex items-center justify-center rounded-full bg-info text-white">
        <span className="text-md sm:text-lg font-semibold">You</span>
      </div>

      <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
        <div className="space-y-3">
          {isEditing ? (
            <Input
              message={message}
              setMessage={setMessage}
              isEditing={isEditing}
              handleSave={handleSave}
              handleCancel={handleCancel}
            />
          ) : (
            <p className="text-sm text-gray-800 dark:text-white">{message}</p>
          )}
        </div>

        {/* Edit button */}
        {!isEditing && (
          <div className="hidden group-hover:flex">
            <button
              onClick={handleEditClick}
              className="btn btn-outline btn-warning"
            >
              <EditOutlined size={40} />
            </button>
          </div>
        )}
      </div>
    </li>
  );
};

export default UserBubble;
