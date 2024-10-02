const pandasQuestions = [
    {
      id: 1,
      title: "What is Pandas?",
      type: "Pandas",
      description: "Pandas is a library for data manipulation and analysis in Python.",
      example: "Example: 'import pandas as pd; df = pd.DataFrame(data)'."
    },
    {
      id: 2,
      title: "How do you read a CSV file in Pandas?",
      type: "Pandas",
      description: "You can read a CSV file using 'pd.read_csv()'.",
      example: "Example: 'df = pd.read_csv('file.csv')'."
    },
    {
      id: 3,
      title: "How do you display the first few rows of a DataFrame?",
      type: "Pandas",
      description: "You can display the first few rows using 'df.head()'.",
      example: "Example: 'df.head(5)' displays the first five rows."
    },
    {
      id: 4,
      title: "How do you filter rows in a DataFrame?",
      type: "Pandas",
      description: "You can filter rows using boolean indexing.",
      example: "Example: 'filtered_df = df[df['column'] > value]' filters rows."
    },
    {
      id: 5,
      title: "How do you group data in Pandas?",
      type: "Pandas",
      description: "You can group data using 'df.groupby()'.",
      example: "Example: 'grouped = df.groupby('column').sum()' groups by column."
    },
    {
      id: 6,
      title: "How do you add a new column in a DataFrame?",
      type: "Pandas",
      description: "You can add a new column by assigning a value to a new column name.",
      example: "Example: 'df['new_column'] = value' adds a new column."
    },
    {
      id: 7,
      title: "How do you merge two DataFrames?",
      type: "Pandas",
      description: "You can merge two DataFrames using 'pd.merge()'.",
      example: "Example: 'merged_df = pd.merge(df1, df2, on='key')'."
    },
    {
      id: 8,
      title: "How do you save a DataFrame to a CSV file?",
      type: "Pandas",
      description: "You can save a DataFrame to a CSV file using 'df.to_csv()'.",
      example: "Example: 'df.to_csv('output.csv', index=False)' saves the DataFrame."
    },
    {
      id: 9,
      title: "What is the purpose of 'df.describe()'?",
      type: "Pandas",
      description: "'df.describe()' generates descriptive statistics of the DataFrame.",
      example: "Example: 'df.describe()' returns statistics of numeric columns."
    },
    {
      id: 10,
      title: "How do you handle missing values in Pandas?",
      type: "Pandas",
      description: "You can handle missing values using 'df.fillna()' or 'df.dropna()'.",
      example: "Example: 'df.fillna(0)' fills missing values with 0."
    },
    {
      id: 11,
      title: "What is the purpose of 'df.iloc[]'?",
      type: "Pandas",
      description: "'df.iloc[]' is used for integer-location based indexing.",
      example: "Example: 'row = df.iloc[0]' gets the first row of the DataFrame."
    },
    {
      id: 12,
      title: "How do you rename columns in a DataFrame?",
      type: "Pandas",
      description: "You can rename columns using 'df.rename()'.",
      example: "Example: 'df.rename(columns={'old_name': 'new_name'})' renames columns."
    },
    {
      id: 13,
      title: "How do you sort a DataFrame?",
      type: "Pandas",
      description: "You can sort a DataFrame using 'df.sort_values()'.",
      example: "Example: 'sorted_df = df.sort_values(by='column_name')' sorts the DataFrame."
    },
    {
      id: 14,
      title: "What is the purpose of 'df.value_counts()'?",
      type: "Pandas",
      description: "'df.value_counts()' returns a Series containing counts of unique values.",
      example: "Example: 'df['column'].value_counts()' counts unique values in a column."
    },
    {
      id: 15,
      title: "How do you pivot a DataFrame?",
      type: "Pandas",
      description: "You can pivot a DataFrame using 'df.pivot()'.",
      example: "Example: 'pivoted_df = df.pivot(index='date', columns='category', values='value')' pivots the DataFrame."
    },
    {
      id: 16,
      title: "What is the purpose of 'df.loc[]'?",
      type: "Pandas",
      description: "'df.loc[]' is used for label-based indexing.",
      example: "Example: 'row = df.loc[0]' gets the row with index 0."
    },
    {
      id: 17,
      title: "How do you apply a function to a DataFrame?",
      type: "Pandas",
      description: "You can apply a function using 'df.apply()'.",
      example: "Example: 'df['column'].apply(func)' applies func to each element in the column."
    },
    {
      id: 18,
      title: "How do you create a DataFrame from a dictionary?",
      type: "Pandas",
      description: "You can create a DataFrame from a dictionary using 'pd.DataFrame()'.",
      example: "Example: 'df = pd.DataFrame({'col1': [1, 2], 'col2': [3, 4]})' creates a DataFrame."
    },
    {
      id: 19,
      title: "How do you change the index of a DataFrame?",
      type: "Pandas",
      description: "You can change the index using 'df.set_index()'.",
      example: "Example: 'df.set_index('column_name')' sets the column as the index."
    },
    {
      id: 20,
      title: "What is the purpose of 'df.info()'?",
      type: "Pandas",
      description: "'df.info()' provides a summary of the DataFrame, including the index dtype and columns.",
      example: "Example: 'df.info()' returns a concise summary of the DataFrame."
    }
  ];
export default pandasQuestions  