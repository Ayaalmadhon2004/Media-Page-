import React from 'react';
import './blog.css';
import img1 from '../images/blog-post-01.jpg';
import img2 from '../images/blog-post-02.jpg';
import img3 from '../images/blog-post-03.jpg';
import img4 from '../images/blog-post-04.jpg';
import author from '../images/author-post.jpg';

const Blog = () => {
  const blogPosts = [
    {
      img: img4,
      btn: 'SEO Analysis',
      date: '24 September 2024',
      mainText: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: img2,
      btn: 'SEO Analysis',
      date: '04 September 2024',
      mainText: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
      img: img3,
      btn: 'SEO Analysis',
      date: '05 September 2024',
      mainText: 'Lorem Ipsum Dolor Sit Amei Eiusmod Tempor',
      lorem: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
  ];

  return (
    <>
      <div className="containerB1 containerB">
        <div className="main-title">
          <h6>Recent News</h6>
          <h1>
            Check Our Blog <span>Posts</span>
          </h1>
        </div>
        <div className="subBCont">
          <div className="subB-right">
            <div className='img1'>
              <img src={img1} alt="blog-photo" />
            </div>
            <div className="textb">
              <div className='btn-span'>
                <button className="btn2">SEO Analysis</button>
                <span>03 August 2024</span>
              </div>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor Incididunt</p>
              <p>Lorem Ipsum Dolor Sit Amet, Consectetur Adelore Eiusmod Tempor Incididunt</p>
              <div className="author">
                <img src={author} alt="author" />
                <span>By: Andrea</span>
                <button className="btn">Discover More</button>
              </div>
            </div>
          </div>
          <div className="subB-left">
            {blogPosts.map((item, index) => (
              <div key={index} className="itemB">
                <div className="itemB-left">
                  <img src={item.img} alt="blog-post" />
                </div>
                <div className="itemB-right">
                  <button className="btn2">{item.btn}</button>
                  <span>{item.date}</span>
                  <p>{item.mainText}</p>
                  <p>{item.lorem}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
