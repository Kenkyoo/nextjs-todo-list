export function Footer() {
  return (
    <footer className="footer sm:footer-horizontal footer-center bg-base-300 text-base-content p-4">
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
          <label className="swap swap-flip text-lg ml-2">
            {/* this hidden checkbox controls the state */}
            <input type="checkbox" />

            <div className="swap-on">😈</div>
            <div className="swap-off">😇</div>
          </label>
        </p>
      </aside>
    </footer>
  );
}
