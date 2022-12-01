// use langdb;
db = connect("mongodb://localhost/langdb");

db.createUser({
  user: "admin",
  pwd: "password",
  roles: [
    { role: "userAdmin", db: "langdb" },
    { role: "readWrite", db: "langdb" },
  ],
});
db.languages.insert({
  name: "csharp",
  codedetail: {
    usecase: "system, web, server-side",
    rank: 5,
    compiled: false,
    homepage: "https://dotnet.microsoft.com/learn/csharp",
    download: "https://dotnet.microsoft.com/download/",
    votes: 0,
  },
});
db.languages.insert({
  name: "python",
  codedetail: {
    usecase: "system, web, server-side",
    rank: 3,
    script: false,
    homepage: "https://www.python.org/",
    download: "https://www.python.org/downloads/",
    votes: 0,
  },
});
db.languages.insert({
  name: "javascript",
  codedetail: {
    usecase: "web, client-side",
    rank: 7,
    script: false,
    homepage: "https://en.wikipedia.org/wiki/JavaScript",
    download: "n/a",
    votes: 0,
  },
});
db.languages.insert({
  name: "go",
  codedetail: {
    usecase: "system, web, server-side",
    rank: 12,
    compiled: true,
    homepage: "https://golang.org",
    download: "https://golang.org/dl/",
    votes: 0,
  },
});
db.languages.insert({
  name: "java",
  codedetail: {
    usecase: "system, web, server-side",
    rank: 1,
    compiled: true,
    homepage: "https://www.java.com/en/",
    download: "https://www.java.com/en/download/",
    votes: 0,
  },
});
db.languages.insert({
  name: "nodejs",
  codedetail: {
    usecase: "system, web, server-side",
    rank: 20,
    script: false,
    homepage: "https://nodejs.org/en/",
    download: "https://nodejs.org/en/download/",
    votes: 0,
  },
});

// show collections;

printjson(db.languages.find());
