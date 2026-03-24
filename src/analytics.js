import ClarityAnalytics from "clarity-analytics-sdk";

let analytics = null;

export const getAnalytics = () => {
  if (!analytics) {
    analytics = new ClarityAnalytics({
      projectId: "proj_321fc16b-a94a-440b-917e-f4b91de1db1c",
    });
  }
  return analytics;
};
