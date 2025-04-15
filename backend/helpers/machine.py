from pypdf import PdfReader


class Machine:
    def __init__(self):
        print("Initialisation de l'IA...")
        self.model = self.load_model()

    def load_model(self):

        return "Modèle NLP prêt"

    def summarize(self, text):

        return "Résumé du document."

    def answer_question(self, text, question):

        return "Réponse à la question."

    def search(self, text, keyword):

        return f"Résultats pour '{keyword}'."
