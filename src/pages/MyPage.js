import { useState } from "react";
import { useParams } from "react-router-dom";
import styles from "./MyPage.module.css";
import heartBeforeImg from "../assets/heartBefore.png";
import heartAfterImg from "../assets/heartAfter.png";

function MyPage() {
  const [user, setUser] = useState(null);
  //useParams 사용해 현재 라우트에서 동적으로 받은 값을 userId에
  const params = useParams();
  const userId = params.userId;

  //하트 이미지
  const [imageSrc, setImageSrc] = useState(heartBeforeImg);
  const [isClicked, setIsClicked] = useState(false);

  //하트 click 함수
  const handleClick = () => {
    if (isClicked) {
      setImageSrc(heartBeforeImg);
      setIsClicked(false); //초기 상태로
    } else {
      setImageSrc(heartAfterImg);
      setIsClicked(true);
    }
  };
  return (
    <>
      <div className={styles.MyPage}>
        <div className={styles.profile}>
          <img alt="profileImg" src={require(`../assets/profileImg.avif`)} />
          <div className={styles.profileInfo}>
            <section className={styles.section1}>
              <h2>닉네임</h2>
              <p className={styles.major}>(전공자)</p>
              <img alt="heart" src={imageSrc} onClick={handleClick} />
            </section>
            <section className={styles.section2}>
              <p className={styles.info}>
                안녕하세요 저는~어쩌구저쩌구 저는서린이구요 좀이따밥먹을것입니다
                제대로나오는지확인중
              </p>
            </section>
            <section className={styles.section3}>
              <h2>내 직무</h2>
              <p>웹 프론트엔드</p>
            </section>
            <section className={styles.section4}>
              <h2>내 기술스택</h2>
              <img alt="reactImg" src={require(`../assets/react.png`)} />
            </section>
          </div>
        </div>
        <div className={styles.userProject}>
          <div className={styles.presentProject}>
            <h3>구인중인 프로젝트</h3>
            <img
              alt="projectImg"
              src={require(`../assets/projectImg_couple.avif`)}
            ></img>
            <p>커플 앱 프로젝트</p>
          </div>
          <div className={styles.pastProject}>
            <h3>구인했던 프로젝트</h3>
            <img
              alt="projectImg"
              src={require(`../assets/projectImg_exercise.png`)}
            ></img>
            <p>운동 웹사이트 프로젝트</p>
          </div>
        </div>
      </div>
      ;
    </>
  );
}

export default MyPage;
