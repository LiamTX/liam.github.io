// Utility to detect if we're in Upwork-safe mode
// This can be activated via:
// 1. Environment variable REACT_APP_UPWORK_MODE=true (PRIMARY METHOD - for production)
// 2. Query parameter ?upwork=true (for testing)
// 3. Hostname contains 'upwork' (for testing)

export const isUpworkMode = () => {
  // Check environment variable FIRST (this is the production method)
  // This gets baked into the build, so the bot will see the correct version
  if (process.env.REACT_APP_UPWORK_MODE === 'true') {
    return true;
  }

  // Only check URL parameters if we have access to window (client-side)
  if (typeof window !== 'undefined') {
    // Check query parameter (for testing)
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('upwork') === 'true') {
      return true;
    }

    // Check if hostname contains upwork (for testing)
    if (window.location.hostname.includes('upwork')) {
      return true;
    }
  }

  return false;
};

