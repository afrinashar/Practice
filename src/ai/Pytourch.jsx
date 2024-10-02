const pytorchQuestions = [
    {
      id: 1,
      title: "What is PyTorch?",
      type: "PyTorch",
      description: "PyTorch is an open-source machine learning library used for applications such as computer vision and natural language processing.",
      example: "Example: 'import torch; x = torch.tensor([1.0, 2.0, 3.0])'."
    },
    {
      id: 2,
      title: "How do you create a tensor in PyTorch?",
      type: "PyTorch",
      description: "You can create a tensor using 'torch.tensor()' or other factory functions.",
      example: "Example: 'x = torch.tensor([[1, 2], [3, 4]])'."
    },
    {
      id: 3,
      title: "What is autograd in PyTorch?",
      type: "PyTorch",
      description: "Autograd is PyTorch's automatic differentiation engine that powers neural network training.",
      example: "Example: 'x.requires_grad_(); y = x ** 2; y.backward()' computes gradients."
    },
    {
      id: 4,
      title: "How do you define a neural network in PyTorch?",
      type: "PyTorch",
      description: "You define a neural network by subclassing 'torch.nn.Module' and implementing the 'forward' method.",
      example: "Example: 'class Net(torch.nn.Module): def forward(self, x): return x * 2'."
    },
    {
      id: 5,
      title: "What is a DataLoader in PyTorch?",
      type: "PyTorch",
      description: "DataLoader provides an iterable over a dataset, allowing batch processing and shuffling of data.",
      example: "Example: 'train_loader = DataLoader(train_dataset, batch_size=32, shuffle=True)'."
    },
    {
      id: 6,
      title: "What is the purpose of 'torch.nn.CrossEntropyLoss()'?",
      type: "PyTorch",
      description: "It computes the cross-entropy loss between the predicted output and the true labels.",
      example: "Example: 'criterion = torch.nn.CrossEntropyLoss(); loss = criterion(preds, targets)'."
    },
    {
      id: 7,
      title: "How do you perform backpropagation in PyTorch?",
      type: "PyTorch",
      description: "You perform backpropagation using the 'backward()' method on the loss tensor.",
      example: "Example: 'loss.backward()' calculates gradients for optimization."
    },
    {
      id: 8,
      title: "What is a tensor operation?",
      type: "PyTorch",
      description: "Tensor operations are mathematical operations that can be performed on PyTorch tensors.",
      example: "Example: 'torch.add(x, y)' adds tensors x and y."
    },
    {
      id: 9,
      title: "How do you move a tensor to a GPU?",
      type: "PyTorch",
      description: "You can move a tensor to a GPU using the 'to()' method.",
      example: "Example: 'x = x.to('cuda')' moves tensor x to GPU."
    },
    {
      id: 10,
      title: "What is a model optimizer in PyTorch?",
      type: "PyTorch",
      description: "An optimizer updates the model parameters based on the gradients computed during backpropagation.",
      example: "Example: 'optimizer = torch.optim.SGD(model.parameters(), lr=0.01)'."
    },
    {
      id: 11,
      title: "What is 'torchvision'?",
      type: "PyTorch",
      description: "Torchvision is a package that provides popular datasets, model architectures, and common image transformations.",
      example: "Example: 'import torchvision.transforms as transforms'."
    },
    {
      id: 12,
      title: "What is the purpose of 'torch.save()'?",
      type: "PyTorch",
      description: "It saves a serialized object to disk, usually a model's state_dict.",
      example: "Example: 'torch.save(model.state_dict(), 'model.pth')'."
    },
    {
      id: 13,
      title: "What is the purpose of 'torch.load()'?",
      type: "PyTorch",
      description: "It loads a serialized object from disk, such as a model's state_dict.",
      example: "Example: 'model.load_state_dict(torch.load('model.pth'))'."
    },
    {
      id: 14,
      title: "How do you calculate the accuracy of a model in PyTorch?",
      type: "PyTorch",
      description: "You compare the predicted labels with the true labels to calculate accuracy.",
      example: "Example: 'accuracy = (predicted == labels).float().mean()'."
    },
    {
      id: 15,
      title: "What is the 'torch.nn.ModuleList()'?",
      type: "PyTorch",
      description: "It is a container for modules that allows you to create a list of submodules.",
      example: "Example: 'self.layers = torch.nn.ModuleList([torch.nn.Linear(10, 10), torch.nn.ReLU()])'."
    },
    {
      id: 16,
      title: "What is the 'torchvision.datasets.CIFAR10'?",
      type: "PyTorch",
      description: "It is a class in torchvision that provides the CIFAR10 dataset for image classification.",
      example: "Example: 'train_dataset = torchvision.datasets.CIFAR10(root='./data', train=True, download=True)'."
    },
    {
      id: 17,
      title: "What is 'torch.optim.lr_scheduler'?",
      type: "PyTorch",
      description: "It provides various learning rate scheduling strategies to adjust the learning rate during training.",
      example: "Example: 'scheduler = torch.optim.lr_scheduler.StepLR(optimizer, step_size=30, gamma=0.1)'."
    },
    {
      id: 18,
      title: "What is the purpose of 'torch.no_grad()'?",
      type: "PyTorch",
      description: "'torch.no_grad()' disables gradient tracking, reducing memory consumption for computations that would not require gradients.",
      example: "Example: 'with torch.no_grad(): output = model(input)'."
    },
    {
      id: 19,
      title: "How do you perform model evaluation in PyTorch?",
      type: "PyTorch",
      description: "You set the model to evaluation mode using 'model.eval()' and run the forward pass without updating weights.",
      example: "Example: 'model.eval(); with torch.no_grad(): output = model(input)'."
    },
    {
      id: 20,
      title: "What is a loss function?",
      type: "PyTorch",
      description: "A loss function quantifies the difference between the predicted output and the true output.",
      example: "Example: 'loss = criterion(output, target)' where criterion is a loss function."
    }
  ];
  export default pytorchQuestions