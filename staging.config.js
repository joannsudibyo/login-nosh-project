const { defineConfig } = require("cypress");

module.exports = defineConfig({
    viewportHeight: 660,
    viewportWidth: 1400,
  e2e: {
    baseUrl:'https://thenoshproject.com.au/'
    },
    env:{
        username: " ", //replace this with the associate email
        password: " " //replace this with the associate password
    },
});
