import inquirer from "inquirer";

const flags = [];
process.argv.forEach((arg) => {
  if (/^-/.test(arg)) {
    flags.push(arg.replaceAll("-", ""));
  }
});

// console.log(flags);

if (flags.includes("a") || flags.includes("add")) {
  addQuestion();
} else {
  askQuestion();
}

// console.log(process.argv);

async function askQuestion() {
  const answers = await inquirer.prompt([
    {
      type: "list",
      name: "position",
      message: "What is your IT position?",
      choices: [
        "Software Enginner",
        "UX/UI",
        "DevOps",
        "Product Manager",
        "Security Enginner",
        "Technical Recruiter",
      ],
    },
    {
      type: "input",
      name: "live",
      message: "Where do you live?",
    },
    {
      type: "list",
      name: "work",
      message: "Where do you work at?",
      choices: [
        "Amazon",
        "Vercel",
        "Google",
        "Microsoft",
        "Auth0",
        "Linkedin",
        "Nowports",
        "Netflix",
        "Other",
      ],
    },
  ]);

  console.log(`Your position is ${answers.position}`);
  console.log(`You live in ${answers.live}`);
  console.log(`You work at ${answers.work}`);

  console.log(
    "Thanks for your aplication, if you fit the profile we will look for you!",
  );
}
