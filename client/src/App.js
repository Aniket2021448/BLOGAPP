import './App.css';

function App() {
  return (
      <main>
        <header>
          <a href = "" className ="logo">MyBLOGs</a>

          <nav>
            <a href = "">Login</a>
            <a href = "">Register</a>
          </nav>

        </header>
        {/* A blog post content */}
        <div className="post">
          <div>
            {/* image of the blog, at outer side. */}
            <img src="https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1163766417.jpg?w=430&h=230&crop=1" className ="img-fluid rounded-top" alt="blog images"/>
          </div>
          <div className = "texts">
            <h2>
              {/* title of the blog */}
              Full hosue battery receiver
            </h2>
            <p className = "info">
              {/* details of tha author */}
              <a className = "author">Aniket Panchal</a>
              <time>2021-02-02 16:40 PM</time>
            </p>
            <p className = "summary">
              {/* brief content */}
            The Philippines’ startup ecosystem is poised for strong growth, thanks to the country’s rising GDP, fast adoption of online services and a new generation of founders.
            </p>
          </div>
        </div>


                {/* A blog post content */}
                <div className="post">
          <div>
            {/* image of the blog, at outer side. */}
            <img src="https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1163766417.jpg?w=430&h=230&crop=1" className ="img-fluid rounded-top" alt="blog images"/>
          </div>
          <div className = "texts">
            <h2>
              {/* title of the blog */}
              Full hosue battery receiver
            </h2>
            <p className = "info">
              {/* details of tha author */}
              <a className = "author">Aniket Panchal</a>
              <time>2021-02-02 16:40 PM</time>
            </p>
            <p className = "summary">
              {/* brief content */}
            The Philippines’ startup ecosystem is poised for strong growth, thanks to the country’s rising GDP, fast adoption of online services and a new generation of founders.
            </p>
          </div>
        </div>


                {/* A blog post content */}
        <div className="post">
          <div>
            {/* image of the blog, at outer side. */}
            <img src="https://techcrunch.com/wp-content/uploads/2023/06/GettyImages-1163766417.jpg?w=430&h=230&crop=1" className ="img-fluid rounded-top" alt="blog images"/>
          </div>
          <div className = "texts">
            <h2>
              {/* title of the blog */}
              Full hosue battery receiver
            </h2>
            <p className = "info">
              {/* details of tha author */}
              <a className = "author">Aniket Panchal</a>
              <time>2021-02-02 16:40 PM</time>
            </p>
            <p className = "summary">
              {/* brief content */}
            The Philippines’ startup ecosystem is poised for strong growth, thanks to the country’s rising GDP, fast adoption of online services and a new generation of founders.
            </p>
          </div>
        </div>
      </main>
  );
}

export default App;
