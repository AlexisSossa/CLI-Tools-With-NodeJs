## Quiz

A CLI tool that will help to test knowledge.

```sh
Quiz
```

- Ask a question
- Evaluate answer or have me self-evaluate
- Log the results

```sh
quiz --add
```

- Start a dialogue
- Ask me for a question
- Ask me for the answer
- Store for future uses

## What do I need?

- Parse arguments
- Interactive command line
- Persist my data - using JSON
 - Reading/Writing from the file system
- Global script
- Self-avaluating or auto-evaluating

## Data Structure

id: Integer
question: String
answer: String
created: String (date)
lastAsked: String (date)
lastAnsweredCorrect: Boolean
