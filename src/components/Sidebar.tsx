import { FileAddOutlined, RobotFilled } from "@ant-design/icons";
const Sidebar = () => {
  return (
    <div>
      <div
        id="hs-application-sidebar"
        className="hs-overlay [--auto-close:lg]
  hs-overlay-open:translate-x-0 -translate-x-full duration-300 transform
  hidden
  fixed top-0 start-0 bottom-0 z-60
  w-64 h-full
  bg-white border-e border-gray-200
  lg:block lg:translate-x-0 lg:end-auto lg:bottom-0
  dark:bg-neutral-900 dark:border-neutral-700"
        role="dialog"
        tabIndex={-1}
        aria-label="Sidebar"
      >
        <nav className="size-full flex flex-col">
          <div className="flex items-center pt-4 pe-4 ps-7">
            <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
              <img src="/inf.png" alt="infinity" />
            </h1>
          </div>

          <div className="h-full overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500">
            <ul className="space-y-1.5 p-4">
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300 dark:focus:bg-neutral-900 dark:focus:text-neutral-300"
                  href="/"
                >
                  <RobotFilled />
                  New chat
                </a>
              </li>
              <li>
                <a
                  className="flex items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-900 dark:hover:text-neutral-300 dark:focus:bg-neutral-900 dark:focus:text-neutral-300"
                  href="/upload"
                >
                  <FileAddOutlined />
                  Upload file
                </a>
              </li>
            </ul>
          </div>

          <div className="mt-auto">
            {/* <div className="p-4 border-t border-gray-200 dark:border-neutral-700">
              <a
                className="flex justify-between items-center gap-x-3 py-2 px-3 text-sm text-gray-700 rounded-lg hover:bg-gray-100 focus:outline-hidden focus:bg-gray-100 dark:hover:bg-neutral-900 dark:text-neutral-400 dark:hover:text-neutral-300 dark:focus:text-neutral-300"
                href="#"
              >
                Sign in
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
                  <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
                  <polyline points="10 17 15 12 10 7" />
                  <line x1="15" x2="3" y1="12" y2="12" />
                </svg>
              </a>
            </div> */}
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
