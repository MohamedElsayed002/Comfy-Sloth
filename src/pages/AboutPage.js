import React from 'react'
import styled from 'styled-components'
import { PageHero } from '../components'
import aboutImg from '../assets/hero-bcg.jpeg'

const AboutPage = () => {
  return <h4>
    <PageHero title="about"/>
    <Wrapper className="page section section-center">
      <img src={aboutImg} alt="nice desk"/>
      <article >
        <div className="title">
          <h2>Our Story</h2>
          <div className="underline"></div>
        </div>
        <p>
          lore ipsum dolor sit amet consectetur adipisicing
          elit. obcaecatie atque ex excepture aut sapienete possimus
          tempoere ratione doloru, id nam rem , qui, mollitia,
          similique quia mairoes unde poroo eum saepa?
        </p>
      </article>
    </Wrapper>
  </h4>
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
