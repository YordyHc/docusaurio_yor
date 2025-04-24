import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Explora el Código en Vivo",
    image: require("@site/static/img/programador.jpg").default,
    description: (
      <>
        Descubre cómo el Inspector de DevTools puede transformar la forma en que
        entiendes y construyes sitios web.
      </>
    ),
  },
  {
    title: "Herramientas Profesionales al Alcance",
    image: require("@site/static/img/herramientas.jpg").default,
    description: (
      <>
        Aprende a inspeccionar, editar y depurar código directamente desde el
        navegador con herramientas profesionales.
      </>
    ),
  },
  {
    title: "Domina DevTools sin Complicaciones",
    image: require("@site/static/img/devtools-overview-hero.jpg").default,
    description: (
      <>
        Este manual es tu entrada rápida y clara para dominar las funciones
        clave de DevTools, sin complicaciones.
      </>
    ),
  },
];

function Feature({ image, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <img src={image} className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
