import { Helmet as ReactHelmet } from "react-helmet-async";

type HelmetT = {
  title: string;
  canonical: string;
  schema?: any;
};

const Helmet: React.FC<HelmetT> = (props) => {
  const title = props.title ? props.title : "Agrometi";

  return (
    <ReactHelmet>
      <link
        rel="canonical"
        href={`https://www.agrometi.com${props.canonical}`}
      />
      <title>{title}</title>

      {props.schema && (
        <script type="application/ld+json">
          {JSON.stringify(props.schema)}
        </script>
      )}
    </ReactHelmet>
  );
};

export default Helmet;
