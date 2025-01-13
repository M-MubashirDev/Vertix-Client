const FullPageSpinner = () => {
  return (
    <div className="fixed inset-0 bg-white bg-opacity-75 flex items-center justify-center z-50">
      <div className="animate-spin-slow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="96"
          height="96"
          fill="#263E4D"
          viewBox="0 0 24 24"
        >
          {/* Paste your custom SVG path data here */}
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z" />
        </svg>
      </div>
    </div>
  );
};

export default FullPageSpinner;