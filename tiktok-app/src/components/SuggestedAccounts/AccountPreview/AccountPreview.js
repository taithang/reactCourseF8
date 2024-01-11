import classNames from "classnames/bind";
import styles from "./AccountPreview.module.scss";
import Button from "~/components/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const cx = classNames.bind(styles);

function AccountPreview() {
  return (
    <div className={cx("wrapper")}>
      <div className={cx("header")}>
        <img
          className={cx("avatar")}
          src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/364027f98ad563fb12a30876db507841.jpeg?lk3s=a5d48078&x-expires=1705078800&x-signature=pTPDpLkGeFV%2B1igf9bK7nM12fz0%3D"
          alt=""
        />
        <div>
          <Button className={cx("follow-btn")} primary>
            Follow
          </Button>
        </div>
      </div>
      <div className={cx("body")}>
        <p className={cx("nickname")}>
          <strong>quocnguyenphu</strong>
          <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
        </p>
        <p className={cx("name")}>Quốc Nguyễn Phú</p>
        <p className={cx("analytics")}>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Followers</span>
          <strong className={cx("value")}>8.2M </strong>
          <span className={cx("label")}>Likes</span>
        </p>
      </div>
    </div>
  );
}

export default AccountPreview;
