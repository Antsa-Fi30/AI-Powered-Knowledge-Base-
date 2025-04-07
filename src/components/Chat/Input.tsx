import React, { useRef, useState } from "react";
import { SendOutlined } from "@ant-design/icons";

type InputProps = {
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  isEditing: boolean;
  handleSave: () => void;
  handleCancel: () => void;
};

const Input: React.FC<InputProps> = ({
  message,
  setMessage,
  isEditing,
  handleSave,
  handleCancel,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [canSent, setCanSent] = useState<boolean>(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleTexts = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const value = e.target.value;
    setMessage(value);
    setCanSent(value.trim().length > 0);

    if (textareaRef.current) {
      textareaRef.current.style.height = "auto";
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  };

  const handleSubmit = () => {
    setIsLoading(true);
    try {
      setTimeout(() => {
        handleSave();
        setMessage("");
        setCanSent(false);
        setIsLoading(false);

        if (textareaRef.current) {
          textareaRef.current.style.height = "auto";
        }
      }, 1000);
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit();
      }}
      className="relative w-full max-w-4xl px-4 sm:px-6 lg:px-8 mx-auto mt-4 mb-4"
    >
      <div className="relative">
        <textarea
          ref={textareaRef}
          placeholder={isEditing ? "" : "Ask anything..."}
          value={message}
          onChange={handleTexts}
          onKeyDown={handleKeyDown}
          className={`textarea textarea-info w-full pr-16 resize-none overflow-hidden max-h-[200px] overflow-y-auto ${
            isEditing && "pb-16"
          }`}
          rows={5}
        ></textarea>

        <button
          type="submit"
          className="absolute bottom-2 right-2 btn btn-sm btn-circle btn-primary"
          disabled={isLoading || !canSent}
        >
          {isLoading ? (
            <span className="loading loading-infinity loading-md"></span>
          ) : (
            <SendOutlined />
          )}
        </button>

        {isEditing && (
          <div className="absolute bottom-2 left-2 flex gap-2">
            <button
              type="button"
              onClick={handleCancel}
              className="btn btn-soft btn-error"
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </form>
  );
};

export default Input;
