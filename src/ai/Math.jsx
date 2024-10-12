const differentialCalculusQuestions = [
    {
      id: 1,
      title: "What is a derivative?",
      type: "Calculus",
      description: "A derivative represents the rate at which a function is changing at any given point.",
      example: "Example: The derivative of f(x) = x² is f'(x) = 2x."
    },
    {
      id: 2,
      title: "What is the power rule?",
      type: "Calculus",
      description: "The power rule is a basic rule for finding derivatives of functions of the form f(x) = x^n.",
      example: "Example: The derivative of f(x) = x^3 is f'(x) = 3x²."
    },
    {
      id: 3,
      title: "What is the product rule?",
      type: "Calculus",
      description: "The product rule is used to find the derivative of the product of two functions.",
      example: "Example: If f(x) = u(x)v(x), then f'(x) = u'v + uv'."
    },
    {
      id: 4,
      title: "What is the quotient rule?",
      type: "Calculus",
      description: "The quotient rule is used to find the derivative of the quotient of two functions.",
      example: "Example: If f(x) = u(x)/v(x), then f'(x) = (u'v - uv')/v²."
    },
    {
      id: 5,
      title: "What is the chain rule?",
      type: "Calculus",
      description: "The chain rule is used to find the derivative of a composite function.",
      example: "Example: If f(g(x)), then f'(g(x))g'(x)."
    },
    {
      id: 6,
      title: "What is a critical point?",
      type: "Calculus",
      description: "A critical point occurs where the derivative is zero or undefined, indicating potential maxima or minima.",
      example: "Example: The function f(x) = x³ - 3x has critical points at x = 0, ±√3."
    },
    {
      id: 7,
      title: "What is the second derivative?",
      type: "Calculus",
      description: "The second derivative is the derivative of the derivative, providing information about the concavity of the function.",
      example: "Example: If f'(x) = 2x, then f''(x) = 2."
    },
    {
      id: 8,
      title: "What is the Mean Value Theorem?",
      type: "Calculus",
      description: "The Mean Value Theorem states that if a function is continuous on a closed interval, there exists at least one point where the derivative equals the average rate of change.",
      example: "Example: For f(x) on [a, b], there exists c such that f'(c) = (f(b) - f(a))/(b - a)."
    },
    {
      id: 9,
      title: "What is implicit differentiation?",
      type: "Calculus",
      description: "Implicit differentiation is used to differentiate equations where y is not isolated on one side.",
      example: "Example: For the equation x² + y² = 1, the derivative is dy/dx = -x/y."
    },
    {
      id: 10,
      title: "What is optimization in calculus?",
      type: "Calculus",
      description: "Optimization involves finding the maximum or minimum values of a function using its derivatives.",
      example: "Example: Finding the maximum area of a rectangle under a curve by setting the derivative to zero."
    },
    {
      id: 11,
      title: "What is a limit?",
      type: "Calculus",
      description: "A limit is the value that a function approaches as the input approaches a specified value.",
      example: "Example: lim(x→2)(x² - 4)/(x - 2) = 4."
    },
    {
      id: 12,
      title: "What is L'Hôpital's Rule?",
      type: "Calculus",
      description: "L'Hôpital's Rule is used to evaluate limits of indeterminate forms by taking derivatives.",
      example: "Example: lim(x→0)(sin x/x) = 1 using L'Hôpital's Rule."
    },
    {
      id: 13,
      title: "What is a tangent line?",
      type: "Calculus",
      description: "A tangent line to a curve at a point is the straight line that just touches the curve at that point.",
      example: "Example: The tangent line to f(x) = x² at x = 1 is y = 2x - 1."
    },
    {
      id: 14,
      title: "What is a slope of a tangent?",
      type: "Calculus",
      description: "The slope of the tangent line at a point is given by the derivative of the function at that point.",
      example: "Example: For f(x) = x³, the slope of the tangent at x = 1 is f'(1) = 3."
    },
    {
      id: 15,
      title: "What is a concavity?",
      type: "Calculus",
      description: "Concavity refers to the direction in which a function curves: concave up or concave down.",
      example: "Example: If f''(x) > 0, the function is concave up; if f''(x) < 0, it is concave down."
    },
    {
      id: 16,
      title: "What is a point of inflection?",
      type: "Calculus",
      description: "A point of inflection is where the concavity of a function changes, indicated by the second derivative.",
      example: "Example: The function f(x) = x³ has a point of inflection at x = 0."
    },
    {
      id: 17,
      title: "What are higher-order derivatives?",
      type: "Calculus",
      description: "Higher-order derivatives are derivatives of derivatives, providing more information about a function's behavior.",
      example: "Example: The third derivative, f'''(x), gives insight into the rate of change of concavity."
    },
    {
      id: 18,
      title: "What is a linear approximation?",
      type: "Calculus",
      description: "Linear approximation uses the tangent line at a point to estimate the value of a function near that point.",
      example: "Example: For f(x) near x = a, f(x) ≈ f(a) + f'(a)(x - a)."
    },
    {
      id: 19,
      title: "What is the Fundamental Theorem of Calculus?",
      type: "Calculus",
      description: "The Fundamental Theorem of Calculus links differentiation and integration, stating that integration is the reverse of differentiation.",
      example: "Example: If F is the antiderivative of f, then ∫f(x)dx from a to b = F(b) - F(a)."
    },
    {
      id: 20,
      title: "What is related rates?",
      type: "Calculus",
      description: "Related rates problems involve finding the rate of change of one quantity in relation to another that is also changing.",
      example: "Example: Finding the rate at which the radius of a balloon increases as it inflates."
    },

    {
        id: 21,
        title: "What is the significance of the first derivative test?",
        type: "Calculus",
        description: "The first derivative test helps identify local maxima and minima of a function.",
        example: "Example: If f'(x) changes from positive to negative at x = c, then f(c) is a local maximum."
      },
      {
        id: 22,
        title: "What is the significance of the second derivative test?",
        type: "Calculus",
        description: "The second derivative test is used to determine the concavity of a function at critical points.",
        example: "Example: If f''(x) > 0 at a critical point, it is a local minimum; if f''(x) < 0, it is a local maximum."
      },
      {
        id: 23,
        title: "What is an asymptote?",
        type: "Calculus",
        description: "An asymptote is a line that a graph approaches but never touches.",
        example: "Example: The line y = 0 is a horizontal asymptote for the function f(x) = 1/x."
      },
      {
        id: 24,
        title: "What is a vertical asymptote?",
        type: "Calculus",
        description: "A vertical asymptote occurs when the function approaches infinity as x approaches a certain value.",
        example: "Example: The function f(x) = 1/(x - 2) has a vertical asymptote at x = 2."
      },
      {
        id: 25,
        title: "What is a horizontal asymptote?",
        type: "Calculus",
        description: "A horizontal asymptote occurs when the function approaches a constant value as x approaches infinity or negative infinity.",
        example: "Example: The function f(x) = 1/x has a horizontal asymptote at y = 0."
      },
      {
        id: 26,
        title: "What is the area under a curve?",
        type: "Calculus",
        description: "The area under a curve can be calculated using definite integrals.",
        example: "Example: The area under f(x) = x² from x = 0 to x = 2 is ∫[0 to 2] x² dx = (8/3)."
      },
      {
        id: 27,
        title: "What is an integral?",
        type: "Calculus",
        description: "An integral is a mathematical object that represents the area under a curve.",
        example: "Example: ∫f(x)dx represents the antiderivative of f(x)."
      },
      {
        id: 28,
        title: "What is the difference between definite and indefinite integrals?",
        type: "Calculus",
        description: "A definite integral has limits of integration and yields a number, while an indefinite integral does not have limits and yields a function.",
        example: "Example: ∫[a to b] f(x)dx (definite) vs. ∫f(x)dx (indefinite)."
      },
      {
        id: 29,
        title: "What are exponential functions?",
        type: "Calculus",
        description: "Exponential functions are functions of the form f(x) = a * e^(bx), where e is Euler's number.",
        example: "Example: f(x) = 2e^(3x) is an exponential function."
      },
      {
        id: 30,
        title: "What are logarithmic functions?",
        type: "Calculus",
        description: "Logarithmic functions are the inverses of exponential functions, represented as f(x) = log_a(x).",
        example: "Example: f(x) = log_2(x) is a logarithmic function."
      },
      {
        id: 31,
        title: "What is the relationship between exponential and logarithmic functions?",
        type: "Calculus",
        description: "Exponential functions and logarithmic functions are inverses of each other.",
        example: "Example: If f(x) = e^x, then g(x) = ln(x) is its inverse."
      },
      {
        id: 32,
        title: "What is optimization?",
        type: "Calculus",
        description: "Optimization is the process of finding the maximum or minimum values of a function.",
        example: "Example: To maximize profit, set the derivative equal to zero and solve for x."
      },
      {
        id: 33,
        title: "What is a linear function?",
        type: "Calculus",
        description: "A linear function is a polynomial function of degree one, represented as f(x) = mx + b.",
        example: "Example: f(x) = 2x + 3 is a linear function."
      },
      {
        id: 34,
        title: "What is a quadratic function?",
        type: "Calculus",
        description: "A quadratic function is a polynomial function of degree two, represented as f(x) = ax² + bx + c.",
        example: "Example: f(x) = x² - 4x + 3 is a quadratic function."
      },
      {
        id: 35,
        title: "What is a polynomial function?",
        type: "Calculus",
        description: "A polynomial function is a function that is represented as a sum of powers of x with coefficients.",
        example: "Example: f(x) = 3x^4 - 2x^2 + x - 5 is a polynomial function."
      },
      {
        id: 36,
        title: "What is the relationship between the degree of a polynomial and its end behavior?",
        type: "Calculus",
        description: "The degree of a polynomial affects its end behavior; odd degrees have opposite end behaviors, while even degrees have the same end behavior.",
        example: "Example: For f(x) = x³, as x → ±∞, f(x) → ±∞ (opposite); for f(x) = x², as x → ±∞, f(x) → +∞ (same)."
      },
      {
        id: 37,
        title: "What is the difference between continuous and differentiable functions?",
        type: "Calculus",
        description: "A continuous function does not have breaks or jumps, while a differentiable function has a defined derivative at all points.",
        example: "Example: f(x) = |x| is continuous but not differentiable at x = 0."
      },
      {
        id: 38,
        title: "What is a step function?",
        type: "Calculus",
        description: "A step function is a piecewise constant function that changes values at specified intervals.",
        example: "Example: The function f(x) = 0 for x < 1, f(x) = 1 for 1 ≤ x < 2, and f(x) = 2 for x ≥ 2."
      },
      {
        id: 39,
        title: "What is a sinusoidal function?",
        type: "Calculus",
        description: "Sinusoidal functions are periodic functions represented by sine and cosine functions.",
        example: "Example: f(x) = sin(x) and f(x) = cos(x) are sinusoidal functions."
      },
      {
        id: 40,
        title: "What is the chain rule in integration?",
        type: "Calculus",
        description: "The chain rule in integration allows for the integration of composite functions.",
        example: "Example: ∫f(g(x))g'(x)dx = F(g(x)) + C."
      },
      {
        id: 41,
        title: "What is an open interval?",
        type: "Calculus",
        description: "An open interval is a set of real numbers that does not include its endpoints.",
        example: "Example: The interval (a, b) is open and excludes points a and b."
      },
      {
        id: 42,
        title: "What is a closed interval?",
        type: "Calculus",
        description: "A closed interval includes its endpoints.",
        example: "Example: The interval [a, b] includes both points a and b."
      },
      {
        id: 43,
        title: "What is a piecewise function?",
        type: "Calculus",
        description: "A piecewise function is defined by different expressions for different intervals of the domain.",
        example: "Example: f(x) = { x² for x < 0, x + 1 for x ≥ 0 }."
      },
      {
        id: 44,
        title: "What is the role of limits in calculus?",
        type: "Calculus",
        description: "Limits are foundational to calculus, allowing the analysis of function behavior near specific points.",
        example: "Example: lim(x→a) f(x) helps evaluate continuity and differentiability."
      },
      {
        id: 45,
        title: "What is a differentiable function?",
        type: "Calculus",
        description: "A differentiable function has a defined derivative at all points in its domain.",
        example: "Example: The function f(x) = x² is differentiable everywhere."
      },
      {
        id: 46,
        title: "What is a non-differentiable function?",
        type: "Calculus",
        description: "A non-differentiable function does not have a derivative at one or more points.",
        example: "Example: The function f(x) = |x| is non-differentiable at x = 0."
      },
      {
        id: 47,
        title: "What is a critical point?",
        type: "Calculus",
        description: "A critical point occurs where the derivative is zero or undefined.",
        example: "Example: For f(x) = x³ - 3x, the critical points occur at x = 0 and x = ±√3."
      },
      {
        id: 48,
        title: "What is a local maximum?",
        type: "Calculus",
        description: "A local maximum is a point where the function value is higher than its neighboring values.",
        example: "Example: The function f(x) = -x² has a local maximum at x = 0."
      },
      {
        id: 49,
        title: "What is a local minimum?",
        type: "Calculus",
        description: "A local minimum is a point where the function value is lower than its neighboring values.",
        example: "Example: The function f(x) = x² has a local minimum at x = 0."
      },
      {
        id: 50,
        title: "What is an inflection point?",
        type: "Calculus",
        description: "An inflection point is where the function changes concavity.",
        example: "Example: For f(x) = x³, the inflection point occurs at x = 0."
      }
  ];
  export default differentialCalculusQuestions