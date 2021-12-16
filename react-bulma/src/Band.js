import React, { Component } from "react";
import "./Band.css";

const comment = {
    message: "I love coding. All day everyday....",
    author: "@theordore",
};

const commentList = [
    {
        message: "I love bball....",
        author: "@stephcurry",
    },
    {
        message: "What are those???? ....",
        author: "@mike",
    },
    {
        message: "What up ...",
        author: "@john",
    },
    {
        message: "Comment here ...",
        author: "@jake",
    },
    {
        message: "Lets go ...",
        author: "@tombrady",
    },
];

const displayCommentList = commentList.map((c, idx) => {
    return (
        <article className="post" key={idx}>
            <h4>{c.message}</h4>
            <div className="media">
                <div className="media-left">
                    <p className="image is-32x32">
                        <img src="http://bulma.io/images/placeholders/128x128.png" alt="" />
                    </p>
                </div>
                <div className="media-content">
                    <div className="content">
                        <p>
                            <a href="#">{c.author}</a> replied 34 minutes ago &nbsp;
                            <span className="tag">Question</span>
                        </p>
                    </div>
                </div>
                <div className="media-right">
                    <span className="has-text-grey-light">
                        <i className="fa fa-comments"></i> 1
                    </span>
                </div>
            </div>
        </article>
    );
});

class Forum extends Component {
    render() {
        return (
                <nav class="navbar is-dark">
                    <div class="navbar-brand">
                        <a class="navbar-item" href="https://bulma.io">
                            <img src="https://bulma.io/images/bulma-logo.png" alt="Bulma: a modern CSS framework based on Flexbox" width="112" height="28">
                        </a>
                        <div class="navbar-burger burger" data-target="navbarExampleTransparentExample">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>

                    <div id="navbarExampleTransparentExample" class="navbar-menu">
                        <div class="navbar-start">
                            <a class="navbar-item" href="https://bulma.io/">
                                Home
                            </a>
                            <a class="navbar-item" href="https://bulma.io/">
                                Band
                            </a>
                            <a class="navbar-item" href="https://bulma.io/">
                                Tour
                            </a>
                            <a class="navbar-item" href="https://bulma.io/">
                                Contact
                            </a>
                            <div class="navbar-item has-dropdown is-hoverable">
                                <a class="navbar-link" href="/documentation/overview/start/">
                                    More
                                </a>
                                <div class="navbar-dropdown is-boxed">
                                    <a class="navbar-item" href="/documentation/overview/start/">
                                        Mechandise
                                    </a>
                                    <a class="navbar-item" href="https://bulma.io/documentation/modifiers/syntax/">
                                        Extras
                                    </a>
                                    <a class="navbar-item" href="https://bulma.io/documentation/columns/basics/">
                                        Media
                                    </a>
                                </div>
                            </div>
                        </div>

                        <div class="navbar-end">
                            <div class="navbar-item">
                                <div class="field">
                                    <div class="control">
                                        <input class="input" type="text" placeholder="Search . . .">
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </nav>
          
        
                <section class="hero">
                    <figure class="image">
                        <img src="https://images.pexels.com/photos/167636/pexels-photo-167636.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940">
                    </figure>
                </section>

                <section class="section">
                    <div class="container has-text-centered">
                        <h2 class="title">The Band</h2>
                        <p>We have created a fictional band website. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est
                            laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>

                        <div class="columns is-centered" style="padding: 2rem">
                            <div class="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="title is-4">John Smith</p>
                                                <p class="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="title is-4">John Smith</p>
                                                <p class="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="column">
                                <div class="card">
                                    <div class="card-image">
                                        <figure class="image is-2by1">
                                            <img src="https://images.pexels.com/photos/167635/pexels-photo-167635.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="Placeholder image">
                                        </figure>
                                    </div>
                                    <div class="card-content">
                                        <div class="media">
                                            <div class="media-content">
                                                <p class="title is-4">John Smith</p>
                                                <p class="subtitle is-6">@johnsmith</p>
                                            </div>
                                        </div>

                                        <div class="content">
                                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec iaculis mauris.
                                            <a>@bulmaio</a>.
                                            <a href="#">#css</a>
                                            <a href="#">#responsive</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
            </div>
    </section >

    <section class="section">
        <div class="container has-text-centered">
            <h2 class="title">Tour Dates</h2>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
            </div>

            <div class="tile is-ancestor">
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
                <div class="tile is-parent">
                    <article class="tile is-child box">
                        <figure class="image">
                            <img src="https://images.pexels.com/photos/374710/pexels-photo-374710.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260">
                        </figure>
                        <p class="title">New York</p>
                        <p class="subtitle">Fri 27 Nov 2016</p>
                        <a class="button">Buy Tickets</a>
                    </article>
                </div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container has-text-centered">
            <h2 class="title">Contact</h2>

            <form>
                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="Name">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-user"></i>
                                </span>
                            </p>
                        </div>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
                                <input class="input" type="email" placeholder="Email">
                                <span class="icon is-small is-left">
                                    <i class="fas fa-envelope"></i>
                                </span>
                            </p>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <textarea class="textarea" placeholder="Message us"></textarea>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="field is-horizontal">
                    <div class="field-body">
                        <div class="field">
                            <div class="control">
                                <button class="button is-primary">
                                    Send message
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </section>

    <footer class="footer">
        <div class="container">
            <div class="content has-text-centered">
                <p>
                    <a href="">
                        <i class="fab fa-facebook-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-twitter-square fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-instagram fa-2x"></i>
                    </a>
                    <a href="">
                        <i class="fab fa-snapchat fa-2x"></i>
                    </a>
                </p>
                <p>
                    <a href="https://bulma.io">
                        <img src="https://bulma.io/images/made-with-bulma.png" alt="Made with Bulma" width="128" height="24">
                    </a>
                </p>
            </div>
        </div>
    </footer>

        ); 
    }
}

export default Forum;