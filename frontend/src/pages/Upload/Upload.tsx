import { useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type === "application/pdf") {
      setFileName(file.name);
      setSelectedFile(file);
    } else {
      setFileName("❌ Le fichier doit être un PDF.");
      setSelectedFile(null);
    }
  };

  const handleUploadClick = () => {
    fileInputRef.current?.click();
  };

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);

    try {
      setIsLoading(true);

      const response = await fetch("http://localhost:8000/documents/upload/", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) throw new Error("Erreur lors de l'upload");

      alert("Fichier uploadé avec succès !");
      setFileName("");
      setSelectedFile(null);
      if (fileInputRef.current) {
        fileInputRef.current.value = "";
      }
    } catch (err) {
      alert("❌ Une erreur est survenue.");
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen font-[Poppins]">
      <div className="w-64">
        <Sidebar />
      </div>

      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-8">
          Uploader un fichier PDF pour alimenter l'IA
        </h1>

        <div className="max-w-xl mx-auto p-6 bg-gray-900 rounded-2xl shadow-lg space-y-6">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-lg font-medium">
                Fichier PDF
              </span>
            </label>

            <div className="flex items-center gap-4">
              <input
                ref={fileInputRef}
                type="file"
                accept=".pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <button
                className="btn btn-outline btn-primary"
                onClick={handleUploadClick}
              >
                Choisir un fichier
              </button>

              {fileName && (
                <div className="text-sm text-gray-700 max-w-xs truncate">
                  {fileName}
                </div>
              )}
            </div>
          </div>

          <button
            className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
            disabled={!selectedFile || fileName.startsWith("❌")}
            onClick={handleSubmit}
          >
            {isLoading ? "Upload en cours..." : "Uploader"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
