const opencvQuestions = [
    {
      id: 1,
      title: "What is OpenCV?",
      type: "OpenCV",
      description: "OpenCV is an open-source computer vision and machine learning software library.",
      example: "Example: 'import cv2; image = cv2.imread('image.jpg')'."
    },
    {
      id: 2,
      title: "How do you read an image in OpenCV?",
      type: "OpenCV",
      description: "You can read an image using 'cv2.imread()'.",
      example: "Example: 'image = cv2.imread('image.jpg')' reads an image file."
    },
    {
      id: 3,
      title: "How do you display an image in OpenCV?",
      type: "OpenCV",
      description: "You can display an image using 'cv2.imshow()'.",
      example: "Example: 'cv2.imshow('Image', image)' displays an image."
    },
    {
      id: 4,
      title: "How do you save an image in OpenCV?",
      type: "OpenCV",
      description: "You can save an image using 'cv2.imwrite()'.",
      example: "Example: 'cv2.imwrite('output.jpg', image)' saves the image."
    },
    {
      id: 5,
      title: "How do you convert a color image to grayscale?",
      type: "OpenCV",
      description: "You can convert to grayscale using 'cv2.cvtColor()'.",
      example: "Example: 'gray_image = cv2.cvtColor(image, cv2.COLOR_BGR2GRAY)' converts to grayscale."
    },
    {
      id: 6,
      title: "How do you resize an image in OpenCV?",
      type: "OpenCV",
      description: "You can resize an image using 'cv2.resize()'.",
      example: "Example: 'resized_image = cv2.resize(image, (width, height))' resizes the image."
    },
    {
      id: 7,
      title: "How do you draw a rectangle on an image?",
      type: "OpenCV",
      description: "You can draw a rectangle using 'cv2.rectangle()'.",
      example: "Example: 'cv2.rectangle(image, (x1, y1), (x2, y2), (255, 0, 0), thickness)' draws a rectangle."
    },
    {
      id: 8,
      title: "How do you apply Gaussian blur to an image?",
      type: "OpenCV",
      description: "You can apply Gaussian blur using 'cv2.GaussianBlur()'.",
      example: "Example: 'blurred_image = cv2.GaussianBlur(image, (5, 5), 0)' applies Gaussian blur."
    },
    {
      id: 9,
      title: "How do you perform edge detection?",
      type: "OpenCV",
      description: "You can perform edge detection using 'cv2.Canny()'.",
      example: "Example: 'edges = cv2.Canny(image, threshold1, threshold2)' detects edges."
    },
    {
      id: 10,
      title: "How do you find contours in an image?",
      type: "OpenCV",
      description: "You can find contours using 'cv2.findContours()'.",
      example: "Example: 'contours, _ = cv2.findContours(image, cv2.RETR_TREE, cv2.CHAIN_APPROX_SIMPLE)' finds contours."
    },
    {
      id: 11,
      title: "How do you draw contours on an image?",
      type: "OpenCV",
      description: "You can draw contours using 'cv2.drawContours()'.",
      example: "Example: 'cv2.drawContours(image, contours, -1, (0, 255, 0), 3)' draws contours."
    },
    {
      id: 12,
      title: "How do you rotate an image?",
      type: "OpenCV",
      description: "You can rotate an image using 'cv2.rotate()'.",
      example: "Example: 'rotated_image = cv2.rotate(image, cv2.ROTATE_90_CLOCKWISE)' rotates the image."
    },
    {
      id: 13,
      title: "How do you split an image into channels?",
      type: "OpenCV",
      description: "You can split an image into channels using 'cv2.split()'.",
      example: "Example: 'b, g, r = cv2.split(image)' splits the image into BGR channels."
    },
    {
      id: 14,
      title: "How do you create a mask for an image?",
      type: "OpenCV",
      description: "You can create a mask using 'cv2.inRange()'.",
      example: "Example: 'mask = cv2.inRange(image, lower_bound, upper_bound)' creates a mask."
    },
    {
      id: 15,
      title: "How do you apply a mask to an image?",
      type: "OpenCV",
      description: "You can apply a mask using 'cv2.bitwise_and()'.",
      example: "Example: 'masked_image = cv2.bitwise_and(image, image, mask=mask)' applies a mask."
    },
    {
      id: 16,
      title: "How do you change the color space of an image?",
      type: "OpenCV",
      description: "You can change the color space using 'cv2.cvtColor()'.",
      example: "Example: 'hsv_image = cv2.cvtColor(image, cv2.COLOR_BGR2HSV)' changes to HSV."
    },
    {
      id: 17,
      title: "How do you draw text on an image?",
      type: "OpenCV",
      description: "You can draw text using 'cv2.putText()'.",
      example: "Example: 'cv2.putText(image, 'Text', (x, y), font, scale, color, thickness)' draws text."
    },
    {
      id: 18,
      title: "How do you apply morphological transformations?",
      type: "OpenCV",
      description: "You can apply morphological transformations using 'cv2.morphologyEx()'.",
      example: "Example: 'result = cv2.morphologyEx(image, cv2.MORPH_OPEN, kernel)' applies transformations."
    },
    {
      id: 19,
      title: "How do you save a video in OpenCV?",
      type: "OpenCV",
      description: "You can save a video using 'cv2.VideoWriter()'.",
      example: "Example: 'out = cv2.VideoWriter('output.avi', fourcc, fps, (width, height))' saves a video."
    },
    {
      id: 20,
      title: "How do you release resources in OpenCV?",
      type: "OpenCV",
      description: "You can release resources using 'cv2.destroyAllWindows()'.",
      example: "Example: 'cv2.destroyAllWindows()' closes all OpenCV windows."
    }
  ];

  export default opencvQuestions