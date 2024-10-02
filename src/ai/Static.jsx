const statisticsQuestions = [
    {
      id: 1,
      title: "What is a population in statistics?",
      type: "Statistics",
      description: "A population is the entire group of individuals or instances about whom we hope to learn.",
      example: "Example: All the students in a school represent a population."
    },
    {
      id: 2,
      title: "What is a sample?",
      type: "Statistics",
      description: "A sample is a subset of a population, used to represent the group as a whole.",
      example: "Example: Surveying 100 students from a school to understand the entire student body."
    },
    {
      id: 3,
      title: "What is the difference between descriptive and inferential statistics?",
      type: "Statistics",
      description: "Descriptive statistics summarize data, while inferential statistics draw conclusions about populations based on samples.",
      example: "Example: Descriptive statistics include mean and median; inferential statistics include hypothesis testing."
    },
    {
      id: 4,
      title: "What is a random variable?",
      type: "Statistics",
      description: "A random variable is a numerical outcome of a random phenomenon.",
      example: "Example: The number of heads in 10 coin flips is a random variable."
    },
    {
      id: 5,
      title: "What is a probability distribution?",
      type: "Statistics",
      description: "A probability distribution describes how probabilities are distributed over the values of the random variable.",
      example: "Example: The normal distribution is a common probability distribution."
    },
    {
      id: 6,
      title: "What is a normal distribution?",
      type: "Statistics",
      description: "A normal distribution is a probability distribution that is symmetric about the mean, showing that data near the mean are more frequent in occurrence.",
      example: "Example: Heights of individuals often follow a normal distribution."
    },
    {
      id: 7,
      title: "What is the mean?",
      type: "Statistics",
      description: "The mean is the average of a set of numbers, calculated by dividing the sum of the values by the number of values.",
      example: "Example: The mean of 2, 3, and 5 is (2 + 3 + 5) / 3 = 3.33."
    },
    {
      id: 8,
      title: "What is the median?",
      type: "Statistics",
      description: "The median is the middle value of a data set when the numbers are arranged in order.",
      example: "Example: The median of 3, 1, 4 is 3 when sorted."
    },
    {
      id: 9,
      title: "What is the mode?",
      type: "Statistics",
      description: "The mode is the value that appears most frequently in a data set.",
      example: "Example: The mode of 1, 2, 2, 3 is 2."
    },
    {
      id: 10,
      title: "What is variance?",
      type: "Statistics",
      description: "Variance measures how far a set of numbers are spread out from their average value.",
      example: "Example: The variance of 2, 4, 4, 4, 5, 5, 7, 9 is 4."
    },
    {
      id: 11,
      title: "What is standard deviation?",
      type: "Statistics",
      description: "Standard deviation is the square root of the variance, providing a measure of the spread of a set of values.",
      example: "Example: A standard deviation of 2 indicates that most values fall within 2 units of the mean."
    },
    {
      id: 12,
      title: "What is a confidence interval?",
      type: "Statistics",
      description: "A confidence interval is a range of values, derived from a data set, that is likely to contain the value of an unknown population parameter.",
      example: "Example: A 95% confidence interval for a mean might be [50, 60]."
    },
    {
      id: 13,
      title: "What is a hypothesis test?",
      type: "Statistics",
      description: "A hypothesis test is a statistical method used to make decisions based on data analysis.",
      example: "Example: Testing whether a coin is fair by comparing observed outcomes to expected outcomes."
    },
    {
      id: 14,
      title: "What are Type I and Type II errors?",
      type: "Statistics",
      description: "Type I error is rejecting a true null hypothesis, while Type II error is failing to reject a false null hypothesis.",
      example: "Example: Type I error is concluding a drug works when it does not; Type II error is concluding it doesn't work when it does."
    },
    {
      id: 15,
      title: "What is p-value?",
      type: "Statistics",
      description: "The p-value is the probability of obtaining test results at least as extreme as the observed results, assuming that the null hypothesis is true.",
      example: "Example: A p-value of 0.03 indicates a 3% chance of observing the results if the null hypothesis is true."
    },
    {
      id: 16,
      title: "What is correlation?",
      type: "Statistics",
      description: "Correlation measures the strength and direction of a linear relationship between two variables.",
      example: "Example: A correlation coefficient of 0.8 indicates a strong positive correlation."
    },
    {
      id: 17,
      title: "What is regression analysis?",
      type: "Statistics",
      description: "Regression analysis is a statistical method for estimating the relationships among variables.",
      example: "Example: Using linear regression to predict sales based on advertising spend."
    },
    {
      id: 18,
      title: "What is a scatter plot?",
      type: "Statistics",
      description: "A scatter plot is a graphical representation of two variables, showing the relationship between them.",
      example: "Example: A scatter plot of height vs. weight can reveal trends."
    },
    {
      id: 19,
      title: "What is a box plot?",
      type: "Statistics",
      description: "A box plot visually displays the distribution of a data set based on a five-number summary.",
      example: "Example: A box plot shows the median, quartiles, and outliers of a data set."
    },
    {
      id: 20,
      title: "What is an outlier?",
      type: "Statistics",
      description: "An outlier is a data point that differs significantly from other observations in a dataset.",
      example: "Example: In the dataset 1, 2, 2, 3, 100, the value 100 is an outlier."
    },
    {
      id: 21,
      title: "What is a contingency table?",
      type: "Statistics",
      description: "A contingency table displays the frequency distribution of variables, allowing analysis of the relationship between them.",
      example: "Example: A table showing the number of males and females who prefer different types of products."
    },
    {
      id: 22,
      title: "What is a chi-square test?",
      type: "Statistics",
      description: "A chi-square test is a statistical test to determine if there is a significant association between categorical variables.",
      example: "Example: Testing if gender is independent of voting preference."
    },
    {
      id: 23,
      title: "What is ANOVA (Analysis of Variance)?",
      type: "Statistics",
      description: "ANOVA is a statistical method used to compare means among three or more groups to see if at least one is different.",
      example: "Example: Testing if students' test scores differ based on teaching method."
    },
    {
      id: 24,
      title: "What is the Central Limit Theorem?",
      type: "Statistics",
      description: "The Central Limit Theorem states that the sampling distribution of the sample mean approaches a normal distribution as the sample size increases.",
      example: "Example: Regardless of the population distribution, the distribution of sample means will be approximately normal for large enough samples."
    },
    {
      id: 25,
      title: "What is the Law of Large Numbers?",
      type: "Statistics",
      description: "The Law of Large Numbers states that as the size of a sample increases, its sample mean will get closer to the expected value.",
      example: "Example: Flipping a fair coin many times will result in approximately equal numbers of heads and tails."
    },
    {
      id: 26,
      title: "What is the difference between qualitative and quantitative data?",
      type: "Statistics",
      description: "Qualitative data represents categories or qualities, while quantitative data represents numerical values.",
      example: "Example: Colors (qualitative) vs. heights (quantitative)."
    },
    {
      id: 27,
      title: "What is a histogram?",
      type: "Statistics",
      description: "A histogram is a graphical representation of the distribution of numerical data using bars.",
      example: "Example: A histogram showing the frequency of test scores."
    },
    {
      id: 28,
      title: "What is the skewness of a distribution?",
      type: "Statistics",
      description: "Skewness measures the asymmetry of a probability distribution.",
      example: "Example: A positively skewed distribution has a longer right tail."
    },
    {
      id: 29,
      title: "What is kurtosis?",
      type: "Statistics",
      description: "Kurtosis measures the tails' heaviness of a distribution compared to a normal distribution.",
      example: "Example: A distribution with high kurtosis has heavy tails and a sharp peak."
    },
    {
      id: 30,
      title: "What is a simple random sample?",
      type: "Statistics",
      description: "A simple random sample is a subset of individuals chosen from a larger set, where each individual has an equal chance of being selected.",
      example: "Example: Drawing names from a hat to select a sample."
    },
    {
      id: 31,
      title: "What is stratified sampling?",
      type: "Statistics",
      description: "Stratified sampling involves dividing the population into strata and taking a random sample from each stratum.",
      example: "Example: Sampling students from different grade levels to ensure representation."
    },
    {
      id: 32,
      title: "What is cluster sampling?",
      type: "Statistics",
      description: "Cluster sampling involves dividing the population into clusters and randomly selecting entire clusters for sampling.",
      example: "Example: Selecting entire classrooms instead of individual students."
    },
    {
      id: 33,
      title: "What is systematic sampling?",
      type: "Statistics",
      description: "Systematic sampling involves selecting every kth individual from a list after randomly selecting a starting point.",
      example: "Example: Choosing every 10th name from a list."
    },
    {
      id: 34,
      title: "What is the difference between bias and variability?",
      type: "Statistics",
      description: "Bias refers to systematic errors in sampling or measurement, while variability refers to how spread out the values are.",
      example: "Example: A biased sample may overrepresent a group, while high variability indicates a wide range of outcomes."
    },
    {
      id: 35,
      title: "What is a sampling distribution?",
      type: "Statistics",
      description: "A sampling distribution is the probability distribution of a statistic (like the sample mean) obtained from a large number of samples.",
      example: "Example: The distribution of sample means from repeated samples from a population."
    },
    {
      id: 36,
      title: "What is the difference between observational and experimental studies?",
      type: "Statistics",
      description: "Observational studies observe subjects without manipulation, while experimental studies involve manipulation of variables.",
      example: "Example: Observing dietary habits (observational) vs. conducting a diet experiment (experimental)."
    },
    {
      id: 37,
      title: "What is a control group?",
      type: "Statistics",
      description: "A control group is a baseline group that does not receive the experimental treatment for comparison purposes.",
      example: "Example: In a drug trial, the control group receives a placebo."
    },
    {
      id: 38,
      title: "What is a treatment group?",
      type: "Statistics",
      description: "A treatment group is the group that receives the experimental treatment in a study.",
      example: "Example: In a drug trial, the treatment group receives the actual drug being tested."
    },
    {
      id: 39,
      title: "What is a paired sample?",
      type: "Statistics",
      description: "Paired samples consist of two sets of related observations used to determine differences between them.",
      example: "Example: Measuring blood pressure before and after treatment in the same group of patients."
    },
    {
      id: 40,
      title: "What is a two-sample test?",
      type: "Statistics",
      description: "A two-sample test compares the means of two independent groups to determine if they are statistically different.",
      example: "Example: Comparing the test scores of students from two different classes."
    },
    {
      id: 41,
      title: "What is the F-test?",
      type: "Statistics",
      description: "The F-test is used to compare variances between two populations to determine if they are significantly different.",
      example: "Example: Comparing the variance in scores of two different groups."
    },
    {
      id: 42,
      title: "What is logistic regression?",
      type: "Statistics",
      description: "Logistic regression is a statistical method for predicting binary classes based on one or more predictor variables.",
      example: "Example: Predicting whether an email is spam (yes/no) based on its content."
    },
    {
      id: 43,
      title: "What is time series analysis?",
      type: "Statistics",
      description: "Time series analysis involves methods for analyzing time-ordered data points to identify trends and seasonal patterns.",
      example: "Example: Analyzing monthly sales data to forecast future sales."
    },
    {
      id: 44,
      title: "What is a probability density function (PDF)?",
      type: "Statistics",
      description: "A probability density function describes the likelihood of a continuous random variable taking on a particular value.",
      example: "Example: The PDF of a normal distribution is defined by its mean and standard deviation."
    },
    {
      id: 45,
      title: "What is a cumulative distribution function (CDF)?",
      type: "Statistics",
      description: "A cumulative distribution function describes the probability that a random variable takes a value less than or equal to x.",
      example: "Example: The CDF of a normal distribution shows the area under the curve to the left of a value."
    },
    {
      id: 46,
      title: "What is the difference between a parameter and a statistic?",
      type: "Statistics",
      description: "A parameter is a value that describes a characteristic of a population, while a statistic describes a characteristic of a sample.",
      example: "Example: The population mean (parameter) vs. the sample mean (statistic)."
    },
    {
      id: 47,
      title: "What is the difference between internal and external validity?",
      type: "Statistics",
      description: "Internal validity refers to whether the results of a study accurately reflect the truth, while external validity refers to the generalizability of the results.",
      example: "Example: A well-controlled lab experiment may have high internal validity but low external validity."
    },
    {
      id: 48,
      title: "What is Bayesian statistics?",
      type: "Statistics",
      description: "Bayesian statistics incorporates prior knowledge or beliefs when interpreting statistical evidence.",
      example: "Example: Using prior distribution of disease prevalence to update estimates based on new data."
    },
    {
      id: 49,
      title: "What is multicollinearity?",
      type: "Statistics",
      description: "Multicollinearity occurs when two or more predictor variables in a multiple regression model are highly correlated.",
      example: "Example: Including both height and weight in a model predicting BMI may lead to multicollinearity."
    },
    {
      id: 50,
      title: "What is the difference between qualitative and quantitative research?",
      type: "Statistics",
      description: "Qualitative research focuses on understanding concepts and experiences, while quantitative research focuses on numerical data and statistical analysis.",
      example: "Example: Interviews (qualitative) vs. surveys (quantitative)."
    }
  ];
export default statisticsQuestions
  