// Utility to detect if we're in Upwork-safe mode
// This can be activated via:
// 1. Environment variable REACT_APP_UPWORK_MODE=true
// 2. Query parameter ?upwork=true
// 3. Hostname contains 'upwork' (for testing)

export const isUpworkMode = () => {
  // Check environment variable
  if (process.env.REACT_APP_UPWORK_MODE === 'true') {
    return true;
  }

  // Check query parameter
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.get('upwork') === 'true') {
    return true;
  }

  // Check if hostname contains upwork (for testing)
  if (window.location.hostname.includes('upwork')) {
    return true;
  }

  return false;
};

