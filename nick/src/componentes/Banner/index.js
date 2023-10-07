import styles from "./Banner.module.css";

function Banner({image}) {
    return(
        <div
            className={styles.banner}
            style={{backgroundImage: "url('https://2017-2021.state.gov/wp-content/uploads/2018/11/Sweden-2109x1406.jpg')"}}
        ></div>
    );
}
export default Banner;

