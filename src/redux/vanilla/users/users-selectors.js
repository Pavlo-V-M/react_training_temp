// This is used in a component that renders or collects data;
// Together with the useSelector() hook - to clean up its syntax;

export const getUsers = store => store.users;

export const getUserById = (id) => (store) => store.users.find((u) => u.id === id);