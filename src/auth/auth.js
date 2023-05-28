const users = [
    {
      email: "Geralt@gwent.com",
      password: "qwerty",
      username: "Geralt",
    },
    {
      email: "Ciri@gwent.com",
      password: "qwerty",
      username: "Ciri",
    },
    {
      email: "Jaskier@gwent.com",
      password: "qwerty",
      username: "Jaskier",
    },
  ];


export const login = ({ email, password }) => {
    const user = users.find(
      (user) => user.email === email && user.password === password
    );
    return user;
  };
  