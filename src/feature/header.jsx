import "../App.css";
import { UserMenu } from "../components/user-menu";

const Header = ({ title }) => {
  return (
    <header className="App-header">
      <nav className="Nav">
        <div className="Nav-name">{title}</div>
        <UserMenu />
      </nav>
    </header>
  );
};

export { Header };
