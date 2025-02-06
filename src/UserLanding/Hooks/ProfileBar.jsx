import { useRef, useLayoutEffect } from "react";
import gsap from "gsap";
import { useNavigate } from "react-router-dom";
import { clearAuthData } from "../../Hooks/useSecurity";

function AnimatedProfileBar({ user }) {
  const navigate = useNavigate();

  const profileBarRef = useRef(null);
  const profileImageRef = useRef(null);
  const detailsRef = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Animation for the whole bar
      gsap.from(profileBarRef.current, {
        opacity: 0,
        x: -50,
        duration: 1.2,
        ease: "power3.out",
      });

      // Bounce-in animation for the profile image
      gsap.from(profileImageRef.current, {
        scale: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Fade-in and staggered animation for details
      gsap.from(detailsRef.current.children, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.2,
        ease: "power3.out",
        delay: 0.5,
      });
    });

    return () => ctx.revert();
  }, []);

  const { firstname, lastname, email, image } = user;

  const handleLogout = () => {
    // Perform logout actions here (e.g., clearing user data, redirecting)
    clearAuthData();
    navigate("/");
  };

  return (
    <div
      ref={profileBarRef}
      className="relative flex flex-col sm:flex-row  items-center gap-6 p-6 rounded-xl shadow-xl bg-gradient-to-r from-primary-dark to-primary-light text-white"
      style={{
        backgroundColor: "#263E4D",
      }}
    >
      {/* Logout Button */}
      <button
        onClick={handleLogout}
        className="absolute top-4 right-4 opacity-0 sm:pointer-events-auto pointer-events-none sm:opacity-100 px-4 py-2 text-sm font-semibold rounded-full shadow-md bg-white text-primary-dark hover:bg-neutral-light hover:text-primary transition-all"
      >
        Logout
      </button>

      {/* User Image */}
      <div className="flex flex-col gap-2">
        <div
          ref={profileImageRef}
          className="w-20 h-20 rounded-full overflow-hidden shadow-lg bg-primary-dark border-4 border-white"
        >
          {image ? (
            <img
              src={image}
              alt={`${firstname} ${lastname}`}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="flex items-center justify-center w-full h-full text-2xl font-bold text-neutral-light bg-primary-dark">
              {firstname?.[0]}
              {lastname?.[0]}
            </div>
          )}
        </div>
        <button
          onClick={handleLogout}
          className="px-4 py-2 text-sm opacity-100 sm:pointer-events-none sm:opacity-0 font-semibold rounded-full shadow-md bg-white text-primary-dark hover:bg-neutral-light hover:text-primary transition-all"
        >
          Logout
        </button>
      </div>
      {/* User Details */}
      <div ref={detailsRef} className="space-y-2 text-center sm:text-start">
        <h2 className="text-2xl font-bold tracking-wide">
          {firstname} {lastname}
        </h2>
        <p className="text-sm text-neutral-light">{email}</p>
        <button
          onClick={() => navigate("/location")}
          className="px-4 py-2 mt-2 text-sm font-semibold rounded-full shadow-md bg-white text-primary-dark hover:bg-neutral-light hover:text-primary"
        >
          Car Register
        </button>
      </div>
    </div>
  );
}

export default AnimatedProfileBar;
