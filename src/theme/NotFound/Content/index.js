import React from 'react';

function SearchTrigger() {
  const handleClick = () => {
    const searchButton = document.querySelector('.DocSearch-Button');
    if (searchButton) {
      searchButton.click();
    }
  };

  return (
    <button
      onClick={handleClick}
      type="button"
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '12px 16px',
        fontSize: '1rem',
        color: 'var(--ifm-color-emphasis-600)',
        backgroundColor: 'var(--ifm-background-surface-color)',
        border: '1px solid var(--ifm-color-emphasis-300)',
        borderRadius: 8,
        cursor: 'pointer',
        gap: 8,
      }}>
      <svg width="20" height="20" viewBox="0 0 20 20" style={{flexShrink: 0}}>
        <path
          d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
          stroke="currentColor"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Search documentation...
    </button>
  );
}

export default function NotFoundContent({className}) {
  return (
    <main className={`container margin-vert--xl ${className || ''}`}>
      <div className="row">
        <div className="col col--8 col--offset-2" style={{textAlign: 'center'}}>
          <h1 className="hero__title">Page Not Found</h1>
          <p style={{fontSize: '1.2rem', color: 'var(--ifm-color-emphasis-700)'}}>
            We could not find what you were looking for.
          </p>
          <p style={{marginBottom: '2rem', color: 'var(--ifm-color-emphasis-600)'}}>
            Try searching for the page you are looking for:
          </p>
          <div style={{maxWidth: 480, margin: '0 auto'}}>
            <SearchTrigger />
          </div>
        </div>
      </div>
    </main>
  );
}
