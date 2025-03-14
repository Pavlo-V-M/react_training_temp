// This is used in a component that renders or collects data;
// Together with the useSelector() hook - to clean up its syntax;

export const getFilter = (store) => {
  const { users, filter } = store;
  console.log("🛠 Current users:", users);
  console.log("🛠 Current filter value:", filter);
  if (filter === "") return users; // Reset case - show all
  return users.filter(user => user.enabled === filter);
};