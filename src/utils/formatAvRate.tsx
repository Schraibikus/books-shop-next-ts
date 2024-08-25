export default function formatAvRate(rateNum: number): JSX.Element[] | "" {
  if (!rateNum) {
    return "";
  }

  const copyNum = rateNum;
  const intPartNum = Math.trunc(copyNum);
  const decPartNum = Number((copyNum - intPartNum).toFixed(2));
  const percent = decPartNum * 100;

  const resArr: JSX.Element[] = Array.from({ length: intPartNum }, (_, i) => {
    const isLastStar = i === intPartNum - 1;

    return (
      <svg
        key={i}
        width="12"
        height="11"
        viewBox="0 0 12 11"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M6 0L7.80568 3.5147L11.7063 4.1459L8.92165 6.9493L9.52671 10.8541L6 9.072L2.47329 10.8541L3.07835 6.9493L0.293661 4.1459L4.19432 3.5147L6 0Z"
          fill={isLastStar ? "#C0C0C0" : "#F2C94C"}
        />
      </svg>
    );
  });

  return resArr;
}
