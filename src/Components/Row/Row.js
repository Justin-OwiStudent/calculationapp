import classes from "./Row.module.css";

const Row = (props) => {

 
   
  return (
    <>
      <div className={classes.row}>
        <div className={classes.item1}>
          <h3>Total Amount Saved. </h3>
          <h6>Your Total savings...</h6>
        </div>

        <div className={classes.item2}>
          <h3>Monthly expenses cost.</h3>
          <h6> R:</h6>
        </div>

        <div className={classes.item3}>
          <h3>Payable Tax.</h3>
          <h6></h6>
        </div>

        <div className={classes.item4}>
          <h3>Your Tax Bracket.</h3>
          <div className={classes.brack}>
            <h6>Your Tax Bracket...</h6>
          </div>
        </div>
      </div>
    </>
  );
};

export default Row;
