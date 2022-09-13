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

## How it works ?
- Run the script in your terminal, in this case node index.js since it is our root

![CLI TOOL](https://user-images.githubusercontent.com/91036479/189781404-dce12afd-a3a6-4029-a915-5741333e441a.png)

- Automatically saves the information if you answer correctly or incorrectly, taking into account the date

![datajson](https://user-images.githubusercontent.com/91036479/189781571-ef834463-0bbc-4347-bbd9-033941af3075.png)





