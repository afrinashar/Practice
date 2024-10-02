const pythonQuestions = [
    {
      id: 1,
      title: "What is Python?",
      type: "Python",
      description: "Python is a high-level, interpreted programming language known for its readability and versatility.",
      example: "Example: Using Python for web development, data analysis, and automation."
    },
    {
      id: 2,
      title: "What are Python data types?",
      type: "Python",
      description: "Python supports various data types, including integers, floats, strings, lists, tuples, sets, and dictionaries.",
      example: "Example: 'x = 5' defines an integer, 'y = [1, 2, 3]' defines a list."
    },
    {
      id: 3,
      title: "What is a list in Python?",
      type: "Python",
      description: "A list is a mutable, ordered collection of items that can hold elements of different types.",
      example: "Example: 'my_list = [1, 2, 3, 'Python']'."
    },
    {
      id: 4,
      title: "What is a dictionary in Python?",
      type: "Python",
      description: "A dictionary is an unordered collection of key-value pairs, where each key must be unique.",
      example: "Example: 'my_dict = {'name': 'Alice', 'age': 30}'."
    },
    {
      id: 5,
      title: "What are Python functions?",
      type: "Python",
      description: "Functions in Python are reusable blocks of code that perform a specific task and can take parameters.",
      example: "Example: 'def greet(name): return f'Hello, {name}!''"
    },
    {
      id: 6,
      title: "What is the difference between a list and a tuple?",
      type: "Python",
      description: "Lists are mutable, while tuples are immutable. This means lists can be changed after creation, but tuples cannot.",
      example: "Example: 'my_list = [1, 2, 3]', 'my_tuple = (1, 2, 3)'."
    },
    {
      id: 7,
      title: "How do you handle exceptions in Python?",
      type: "Python",
      description: "Exceptions in Python are handled using try and except blocks to catch and manage errors gracefully.",
      example: "Example: 'try: x = 1 / 0 except ZeroDivisionError: print('Cannot divide by zero!')'."
    },
    {
      id: 8,
      title: "What is a Python module?",
      type: "Python",
      description: "A module is a file containing Python code, which can define functions, classes, and variables to be reused in other code.",
      example: "Example: 'import math' allows access to mathematical functions and constants."
    },
    {
      id: 9,
      title: "What is list comprehension?",
      type: "Python",
      description: "List comprehension is a concise way to create lists using a single line of code that can include conditions.",
      example: "Example: '[x**2 for x in range(10) if x % 2 == 0]' creates a list of squares of even numbers."
    },
    {
      id: 10,
      title: "What is the purpose of the 'self' keyword?",
      type: "Python",
      description: "The 'self' keyword refers to the instance of the class and is used to access class attributes and methods.",
      example: "Example: 'def __init__(self, name): self.name = name' in a class."
    },
    {
      id: 11,
      title: "What is a lambda function?",
      type: "Python",
      description: "A lambda function is an anonymous function defined using the 'lambda' keyword, typically for short, single-use functions.",
      example: "Example: 'square = lambda x: x**2'."
    },
    {
      id: 12,
      title: "How do you read a file in Python?",
      type: "Python",
      description: "Files can be read in Python using the 'open()' function with methods like 'read()', 'readline()', or 'readlines()'.",
      example: "Example: 'with open('file.txt', 'r') as file: content = file.read()'."
    },
    {
      id: 13,
      title: "What are Python decorators?",
      type: "Python",
      description: "Decorators are functions that modify the behavior of another function or method, often used for logging or access control.",
      example: "Example: '@app.route('/')' in a Flask web application."
    },
    {
      id: 14,
      title: "What is the difference between '==' and 'is'?",
      type: "Python",
      description: "'==' checks for value equality, while 'is' checks for identity (whether two references point to the same object).",
      example: "Example: 'a = [1, 2]; b = a; a == b is True, a is b is True'."
    },
    {
      id: 15,
      title: "What are Python list methods?",
      type: "Python",
      description: "Python lists come with built-in methods like append(), remove(), pop(), and sort() to manipulate list data.",
      example: "Example: 'my_list.append(4)' adds 4 to the end of 'my_list'."
    },
    {
      id: 16,
      title: "What is the purpose of 'import this' in Python?",
      type: "Python",
      description: "'import this' displays the Zen of Python, a collection of guiding principles for writing computer programs in Python.",
      example: "Example: Running 'import this' in a Python shell."
    },
    {
      id: 17,
      title: "What is the purpose of the 'with' statement?",
      type: "Python",
      description: "The 'with' statement simplifies exception handling by encapsulating common preparation and cleanup tasks.",
      example: "Example: 'with open('file.txt') as f: content = f.read()'."
    },
    {
      id: 18,
      title: "What are Python sets?",
      type: "Python",
      description: "Sets are unordered collections of unique elements, used for membership testing and eliminating duplicate entries.",
      example: "Example: 'my_set = {1, 2, 3, 3}' results in 'my_set' being {1, 2, 3}."
    },
    {
      id: 19,
      title: "How do you create a class in Python?",
      type: "Python",
      description: "A class in Python is created using the 'class' keyword, defining properties and methods associated with that class.",
      example: "Example: 'class Dog: def bark(self): print('Woof!')'."
    },
    {
      id: 20,
      title: "What is the purpose of the __init__ method?",
      type: "Python",
      description: "The __init__ method initializes a newly created object and is called automatically when a class instance is created.",
      example: "Example: 'def __init__(self, name): self.name = name'."
    },
    {
      id: 21,
      title: "What are list slicing and indexing?",
      type: "Python",
      description: "List slicing allows you to access a portion of a list using a specified range, while indexing retrieves individual elements.",
      example: "Example: 'my_list[1:3]' retrieves elements at index 1 and 2."
    },
    {
      id: 22,
      title: "How can you install external libraries in Python?",
      type: "Python",
      description: "External libraries can be installed using package managers like pip, typically with a command like 'pip install package_name'.",
      example: "Example: 'pip install requests' installs the requests library for making HTTP requests."
    },
    {
      id: 23,
      title: "What is the difference between deep copy and shallow copy?",
      type: "Python",
      description: "A shallow copy creates a new object but inserts references into it, while a deep copy creates a new object and recursively adds copies of nested objects.",
      example: "Example: 'import copy; shallow = copy.copy(original); deep = copy.deepcopy(original)'."
    },
    {
      id: 24,
      title: "What are Python comprehensions?",
      type: "Python",
      description: "Comprehensions provide a concise way to create lists, sets, or dictionaries by iterating over iterables and applying conditions.",
      example: "Example: '{x: x**2 for x in range(5)}' creates a dictionary of numbers and their squares."
    },
    {
      id: 25,
      title: "What is the purpose of the 'global' keyword?",
      type: "Python",
      description: "The 'global' keyword allows you to modify a variable defined outside of the current function's scope.",
      example: "Example: 'global_var = 0; def modify(): global global_var; global_var += 1'."
    },
    {
      id: 26,
      title: "What is the purpose of the 'return' statement?",
      type: "Python",
      description: "The 'return' statement exits a function and optionally passes back a value to the caller.",
      example: "Example: 'def add(a, b): return a + b'."
    },
    {
      id: 27,
      title: "What are regular expressions in Python?",
      type: "Python",
      description: "Regular expressions are sequences of characters defining a search pattern, often used for string matching and manipulation.",
      example: "Example: 'import re; re.search('pattern', 'string')' finds a match."
    },
    {
      id: 28,
      title: "What is the 'map' function?",
      type: "Python",
      description: "The 'map' function applies a specified function to each item in an iterable and returns a map object.",
      example: "Example: 'result = map(lambda x: x**2, [1, 2, 3])' returns [1, 4, 9]."
    },
    {
      id: 29,
      title: "What are Python generators?",
      type: "Python",
      description: "Generators are iterators that yield values one at a time and can be created using functions with the 'yield' statement.",
      example: "Example: 'def count_up_to(n): i = 1; while i <= n: yield i; i += 1'."
    },
    {
      id: 30,
      title: "What is the purpose of the 'elif' keyword?",
      type: "Python",
      description: "The 'elif' keyword is used to chain multiple conditions in an if statement, allowing for more than two branches.",
      example: "Example: 'if x > 0: print('Positive'); elif x < 0: print('Negative'); else: print('Zero')'."
    },

    {
        id: 31,
        title: "What is a while loop?",
        type: "Python",
        description: "A while loop repeatedly executes a block of code as long as a specified condition is true.",
        example: "Example: 'while x < 5: print(x); x += 1'."
      },
      {
        id: 32,
        title: "What is a for loop?",
        type: "Python",
        description: "A for loop iterates over a sequence (like a list or a string) and executes a block of code for each item.",
        example: "Example: 'for item in my_list: print(item)'."
      },
      {
        id: 33,
        title: "What is slicing in Python?",
        type: "Python",
        description: "Slicing allows you to access a subset of elements from a sequence (list, string, etc.) using a start and end index.",
        example: "Example: 'my_list[1:4]' returns elements from index 1 to 3."
      },
      {
        id: 34,
        title: "What is the purpose of the 'len()' function?",
        type: "Python",
        description: "The 'len()' function returns the number of items in an object, such as a list, tuple, or string.",
        example: "Example: 'len(my_list)' returns the number of elements in 'my_list'."
      },
      {
        id: 35,
        title: "How do you convert a string to an integer in Python?",
        type: "Python",
        description: "You can convert a string to an integer using the 'int()' function.",
        example: "Example: 'num = int('10')' converts the string '10' to the integer 10."
      },
      {
        id: 36,
        title: "What is the purpose of the 'pass' statement?",
        type: "Python",
        description: "The 'pass' statement is a null operation used as a placeholder for future code in loops, functions, and classes.",
        example: "Example: 'if x < 0: pass' does nothing if x is negative."
      },
      {
        id: 37,
        title: "What is the difference between 'break' and 'continue'?",
        type: "Python",
        description: "'break' exits the loop entirely, while 'continue' skips the current iteration and moves to the next one.",
        example: "Example: 'for i in range(5): if i == 2: continue; print(i)' outputs 0, 1, 3, 4."
      },
      {
        id: 38,
        title: "What is the purpose of the 'input()' function?",
        type: "Python",
        description: "The 'input()' function reads a line of input from the user and returns it as a string.",
        example: "Example: 'name = input('Enter your name: ')' captures user input."
      },
      {
        id: 39,
        title: "What is the purpose of the 'strip()' method?",
        type: "Python",
        description: "The 'strip()' method removes leading and trailing whitespace from a string.",
        example: "Example: 'my_string.strip()' removes spaces from both ends."
      },
      {
        id: 40,
        title: "What is a class method?",
        type: "Python",
        description: "A class method is a method that belongs to the class and can be called on the class itself rather than on instances.",
        example: "Example: '@classmethod def my_method(cls): pass'."
      },
      {
        id: 41,
        title: "What is a static method?",
        type: "Python",
        description: "A static method is a method that does not require a class instance or access to the class itself.",
        example: "Example: '@staticmethod def my_method(): pass'."
      },
      {
        id: 42,
        title: "How do you raise an exception in Python?",
        type: "Python",
        description: "You can raise an exception using the 'raise' statement followed by the exception type.",
        example: "Example: 'raise ValueError('Invalid value')' raises a ValueError."
      },
      {
        id: 43,
        title: "What is the difference between 'append()' and 'extend()'?",
        type: "Python",
        description: "'append()' adds a single item to the end of a list, while 'extend()' adds multiple items from an iterable.",
        example: "Example: 'my_list.append(4)' vs 'my_list.extend([4, 5])'."
      },
      {
        id: 44,
        title: "How do you remove an item from a list by value?",
        type: "Python",
        description: "You can remove an item from a list by value using the 'remove()' method.",
        example: "Example: 'my_list.remove(2)' removes the first occurrence of 2 from 'my_list'."
      },
      {
        id: 45,
        title: "What is a nested function?",
        type: "Python",
        description: "A nested function is a function defined inside another function, which can access variables from the enclosing function.",
        example: "Example: 'def outer(): def inner(): pass'."
      },
      {
        id: 46,
        title: "What is the purpose of the 'eval()' function?",
        type: "Python",
        description: "The 'eval()' function parses and executes a string expression as Python code.",
        example: "Example: 'result = eval('2 + 2')' assigns 4 to 'result'."
      },
      {
        id: 47,
        title: "What are the differences between lists and arrays?",
        type: "Python",
        description: "Lists can hold mixed data types and are part of the standard library, while arrays (from the array module) hold only one data type and are more efficient for numerical operations.",
        example: "Example: 'import array; arr = array.array('i', [1, 2, 3])'."
      },
      {
        id: 48,
        title: "What is an iterable?",
        type: "Python",
        description: "An iterable is an object capable of returning its members one at a time, allowing iteration using loops.",
        example: "Example: Lists, tuples, strings, and dictionaries are all iterable."
      },
      {
        id: 49,
        title: "What is the 'zip()' function?",
        type: "Python",
        description: "The 'zip()' function combines two or more iterables (lists, tuples) into a single iterable of tuples.",
        example: "Example: 'zip([1, 2], ['a', 'b'])' results in '[(1, 'a'), (2, 'b')]'."
      },
      {
        id: 50,
        title: "What are f-strings?",
        type: "Python",
        description: "F-strings are formatted string literals prefixed with 'f' that allow for inline expression evaluation.",
        example: "Example: 'name = 'Alice'; greeting = f'Hello, {name}' results in 'Hello, Alice'."
      },
      {
        id: 51,
        title: "How do you create a virtual environment?",
        type: "Python",
        description: "You can create a virtual environment using the 'venv' module with the command 'python -m venv env_name'.",
        example: "Example: 'python -m venv myenv' creates a virtual environment named 'myenv'."
      },
      {
        id: 52,
        title: "What is the purpose of the 'os' module?",
        type: "Python",
        description: "The 'os' module provides a way to use operating system-dependent functionality, like reading or writing to the file system.",
        example: "Example: 'import os; os.getcwd()' gets the current working directory."
      },
      {
        id: 53,
        title: "What is the purpose of the 'sys' module?",
        type: "Python",
        description: "The 'sys' module provides access to system-specific parameters and functions, like command-line arguments.",
        example: "Example: 'import sys; print(sys.argv)' prints command-line arguments."
      },
      {
        id: 54,
        title: "What is the 'datetime' module?",
        type: "Python",
        description: "The 'datetime' module supplies classes for manipulating dates and times in both simple and complex ways.",
        example: "Example: 'from datetime import datetime; now = datetime.now()'."
      },
      {
        id: 55,
        title: "How do you create a new file in Python?",
        type: "Python",
        description: "You can create a new file using the 'open()' function in write mode.",
        example: "Example: 'with open('new_file.txt', 'w') as f: f.write('Hello, World!')'."
      },
      {
        id: 56,
        title: "What is the purpose of the 'json' module?",
        type: "Python",
        description: "The 'json' module provides functions for working with JSON data, including parsing and generating JSON.",
        example: "Example: 'import json; json_data = json.dumps(data)' converts Python objects to JSON."
      },
      {
        id: 57,
        title: "What is list comprehension?",
        type: "Python",
        description: "List comprehension provides a concise way to create lists using a single line of code.",
        example: "Example: '[x**2 for x in range(5)]' creates a list of squares from 0 to 4."
      },
      {
        id: 58,
        title: "What is the difference between deep copy and shallow copy?",
        type: "Python",
        description: "A shallow copy creates a new object but inserts references into it, while a deep copy creates a new object and recursively copies all objects found in the original.",
        example: "Example: 'import copy; shallow = copy.copy(original); deep = copy.deepcopy(original)'."
      },
      {
        id: 59,
        title: "What is the 'input()' function's default behavior?",
        type: "Python",
        description: "The 'input()' function captures user input as a string and waits for the user to press Enter.",
        example: "Example: 'user_input = input('Enter something:')' captures input."
      },
      {
        id: 60,
        title: "What are decorators in Python?",
        type: "Python",
        description: "Decorators are functions that modify the behavior of another function, method, or class.",
        example: "Example: '@my_decorator def my_function(): pass' applies 'my_decorator' to 'my_function'."
      }
  ];
  
  export default pythonQuestions;
  