import headerStyles from "../styles/header.module.css";

const header = () => {
  return (
    <div>
      <h1 className={headerStyles.title}>
        Awesome<span className={headerStyles.span}>ness</span>
      </h1>

      <p className={headerStyles.para}>
        Keep up to date with everything that is awesome
      </p>
    </div>
  );
};

export default header;
