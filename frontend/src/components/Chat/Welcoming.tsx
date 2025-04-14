import { Sparkles } from "lucide-react";

const Welcoming = () => {
  return (
    <div className="my-20 text-white font-[Poppins] flex items-center justify-center px-6">
      <div className="text-center space-y-6 max-w-2xl">
        <div className="flex justify-center items-center gap-3">
          <Sparkles className="w-8 h-8 text-primary animate-pulse" />
          <h1 className="text-4xl sm:text-5xl font-bold tracking-wide">
            Welcome to <span className="text-primary">Infinity</span>
          </h1>
        </div>

        <p className="text-lg text-gray-300">
          Your intelligent assistant designed to simplify your life and
          supercharge your searching docs.
        </p>
      </div>
    </div>
  );
};

export default Welcoming;
