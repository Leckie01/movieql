const leckie = {
  name: "Leckie",
  age: 27,
  gender: "male"
};

const resolvers = {
  Query: {
    person: () => leckie
  }
};

export default resolvers;
