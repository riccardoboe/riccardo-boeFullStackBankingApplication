//global styles

function Spa() {
  return (
    <HashRouter>
      <div>
        <UserContext.Provider
          value={{
            users: [{}],
            currentUser: {},
            currentUserIndex: -1,
            loggedIn: false,
            loginStatus: "Login",
            productsCounter: 0,
            badBankCounter: 0,
            createAccountCounter: 0,
            loginCounter: 0,
            depositCounter: 0,
            withdrawCounter: 0,
            balanceCounter: 0,
            allDataCounter: 0,
            navCounter: 0,
          }}
        >
          <div className="container" style={{ padding: "40px" }}>
            <Route path="/" exact component={Home} />
            <Route path="/createaccount/" component={CreateAccount} />
            <Route path="/login/" component={Login} />
            <Route path="/deposit/" component={Deposit} />
            <Route path="/withdraw/" component={Withdraw} />
            <Route path="/balance/" component={Balance} />
            <Route path="/alldata/" component={AllData} />
          </div>
        </UserContext.Provider>
      </div>
    </HashRouter>
  );
}

ReactDOM.render(<Spa />, document.getElementById("root"));
