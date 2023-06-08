# Syfter Front End Tech Test

## Prerequisites

- git
- Node.js v18+

## Installation

1. `npm install` - installs all the node dependencies

## Commands

- `npm run start` - Starts the React project
- `npm run test` - Runs the test suite

## Tech stack

- React
- Typescript
- Material UI
- React Query
- Recharts

## Codebase explained

- The codebase includes a React project with a very simple structure.
- No routes are provided, nor do any need to be added for the purpose of this tech test.
- A single page is rendered by this application which takes the form of a "Syfter company profile" example.
- This example profile displays some mock information about a particular company and it also renders a card with People data (also mocked).
- Material UI has been used to render this company information and its theme is passed through a provider in the main App.tsx file.
- Recharts has been installed for the purpose of providing a mechanism for rendering the graph.
- React Query has been installed but nothing has been implemented with it (that will be one of your tasks!)
- Axios has been installed for interfacing with the endpoint if you choose to use it, but feel free to use a preferred method instead

## Source control

It would be very helpful if you could push your solution up to a github or similar source code repository. However, if this is not possible then a .zip file containing the solution can be provided instead.

If using source control, please start by committing the unmodified source code as the first commit, then add your changes in subsequent commits.

## Your task

### Overview

- You have been provided with a basic example of a company profile but we would like you to add a new card to the main body of this company profile.
- The new card needs to display a graph of financial data returned by a REST API endpoint (https://mocki.io/v1/56597659-8f61-4ffc-8ace-daa52f138c52)
- As is often a problem to solve in the Syfter application, data can be collected from many different data sources. As a result, the data returned by the endpoint will be repeated 3 times, for sources "alpha", "beta", and "gamma".

### What you need to do
Your task will require that you complete the following:

- Create a new component for rendering the company financial data returned by the afore-mentioned endpoint in the form of a graph. Recharts has been installed for you to easily render a line graph.
- Create a mechanism for fetching data from this endpoint so that the component can render this data.
- As this data won't be usable straight away, you will need to complete the empty function `getPreferredFinancialData` to apply something we call "datasource prioritisation and preferences".
- The file `constants/datasourcePreferences.ts` contains 2 arrays that define the preferences and priorities to be applied.
  - This file does provide some extra information about how these are to be used, but the idea is to find out which source takes most precedence for the company financials **revenue**, and company financials **profit** data. Once you have been able to determine which data source is the right one to use for each, you can take the raw data returned by the endpoint and select the appropriate data for each financial year returned.
- A test file called `getPreferredFinancialData.test.ts` has been provided which will help you understand what format your data should ultimately reach and will assert whether your data matches the requirement.
- A screenshot called `Example-finished-page.png` has been provided for you to see what the complete solution should look like

## Tips

Our suggested pattern for fetching the data is along the lines of:

1. Create a `service` that will simply perform a fetch on the provided endpoint
2. Create a custom hook that interacts with the React Query `useQuery` hook using the `service` you created earlier
3. Call the custom hook from your new component
4. Use the function that reformats the returned raw data into the "preferred" data either from your component or as part of the functionality of `useQuery` used in your custom hook, whichever you feel is best

## Good luck!
We are looking forward to what you submit, and please expect for us to discuss your implementation as part of the interview process and hear your explanations for the choices you made. We will also be particularly interested to hear about the topics which you would have liked to explore in greater detail, if you had more time.

If at any point you need any guidance or pointers, or if anything doesn't make sense, please get in touch. Otherwise please have fun and good luck!
