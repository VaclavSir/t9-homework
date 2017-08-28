# Roadmap

## Minimal Solution

- Minimal backend:
    - [x] Function that returns list of strings for a sequence of digits
    - [x] Bootstrap a REST server
    - [x] REST endpoint that wraps the afore mentioned function
- Minimal frontend:
    - [ ] Bootstrap a React app
    - [ ] Create an input for digits and query the REST server on update
    - [ ] List the result from the server

## Beyond the Minimal Solution

- Frontend:
    - [ ] Allow to select a word from list. The first word is selected by default, pressing a select button selects the next one
    - [ ] Implement the "1" key to enter a space/interpunction and to start entering another word
    - [ ] Phone-like UI
    - [ ] Backspace
    - [ ] Possibility to enter the word using multi-tap
- Backend:
    - [ ] Add possibility to return only known words:
        - Based on some open-source list of English words
        - If no word matches given digits sequence, return sequence of first character on every digit (eg. "adgjm" for "2345")
