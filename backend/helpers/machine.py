from pypdf import PdfReader


class Machine:
    def __init__(self):
        print("🧠 Initialisation de l'IA...")
        self.model = self.load_model()

    def load_model(self):
        return "Modèle de base chargé."

    def summarize(self, text):
        return f"Résumé simulé : {text[:150]}..."

    def answer_question(self, text, question):
        return f"Réponse simulée pour '{question}'."

    def search(self, text, keyword):
        if keyword.lower() in text.lower():
            return f"Le mot '{keyword}' a été trouvé !"
        return f"Le mot '{keyword}' est absent."

    def extract_text_from_pdf(self, file_path):
        reader = PdfReader(file_path)
        text = ""
        for page in reader.pages:
            text += page.extract_text() + "\n"
        return text
