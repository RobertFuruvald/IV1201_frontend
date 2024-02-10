import '../styling/signUpView.css';

function SignUpView(props) {
  return (
    <div className="signup-section">
      <form className="signup-container" onSubmit={(e) => e.preventDefault()}>
        <div className="input-group">
          <div className="input-row">
            <input
              placeholder="NAME"
              type="text"
              className="input-box"
              onChange={(e) => props.onName(e.target.value)}
            />
            <input
              placeholder="SURNAME"
              type="text"
              className="input-box"
              onChange={(e) => props.onSurname(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="PERSONAL NUMBER"
              type="text"
              className="input-box"
              onChange={(e) => props.onPnr(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="USERNAME"
              type="text"
              className="input-box"
              onChange={(e) => props.onUsername(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="EMAIL"
              type="email"
              className="input-box"
              onChange={(e) => props.onEmail(e.target.value)}
            />
          </div>
          <div className="input-row">
            <input
              placeholder="PASSWORD"
              className="input-box"
              type="password"
              onChange={(e) => props.onPassword(e.target.value)}
              autoComplete="new-password"
            />
          </div>
        </div>
        <p className="message-error">{props.errorText}</p>
        <button className="login-button" onClick={props.onCreate}>
          REGISTER
        </button>
      </form>
    </div>
  );
}

export default SignUpView;
