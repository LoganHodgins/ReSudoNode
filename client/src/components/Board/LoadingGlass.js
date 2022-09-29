import classes from './LoadingGlass.module.css';

const LoadingGlass = () => {
  return <div className={classes['loading-glass']}>
    <div className={classes.loader}></div>
  </div>
};

export default LoadingGlass;