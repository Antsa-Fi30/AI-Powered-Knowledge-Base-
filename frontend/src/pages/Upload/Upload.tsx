import { useRef, useState } from "react";
import Sidebar from "../../components/Sidebar";
import { toast } from "react-toastify";

const Upload = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [fileName, setFileName] = useState<string>("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (!file) return;

    if (file.type !== "application/pdf" || !file.name.endsWith(".pdf")) {
      setFileName("❌ Seuls les fichiers PDF sont acceptés.");
      setSelectedFile(null);
      return;
    }

    const MAX_SIZE = 10 * 1024 * 1024; // 10MB
    if (file.size > MAX_SIZE) {
      setFileName(`❌ Le fichier dépasse ${MAX_SIZE / 1024 / 1024}MB`);
      setSelectedFile(null);
      return;
    }

    setFileName(file.name);
    setSelectedFile(file);
  };

  const handleUploadClick = () => fileInputRef.current?.click();

  const handleSubmit = async () => {
    if (!selectedFile) return;

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("file_name", selectedFile.name);
    toast.info(`Envoi en cours`);
    try {
      setIsLoading(true);
      const response = await fetch(
        "http://localhost:8000/api/documents/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Échec de l'upload");
      }

      const data = await response.json();
      toast.success(`Fichier ${data.file_name} uploadé !`);
      resetForm();
    } catch (err) {
      console.error(err);
      if (err instanceof Error) {
        toast.error(err.message);
      } else if (typeof err === "string") {
        toast.error(err);
      } else {
        toast.error("Erreur inconnue lors de l'upload");
      }
    } finally {
      setIsLoading(false);
    }
  };

  const resetForm = () => {
    setFileName("");
    setSelectedFile(null);
    if (fileInputRef.current) fileInputRef.current.value = "";
  };

  return (
    <div className="flex min-h-screen font-[Poppins]">
      <Sidebar />
      <div className="flex-1 p-10">
        <h1 className="text-2xl font-bold mb-8">Uploader un PDF</h1>
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
                disabled={isLoading}
              />
              <button
                className="btn btn-outline btn-primary"
                onClick={handleUploadClick}
                disabled={isLoading}
              >
                Choisir un fichier
              </button>
              {fileName && (
                <div className="text-sm truncate max-w-xs">{fileName}</div>
              )}
            </div>
          </div>
          <button
            className={`btn btn-primary w-full ${isLoading ? "loading" : ""}`}
            disabled={!selectedFile || fileName.startsWith("❌") || isLoading}
            onClick={handleSubmit}
          >
            {isLoading ? "Envoi en cours..." : "Uploader"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Upload;
