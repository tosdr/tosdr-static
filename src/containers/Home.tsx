import React from 'react'
import { withSiteData, withRouteData } from 'react-static'
import Helmet from 'react-helmet';

import logoImg from '../logo.png'
import { Reviews } from '../types';
import { ServiceList } from '../components/ServiceList';
import { DownloadButton } from '../components/DownloadButton';

interface Feed {
  feedUrl: string;
  title: string;
  description: string;
  link: string;
  items: Array<{
    title: string;
    link: string;
    pubDate: string;
    creator: string;
    content: string;
    contentSnippet: string;
    guid: string;
    categories: string[];
    isoDate: string;
  }>;
}
interface Props {
  reviews: Reviews;
  blog: Feed;
}

export default withSiteData(withRouteData(({ reviews, blog }: Props) => (
  <div>
    <section className="hero is-light">
      <div className="hero-body">
        <div className="container">
          <div className="level">
            <div className="level-item has-text-centered">
              <Helmet>
                <title>
                  Terms of Service; Didn't Read
                </title>
              </Helmet>
              <img src={logoImg} alt="" style={{ maxWidth: '500px' }} />
            </div>
            <div className="level-item has-text-centered">
              <DownloadButton className="is-primary is-large"/>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section">
      <div className="container">
        <p className="is-size-2 has-text-centered">
          <q className="has-text-weight-bold">I have read and agree to the Terms</q> is the biggest lie on the web. We aim to fix that.
        </p>
      </div>
    </section>
    <section className="section">
      <div className="container">{renderBlog(blog)}</div>
    </section>
    <section className="section">
      <div className="container">
        <h2 className="title">Rated services</h2>
        <ServiceList services={reviews}/>
      </div>
    </section>
  </div>
)))

function renderBlog(blog: Feed): React.ReactNode {
  const posts = blog.items.slice(0, 3).map((post) => (
    <li key={post.guid} className="media">
      <div className="media-content">
        <p className="title is-size-5">
          <a
            href={post.link}
            title={`View ${post.title}`}
            // className="title is-size-4"
          >{post.title}</a>
        </p>
        <p className="content" dangerouslySetInnerHTML={{ __html: post.contentSnippet }}/>
      </div>
    </li>
  ));

  return (
    <div>
      <h2 className="title">Blog</h2>
      <ul className="is-marginless">{posts}</ul>
      <p><a href="https://blog.tosdr.org/" title="View the full blog">More</a></p>
    </div>
  );
}
