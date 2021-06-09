export default function Navbar() {
    return (
        <div className={style.container}>
            <header className={style.header}>
                <h1 className="logo">Logo</h1>
                <input type="checkbox" id="nav-toggle" className={['style.nav-toggle']}/>
                <nav className={style.nav}>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Blog</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
                </nav>
                <label htmlFor="nav-toggle" className={style['nav-toggle-label']}>
                <span></span>
                </label>
            </header>
      
      
      
      
            <div className="content">
                <h2>Your content would go here</h2>
            </div>
        </div>
    )
}
