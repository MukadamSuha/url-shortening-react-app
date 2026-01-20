import React from 'react';
import UrlForm from '../components/UrlForm';
import UrlList from '../components/UrlList';
import useLocalStorage from '../hooks/useLocalStorage';
//import heroIllustration from '../../images/illustration-working.svg';

const Home = () => {
    const [urls, setUrls] = useLocalStorage('urls', []);

    const handleAdd = (item) => {
        if (!item) return;
        setUrls(prev => {
            const list = Array.isArray(prev) ? prev : [];
            return [item, ...list];
        });
    };

    const handleRemove = (id) => {
        setUrls(prev => (Array.isArray(prev) ? prev.filter(u => u.id !== id) : []));
    };

    return (
        <div>
            <header className="site-header">
                <div className="wrap">
                    <div className="brand">Shortly</div>
                    <nav className="nav">
                        <button className="btn ghost">Login</button>
                        <button className="btn primary">Sign Up</button>
                    </nav>
                </div>
            </header>

            <main className="wrap">
                <section className="hero">
                    <div className="hero-left">
                        <h1>More than just shorter links</h1>
                        <p className="lead">
                            Build your brand's recognition and get detailed insights on how your links are performing.
                        </p>

                        <div className="hero-form-card">
                            <UrlForm onAdd={handleAdd} />
                        </div>
                    </div>

                    <div className="hero-right">
                         <img src="/illustration-working.svg" alt="Illustration" />
                    </div>
                </section>

                <section className="features">
                    <h2 className="sr-only">Advanced statistics</h2>
                    <div className="feature-cards">
                        <article className="card">
                            <div className="icon">🏷️</div>
                            <h3>Brand Recognition</h3>
                            <p>Boost your brand recognition with each click — customizable links to match your identity.</p>
                        </article>

                        <article className="card">
                            <div className="icon">📊</div>
                            <h3>Detailed Records</h3>
                            <p>Gain insights into link performance with detailed analytics and tracking.</p>
                        </article>

                        <article className="card">
                            <div className="icon">⚙️</div>
                            <h3>Fully Customizable</h3>
                            <p>Control your links, customize slugs, and manage redirects with ease.</p>
                        </article>
                    </div>
                </section>

                <section className="results">
                    <UrlList urls={urls} onRemove={handleRemove} />
                </section>
            </main>

            <footer className="site-cta">
                <div className="wrap cta-row">
                    <div>
                        <h3>Boost your links today</h3>
                        <p className="muted">Shorten, share and measure — get started now.</p>
                    </div>
                    <div>
                        <button className="btn cta">Get Started</button>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Home;