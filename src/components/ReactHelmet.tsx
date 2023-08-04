import { Helmet } from "react-helmet";

export default function ReactHelmet() {
  return (
    <Helmet>
      <link rel="icon" href="/react.svg" />
      <link rel="preconnect" href="https://fonts.googleapis.com"></link>
      <link
        rel="preconnect"
        href="https://fonts.gstatic.com"
        crossOrigin="anonymous"
      ></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Instrument+Sans:wght@400;600;700&display=swap"
        rel="stylesheet"
      ></link>
    </Helmet>
  );
}
