const tensorflowQuestions = [
    {
      id: 1,
      title: "What is TensorFlow?",
      type: "TensorFlow",
      description: "TensorFlow is an open-source machine learning framework developed by Google for building and training ML models.",
      example: "Example: 'import tensorflow as tf; x = tf.constant(5)'."
    },
    {
      id: 2,
      title: "What are tensors in TensorFlow?",
      type: "TensorFlow",
      description: "Tensors are multi-dimensional arrays used to store data in TensorFlow.",
      example: "Example: 'tensor = tf.convert_to_tensor([[1, 2], [3, 4]])'."
    },
    {
      id: 3,
      title: "What is the purpose of 'tf.keras'?",
      type: "TensorFlow",
      description: "'tf.keras' is a high-level API for building and training deep learning models.",
      example: "Example: 'model = tf.keras.Sequential()'."
    },
    {
      id: 4,
      title: "How do you create a model using the Keras API?",
      type: "TensorFlow",
      description: "You can create a model by stacking layers using 'tf.keras.Sequential()'.",
      example: "Example: 'model.add(tf.keras.layers.Dense(10, activation='relu'))'."
    },
    {
      id: 5,
      title: "What is a loss function in TensorFlow?",
      type: "TensorFlow",
      description: "A loss function measures how well the model's predictions match the true labels.",
      example: "Example: 'loss = tf.keras.losses.MeanSquaredError()'."
    },
    {
      id: 6,
      title: "What is the purpose of the 'fit()' method?",
      type: "TensorFlow",
      description: "The 'fit()' method trains the model on the training dataset.",
      example: "Example: 'model.fit(x_train, y_train, epochs=5)'."
    },
    {
      id: 7,
      title: "How do you evaluate a model in TensorFlow?",
      type: "TensorFlow",
      description: "You can evaluate a model using the 'evaluate()' method on test data.",
      example: "Example: 'model.evaluate(x_test, y_test)'."
    },
    {
      id: 8,
      title: "What is TensorFlow Lite?",
      type: "TensorFlow",
      description: "TensorFlow Lite is a lightweight solution for mobile and embedded devices.",
      example: "Example: 'tflite_model = tf.lite.TFLiteConverter.from_keras_model(model)'."
    },
    {
      id: 9,
      title: "What is a callback in TensorFlow?",
      type: "TensorFlow",
      description: "Callbacks are functions that are called at specific points during training.",
      example: "Example: 'callback = tf.keras.callbacks.EarlyStopping(monitor='loss')'."
    },
    {
      id: 10,
      title: "How do you save a model in TensorFlow?",
      type: "TensorFlow",
      description: "You can save a model using the 'save()' method.",
      example: "Example: 'model.save('my_model.h5')'."
    },
    {
      id: 11,
      title: "What is a pretrained model?",
      type: "TensorFlow",
      description: "A pretrained model is a model that has been previously trained on a dataset and can be fine-tuned for other tasks.",
      example: "Example: 'model = tf.keras.applications.MobileNetV2(weights='imagenet')'."
    },
    {
      id: 12,
      title: "What is the purpose of 'tf.data'?",
      type: "TensorFlow",
      description: "'tf.data' provides utilities to build efficient input pipelines for TensorFlow.",
      example: "Example: 'dataset = tf.data.Dataset.from_tensor_slices((x_train, y_train))'."
    },
    {
      id: 13,
      title: "What are TensorFlow models?",
      type: "TensorFlow",
      description: "Models are objects that contain the architecture and parameters of a neural network.",
      example: "Example: 'model = tf.keras.Model(inputs, outputs)'."
    },
    {
      id: 14,
      title: "What is 'tf.keras.layers.Conv2D'?",
      type: "TensorFlow",
      description: "Conv2D is a 2D convolution layer commonly used in CNNs for image processing.",
      example: "Example: 'layer = tf.keras.layers.Conv2D(filters=32, kernel_size=(3, 3), activation='relu')'."
    },
    {
      id: 15,
      title: "What is 'tf.keras.optimizers.Adam'?",
      type: "TensorFlow",
      description: "Adam is an optimizer that combines the advantages of two other extensions of stochastic gradient descent.",
      example: "Example: 'optimizer = tf.keras.optimizers.Adam(learning_rate=0.001)'."
    },
    {
      id: 16,
      title: "How do you preprocess images in TensorFlow?",
      type: "TensorFlow",
      description: "You can preprocess images using the 'tf.image' module.",
      example: "Example: 'image = tf.image.resize(image, [224, 224])'."
    },
    {
      id: 17,
      title: "What is 'tf.keras.metrics'?",
      type: "TensorFlow",
      description: "'tf.keras.metrics' provides functions to compute various performance metrics during training and evaluation.",
      example: "Example: 'accuracy = tf.keras.metrics.Accuracy()'."
    },
    {
      id: 18,
      title: "What is transfer learning?",
      type: "TensorFlow",
      description: "Transfer learning is a technique where a model developed for a specific task is reused as the starting point for a model on a second task.",
      example: "Example: 'model.layers[0].trainable = False' to freeze layers."
    },
    {
      id: 19,
      title: "What is a validation split?",
      type: "TensorFlow",
      description: "A validation split is a percentage of the training data used to evaluate the model's performance during training.",
      example: "Example: 'model.fit(x_train, y_train, validation_split=0.2)'."
    },
    {
      id: 20,
      title: "How do you implement dropout in TensorFlow?",
      type: "TensorFlow",
      description: "Dropout is a regularization technique that randomly drops units during training.",
      example: "Example: 'tf.keras.layers.Dropout(rate=0.5)' drops 50% of the units."
    }
  ];
export default tensorflowQuestions  