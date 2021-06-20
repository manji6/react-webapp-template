import "../styles.css";

import Typography from "@material-ui/core/Typography";

const Sample1 = (props) => {
  console.log("hoge");
  return (
    <>
      <div className="App">
        <Typography component="h1" align="center" color="textPrimary">
          Sample1 page is here.
        </Typography>
      </div>
    </>
  );
};

const Sample2 = function () {
  return (
    <div className="App">
      <Typography component="h1" align="center" color="textPrimary">
        Hello Page2
      </Typography>
    </div>
  );
};

export { Sample1, Sample2 };
