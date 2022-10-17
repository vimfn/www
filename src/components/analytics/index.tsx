import siteMetadata from "data/siteMetadata";
import GA from "./GoogleAnalytics";

const isProduction = process.env.NODE_ENV === "production";

const Analytics = () => {
  return (
    <>{isProduction && siteMetadata.analytics.googleAnalyticsId && <GA />}</>
  );
};

export default Analytics;
