var inquirer = require('inquirer');
var fetch = require('node-fetch');

inquirer
  .prompt([
    {
        type: "input",
        name: "token",
        message: "Enter token: "
    },
    {
        type: "input",
        name: "branch",
        message: "Enter branch: "
    }
  ])
  .then(answers => {
      console.log(answers)
    fetch('https://api.github.com/repos/davidlam-yc/test-repo/dispatches', {
        method: 'POST',
        headers: {
            'Accept': 'application/vnd.github.everest-preview+json',
            'Authorization': `token ${answers.token}`
        },
        body: JSON.stringify({
            event_type: "manual-test",
            client_payload: {
                branch: `${answers.branch}`
            }
        })
    })
  })
  .catch(error => {
    console.log(error)
  });