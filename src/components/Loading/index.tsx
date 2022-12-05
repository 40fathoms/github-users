import style from "./index.module.scss";

const Loading: React.FC = (): JSX.Element => {
  return (
    <main className={style.main}>
      <div className={style.spinner}></div>
    </main>
  );
};

export default Loading;
