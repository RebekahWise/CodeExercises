words = ["dog", "cat", "Elephant", "pig", "cow", "eel"]

def print_upper_words(words):
  for word in words:
    print(word.upper())

print_upper_words(words) 
# this should print upper case


def print_e_words(words):
  for word in words:
    if word.lower().startswith("e"):
      print(word.upper())

print_e_words(words)


def print_specific_words(words, x, y):
  for word in words:
    if word.lower().startswith(x) or word.lower().startswith(y):
      print(word.upper())

print_specific_words(words, "e", "c")