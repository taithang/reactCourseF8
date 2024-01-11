import PropTypes from "prop-types";
import classNames from "classnames/bind";
import styles from "./SuggestedAccounts.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import Tippy from "@tippyjs/react/headless";
import { Wrapper as PopperWrapper } from "../Popper";
import AccountPreview from "./AccountPreview/AccountPreview";

const cx = classNames.bind(styles);

function renderPreview(props) {
  return (
    <div tabIndex="-1" {...props}>
      <PopperWrapper>
        <AccountPreview />
      </PopperWrapper>
    </div>
  );
}

function AccountItem() {
  return (
    <div>
      <Tippy
        interactive
        delay={[800, 0]}
        offset={[-20, 0]}
        placement="bottom"
        render={renderPreview}
      >
        <div className={cx("account-item")}>
          <img
            className={cx("avatar")}
            src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/364027f98ad563fb12a30876db507841.jpeg?lk3s=a5d48078&x-expires=1705078800&x-signature=pTPDpLkGeFV%2B1igf9bK7nM12fz0%3D"
            alt="avatar"
          />
          <div className={cx("item-info")}>
            <p className={cx("nickname")}>
              <strong>quocnguyenphu</strong>
              <FontAwesomeIcon className={cx("check")} icon={faCheckCircle} />
            </p>
            <p className={cx("name")}>Quốc Nguyễn Phú</p>
          </div>
        </div>
      </Tippy>
    </div>
  );
}

AccountItem.propTypes = {};

export default AccountItem;
