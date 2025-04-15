from transformers import pipeline

# Charge le modèle pré-entraîné pour le résumé de texte
summarizer = pipeline("summarization")

# Texte d'exemple
text = """
L'intelligence artificielle (IA) fait référence à la simulation de l'intelligence humaine par des systèmes informatiques.
Les systèmes d'IA peuvent apprendre et résoudre des problèmes de manière autonome. L'IA est utilisée dans une variété
d'applications, notamment les voitures autonomes, les assistants virtuels et les robots industriels.
"""

# Résume le texte
summary = summarizer(text, max_length=50, min_length=25, do_sample=False)

# Affiche le résumé
print(summary[0]["summary_text"])
