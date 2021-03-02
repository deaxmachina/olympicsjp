import React from "react"; 
import "./FrontPage.css";

const FrontPage = () => {
  return (
    <div className="container-front-page" id="home">
      <div className="title-decoration-front-page">
        <div className="olympic-circle"></div>
        <div className="olympic-circle"></div>
        <h1 className="title-front-page">オリンピック＆パラリンピックの事実とレガシー</h1>
        <div className="olympic-circle"></div>
        <div className="olympic-circle"></div>
      </div>

      <div className="content-front-page">
        <div className="explanation-front-page">
        「オリンピック博物館を巡る修学旅行」をテーマにした東京大学と筑波大学の共同プロジェクトの資料です。 問いとそれに伴う可視化は、学生が博物館を訪れる前にグループで話し合うための手がかりの目的を果たします。 日本の中学生を対象に、オリンピックとパラリンピックの歴史と目標に関する重要なトピックを取り上げることを目指しています。 こちらは下書きです　＝）
        </div>
        <div className="contents-list-front-page">
          <h2 className="contents-label-front-page">内容</h2>
          <a href="#first-time"><p>世界の国々が最初にオリンピックに参加したのはいつ?</p></a>
          <a href="#paralympics"><p>パラリンピックの歴史や年表は?</p></a>
          <a href="#environment"><p>オリンピックが環境にどんな影響を与えるだろう?</p></a>   
          <a href="#gender"><p>オリンピック選手の男女の割合は?</p></a>       
        </div>
      </div>


    </div>
  )
};

export default FrontPage;