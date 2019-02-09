## SEARCHFE

# Priority/Criteria of Result Ranking:
1. Results that start with the query term are given 1st priority & shown on top in the UI.
2. After that, or, if no result starts with the search term, the shortest (in length) result is given priority & shown on top in the UI.

# Attributes of Results:
1. Rank - This will display the overall rank of the result based on its length & whether it starts with the search term
2. Result - This will display the actual Resultant String found on searching
3. Result Starts With Search Term? - This will display whether the Resultant String starts with the search term or not (Allowed values- Yes OR No)
4. Result Length - This will display the length of the Resultant String

# Steps for Deployment
1. git clone the project
2. cd to the project directory
3. run the command: npm start
4. Fire up the browser & hit localhost:PORT/search (project is deployed at /search, PORT is 3000 at present)



