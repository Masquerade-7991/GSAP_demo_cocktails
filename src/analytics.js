import ClarityAnalytics from "clarity-analytics-sdk";

let analytics = null;

export const getAnalytics = () => {
  if (!analytics) {
    analytics = new ClarityAnalytics({
      projectId: "proj_0f944761-16fd-4dc2-a814-626e96611cdf",
    });
  }
  return analytics;
};
