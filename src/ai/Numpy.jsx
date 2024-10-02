const numpyQuestions = [
    {
      id: 1,
      title: "What is NumPy?",
      type: "NumPy",
      description: "NumPy is a library for the Python programming language that supports large, multi-dimensional arrays and matrices.",
      example: "Example: 'import numpy as np; array = np.array([1, 2, 3])'."
    },
    {
      id: 2,
      title: "How do you create an array in NumPy?",
      type: "NumPy",
      description: "You can create an array using 'np.array()' or other functions.",
      example: "Example: 'arr = np.array([[1, 2], [3, 4]])'."
    },
    {
      id: 3,
      title: "What is the shape of a NumPy array?",
      type: "NumPy",
      description: "The shape of an array represents the number of elements along each axis.",
      example: "Example: 'arr.shape' returns (2, 2) for a 2x2 array."
    },
    {
      id: 4,
      title: "What is a broadcast in NumPy?",
      type: "NumPy",
      description: "Broadcasting allows NumPy to perform arithmetic operations on arrays of different shapes.",
      example: "Example: 'np.array([1, 2]) + np.array([[1], [2]]) results in [[2, 3], [3, 4]]."
    },
    {
      id: 5,
      title: "How do you perform element-wise operations in NumPy?",
      type: "NumPy",
      description: "You can perform element-wise operations directly on NumPy arrays.",
      example: "Example: 'arr + 1' adds 1 to each element of the array."
    },
    {
      id: 6,
      title: "What is slicing in NumPy?",
      type: "NumPy",
      description: "Slicing allows you to access a subset of an array using indices.",
      example: "Example: 'arr[0:1, 0:2]' selects the first row of the array."
    },
    {
      id: 7,
      title: "What is the purpose of 'np.zeros()'?",
      type: "NumPy",
      description: "'np.zeros()' creates an array filled with zeros.",
      example: "Example: 'zeros_array = np.zeros((2, 3))' creates a 2x3 array of zeros."
    },
    {
      id: 8,
      title: "How do you reshape an array in NumPy?",
      type: "NumPy",
      description: "You can reshape an array using the 'reshape()' method.",
      example: "Example: 'arr.reshape(4, 1)' reshapes a 1D array to a 4x1 array."
    },
    {
      id: 9,
      title: "What is 'np.dot()' used for?",
      type: "NumPy",
      description: "'np.dot()' computes the dot product of two arrays.",
      example: "Example: 'np.dot(a, b)' calculates the dot product of vectors a and b."
    },
    {
      id: 10,
      title: "How do you compute the mean of a NumPy array?",
      type: "NumPy",
      description: "You can compute the mean using 'np.mean()'.",
      example: "Example: 'mean_value = np.mean(arr)' computes the mean of the array."
    },
    {
      id: 11,
      title: "What is the purpose of 'np.arange()'?",
      type: "NumPy",
      description: "'np.arange()' creates an array with a range of values.",
      example: "Example: 'np.arange(0, 10, 2)' creates an array [0, 2, 4, 6, 8]."
    },
    {
      id: 12,
      title: "How do you stack arrays in NumPy?",
      type: "NumPy",
      description: "You can stack arrays using 'np.vstack()' or 'np.hstack()'.",
      example: "Example: 'np.vstack((a, b))' stacks arrays a and b vertically."
    },
    {
      id: 13,
      title: "What is the purpose of 'np.linalg.inv()'?",
      type: "NumPy",
      description: "'np.linalg.inv()' computes the inverse of a matrix.",
      example: "Example: 'inv_matrix = np.linalg.inv(matrix)' computes the inverse of the matrix."
    },
    {
      id: 14,
      title: "What is the purpose of 'np.random'?",
      type: "NumPy",
      description: "'np.random' is a module for generating random numbers.",
      example: "Example: 'np.random.rand(3, 2)' generates a 3x2 array of random numbers."
    },
    {
      id: 15,
      title: "How do you save a NumPy array to a file?",
      type: "NumPy",
      description: "You can save an array using 'np.save()'.",
      example: "Example: 'np.save('array.npy', arr)' saves the array to a file."
    },
    {
      id: 16,
      title: "How do you load a NumPy array from a file?",
      type: "NumPy",
      description: "You can load an array using 'np.load()'.",
      example: "Example: 'loaded_arr = np.load('array.npy')' loads the array from a file."
    },
    {
      id: 17,
      title: "What is the purpose of 'np.unique()'?",
      type: "NumPy",
      description: "'np.unique()' returns the unique elements of an array.",
      example: "Example: 'unique_elements = np.unique(arr)' returns unique values from arr."
    },
    {
      id: 18,
      title: "How do you concatenate arrays in NumPy?",
      type: "NumPy",
      description: "You can concatenate arrays using 'np.concatenate()'.",
      example: "Example: 'np.concatenate((a, b), axis=0)' concatenates a and b along axis 0."
    },
    {
      id: 19,
      title: "What is the purpose of 'np.sum()'?",
      type: "NumPy",
      description: "'np.sum()' computes the sum of array elements.",
      example: "Example: 'total = np.sum(arr)' computes the total sum of the array."
    },
    {
      id: 20,
      title: "How do you find the maximum value in a NumPy array?",
      type: "NumPy",
      description: "You can find the maximum value using 'np.max()'.",
      example: "Example: 'max_value = np.max(arr)' returns the maximum value of the array."
    }
  ];
export default numpyQuestions  