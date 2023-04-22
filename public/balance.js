function Balance() {
  const ctx = React.useContext(UserContext);

  if (ctx.loggedIn === false) return "You Have to log in before making any transaction";

  // Create our number formatter.
  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  });

  console.log(
    `Is this money format working ${formatter.format(ctx.currentUser.balance)}`
  );

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm text-left">Balance</div>
        <div className="col-sm text right">
          {formatter.format(ctx.currentUser.balance)}
        </div>
      </div>
    </div>
  );
}
