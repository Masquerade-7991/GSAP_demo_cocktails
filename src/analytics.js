import ClarityAnalytics from "clarity-analytics-sdk";

let analytics = null;

//importing clarity analytics sdk and initializing it with the project id. This will be used to track user interactions on the website and send the data to clarity analytics dashboard for analysis.
export const getAnalytics = () => {
  if (!analytics) {
    analytics = new ClarityAnalytics({
      projectId: "proj_0f944761-16fd-4dc2-a814-626e96611cdf",
    });
  }
  return analytics;
};
