import Tweet from "./Tweet";

function TweetList () {
  return (
    <main className="container">
     <section className="tweets">
<Tweet />
<Tweet />
     
     {/* <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={avatar}></img>
          <h2 className="tweet--name">{lastName}</h2>
          <small className="tweet--handle">{handle}</small>
        </header>
        <div className="tweet--body">
          <p>{body}</p>
        </div>
        <footer className="tweet--footer">
          <small className="footer--age">{age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article>
      
      <article className="tweet">
        <header className="tweet--header">
          <img className="tweet--avatar" src={avatar}></img>
          <h2 className="tweet--name">{lastName}</h2>
          <small className="tweet--handle">{handle}</small>
        </header>
        <div className="tweet--body">
          <p>{body}</p>
        </div>
        <footer className="tweet--footer">
          <small className="footer--age">{age}<small>
              <span className="footer--actions">
                <a href="#"><i className="fa fa-flag"></i></a>
                <a href="#"><i className="fa fa-retweet"></i></a>
                <a href="#"><i className="fa fa-heart"></i></a>'
              </span>
            </small></small></footer>
      </article> */}

     </section>
    </main>
  );
}

export default TweetList;