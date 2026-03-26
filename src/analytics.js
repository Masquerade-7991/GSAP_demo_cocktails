import Clarity from "clarity-sdk";

const clarity = new Clarity({
  projectId: "proj_0f944761-16fd-4dc2-a814-626e96611cdf",
});

export const track = async (eventName, properties) => {
  try {
    await clarity.ready();
    await clarity.track(eventName, properties);
  } catch (error) {
    console.error("Clarity tracking failed:", error);
  }
};

//importing clarity sdk and initializing it with the project id. This will be used to track user interactions on the website and send the data to clarity analytics dashboard for analysis.