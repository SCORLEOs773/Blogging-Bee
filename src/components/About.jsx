import React from 'react';
import Logo from '../images/bb.png';
import { Link } from 'react-router-dom';


export default function About() {
    return (
        <div className=" mt-4">
            <h2 className="text-center mb-4">About</h2>

            <div className="row">
                <div className="col-md-6">
                    <img
                        src={Logo}
                        alt="The Blogging Bee"
                        className="img-fluid rounded-circle mb-4"
                        style={{ Width: '700px', height: '450px' }}
                    />
                </div>
                <div className=" col-md-6">
                    <h4>Welcome to THE BLOGGING BEE!</h4>
                    <p>
                        We're buzzing with excitement to have you here. THE BLOGGING BEE is your go-to destination for all things
                        buzzing in the world of blogging. Our mission is to create a hive of creativity, inspiration, and
                        information for bloggers and readers alike.
                    </p>
                    <p>
                        At THE BLOGGING BEE, we believe that every blogger deserves a platform to showcase their talent and connect
                        with a community of like-minded individuals. Whether you're a seasoned blogger or just starting your journey,
                        we've got you covered.
                    </p>
                    <p>
                        Our team of dedicated worker bees is constantly curating the latest and greatest content to keep you
                        entertained, informed, and inspired. From insightful articles and how-to guides to captivating stories and
                        captivating photographs, there's something for everyone in our buzzing hive.
                    </p>
                    <p>
                        Join us on this honey-filled adventure and let your creativity soar. Don't be afraid to bee yourself, express
                        your thoughts, and create a buzz around your ideas. Together, we can make the blogging world a sweeter place!
                    </p>
                    <p>Remember, at THE BLOGGING BEE, we always say, "Bee-lieve in yourself and let your words fly!"</p>
                </div>
            </div>
        </div>
    );
}
