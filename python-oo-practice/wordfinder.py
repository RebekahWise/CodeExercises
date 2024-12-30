"""Word Finder: finds random words from a dictionary."""
import random

class WordFinder:

    def __init__(self, path):
        file = open(path)
        self.words = self.parse(file)
        print(f"{len(self.words)} words read")

    def wordList(self, file):
        return [word.strip() for word in file]
    
    def random(self):
        return random.choice(self.words)
    

class SpecialWordFinder(WordFinder):

    def parse(self, dict_file):
        return [w.strip() for w in dict_file
                if w.strip() and not w.startswith("#")]