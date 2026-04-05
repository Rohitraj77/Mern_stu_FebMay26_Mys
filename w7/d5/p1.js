// cookie is used to track session using the track session ID
// simulated server-side session store
const sessionStore = {
    'abc123': {
        userId: 101,
        username: "Rohit",
        role: "admin"
    }
};
// simualted browser cookie value
const browserCookieSessionId = "abc123";
const sessionData = sessionStore[browserCookieSessionId];
console.log("server-side session data:",sessionData);