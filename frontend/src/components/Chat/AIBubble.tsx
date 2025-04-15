import { CopyOutlined } from "@ant-design/icons";

type AIBubbleProps = {
  content: string;
  list?: string[];
};

const AIBubble: React.FC<AIBubbleProps> = ({ content, list = [] }) => {
  const handleCopy = () => {
    console.log("Copy to clipboard : ");
  };
  const handleRetry = () => {
    console.log("Retry to answer : ");
  };

  return (
    <>
      <li className="max-w-4xl  py-2 px-4 sm:px-6 lg:px-8 mx-auto my-10 flex gap-x-2 sm:gap-x-4">
        {/* Avatar */}
        <div className="w-10  sm:w-12 h-12 flex items-center justify-center rounded-full bg-neutral text-white">
          <span className="text-md sm:text-lg font-semibold">AI</span>
        </div>
        {/* Bubble */}
        <div className="grow max-w-[90%] md:max-w-2xl w-full space-y-3">
          <div className="space-y-3">
            <p className="text-sm text-gray-800 dark:text-white">{content}</p>
            {list.length > 0 && (
              <div className="space-y-1.5">
                <p className="text-sm text-gray-800 dark:text-white">
                  With the features like:
                </p>
                <ul className="list-disc list-outside space-y-1.5 ps-3.5">
                  {list.map((item, index) => (
                    <li
                      key={index}
                      className="text-sm text-gray-800 dark:text-white"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
          <div>
            <div className="sm:flex sm:justify-between">
              <div>
                <button
                  type="button"
                  onClick={handleCopy}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 transition-all duration-300 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  <CopyOutlined />
                  Copy
                </button>
              </div>
              <div className="mt-1 sm:mt-0">
                <button
                  type="button"
                  onClick={handleRetry}
                  className="py-2 px-3 inline-flex items-center gap-x-2 text-sm rounded-full border border-transparent text-gray-500 hover:bg-gray-50 focus:outline-hidden focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-400 dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"
                >
                  <svg
                    className="shrink-0 size-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="M21 12a9 9 0 1 1-9-9c2.52 0 4.93 1 6.74 2.74L21 8" />
                    <path d="M21 3v5h-5" />
                  </svg>
                  New answer
                </button>
              </div>
            </div>
          </div>
        </div>
      </li>
    </>
  );
};

export default AIBubble;
