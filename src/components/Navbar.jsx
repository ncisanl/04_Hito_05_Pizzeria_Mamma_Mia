export function Navbar() {
  const total = 25000;
  const token = false;
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          Pizzería Mamma Mía!
        </a>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                🍕 Home
              </a>
            </li>
            <li className="nav-item">
              {token ? (
                <a className="nav-link" href="#">
                  🔓 Profile
                </a>
              ) : (
                <a className="nav-link" href="#">
                  🔐 Login
                </a>
              )}
            </li>
            <li className="nav-item">
              {token ? (
                <a className="nav-link" href="#">
                  🔒 Logout
                </a>
              ) : (
                <a className="nav-link" href="#">
                  🔐 Register
                </a>
              )}
            </li>
          </ul>
        </div>
        <span className="nav-link total-navbar">
          🛒 Total: ${total.toLocaleString("es-CL")}
        </span>
      </div>
    </nav>
  );
}
