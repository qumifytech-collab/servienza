import Icon from '@/components/Icon'

export default function Navbar() {
  return (
    <header className="nav" id="nav">
      <div className="wrap nav-inner">
        <a className="brand" href="#top">
          <span className="brand-mark">S</span>
          Servienza
        </a>

        <nav className="nav-links">
          <a className="nav-link" href="#features">
            Features
          </a>

          <a className="nav-link" href="#setup">
            Setup &amp; support
          </a>

          <a className="nav-link" href="#calculator">
            Savings
          </a>

          <a
            className="nav-link"
            href="/compare/servienza-vs-servicetitan"
          >
            Compare
          </a>

          <a className="nav-link" href="#pricing">
            Pricing
          </a>

          <a className="nav-link" href="#faq">
            FAQ
          </a>
        </nav>

        <div className="nav-spacer"></div>

        <div className="nav-actions">
          <a className="login" href="#">
            Login
          </a>

          <a className="btn btn-primary" href="#pricing">
            Get started
          </a>
        </div>

        <button
          className="btn btn-ghost nav-toggle"
          aria-label="Menu"
        >
          <Icon name="menu" className="icon" />
        </button>
      </div>
    </header>
  );
}
