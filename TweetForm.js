function TweetForm() {
  let tweetQuestion = "What are you humming about?";

  const handleSubmit = (event) => {
    event.preventDefault();
  }
  return (
    <main className="container">
      <section className="newtweet">
        <form onSubmit={handleSubmit} action="/tweets" className="newtweet__form">
          <textarea
            className="form__textarea"
            name="text"
            placeholder={tweetQuestion}>
          </textarea>
          <input onClick={(event) => event.preventDefault()} type="submit" value="Tweet" className="form__input"></input>
          <span className="form__counter">140</span>
        </form>
      </section>
    </main>
  );
}

export default TweetForm;
