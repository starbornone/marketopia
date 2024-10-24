import styles from "./payoff-matrix.module.scss";

type Payoff = {
  topLeft: string;
  bottomRight: string;
};

type PayoffMatrixData = {
  labels: {
    playerA: string;
    playerB: string;
    strategyA: string;
    strategyB: string;
  };
  data: Payoff[][];
};

type PayoffMatrixProps = {
  matrix: PayoffMatrixData;
};

export const PayoffMatrix: React.FC<PayoffMatrixProps> = ({ matrix }) => {
  const { labels, data } = matrix;

  return (
    <table className={styles["matrix"]}>
      <thead>
        <tr>
          <th colSpan={2} rowSpan={2}></th>
          <th colSpan={2}>{labels.playerB}</th>
        </tr>
        <tr>
          <th>{labels.strategyA}</th>
          <th>{labels.strategyB}</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th rowSpan={2}>{labels.playerA}</th>
          <th>{labels.strategyA}</th>
          <td className={styles["split"]}>
            <div className={styles["topLeft"]}>{data[0][0].topLeft}</div>
            <div className={styles["bottomRight"]}>
              {data[0][0].bottomRight}
            </div>
          </td>
          <td className={styles["split"]}>
            <div className={styles["topLeft"]}>{data[0][1].topLeft}</div>
            <div className={styles["bottomRight"]}>
              {data[0][1].bottomRight}
            </div>
          </td>
        </tr>
        <tr>
          <th>{labels.strategyB}</th>
          <td className={styles["split"]}>
            <div className={styles["topLeft"]}>{data[1][0].topLeft}</div>
            <div className={styles["bottomRight"]}>
              {data[1][0].bottomRight}
            </div>
          </td>
          <td className={styles["split"]}>
            <div className={styles["topLeft"]}>{data[1][1].topLeft}</div>
            <div className={styles["bottomRight"]}>
              {data[1][1].bottomRight}
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};
