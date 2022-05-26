/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable import/no-unresolved */
import { useEffect, useState } from 'react';
import { HiChevronRight, HiExternalLink } from 'react-icons/hi';
import { CSSTransition } from 'react-transition-group';
import ReactMarkdown from 'react-markdown';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/free-mode';
import 'swiper/css/scrollbar';

import Root from '../../components/Root';
import { H1, H2, H3 } from '../../components/Heading';
import Button from '../../components/Button';
import { Section, Container, Row, Col, Spacing } from '../../components/Layout';
import Footer from '../../components/Footer';
import LoadingScreen from '../../components/LoadingScreen';
import PortfolioBannerSection from '../../components/PortfolioBannerSection';
import ParallaxSection from '../../components/ParallaxSection';
import Subtitle from '../../components/Subtitle';

import {
  fileBaseUrl,
  portfolioType,
  portfolioSingle,
} from '../../constants/defaultValues';
import { preLoadImage, tooSlowFallback } from '../../helpers';

export default function Portfolio() {
  const [imagesReady, setImagesReady] = useState(false);
  const [pageLoading, setPageLoading] = useState(true);


  const startLoadImage = () => {
    tooSlowFallback(setImagesReady, 1000);
    Promise.all(
      [portfolioSingle.parallax, ...portfolioSingle.gallery].map((p) =>
        preLoadImage(fileBaseUrl + p.url)
      )
    )
      .then(() => setImagesReady(true))
      .catch(() => setImagesReady(true));
  };

  useEffect(() => {
    startLoadImage();
  }, []);

  useEffect(() => {
    if (imagesReady) {
      setTimeout(() => {
        setPageLoading(false);
      }, 200);
    }
  }, [imagesReady]);

  return (
    <Root
      title={portfolioSingle.title}
      description={portfolioSingle.shortDescrip}
      banner={`${fileBaseUrl}${portfolioSingle.thumb.url}`}
    >
      <PortfolioBannerSection
        title={portfolioSingle.title}
        type={portfolioType[portfolioSingle.type]}
        shortDescrip={portfolioSingle.shortDescrip}
      />
      <ParallaxSection image={portfolioSingle.parallax.url} />
      <Spacing size={2} />
      <Section>
        <Container>
          <Row>
            <Col fraction={3} size={2} data-aos="fade-up">
              <H2 className="color-primary">Overview</H2>
              <div className="big-text-1">
                <ReactMarkdown linkTarget="_blank">
                  {portfolioSingle.content}
                </ReactMarkdown>
              </div>
            </Col>
            <Col fraction={3}>
              <div data-aos="fade-up" data-aos-delay="150">
                <H3 className="color-primary">Technologies</H3>
                <ul>
                  {portfolioSingle.tools.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
              <div data-aos="fade-up" data-aos-delay="300">
                <Spacing />
                <H3 className="color-primary">Features</H3>
                <ul>
                  {portfolioSingle.roles.list.map((tool, index) => (
                    <li key={`tech-${index}`}>{tool}</li>
                  ))}
                </ul>
              </div>
            </Col>
          </Row>
          <Spacing />
          <Row>
            <Col fraction={1}>
              <Button
                href='#'
                color="primaryOutline"
                externalLink
              >
                <span>View Project</span>
                <HiExternalLink />
              </Button>
            </Col>
          </Row>
          <Spacing />
        </Container>
      </Section>
      <Section data-aos="fade-up" className="pb-0">
        <Container>
          <Row>
            <hr />
          </Row>
          <Spacing size={3} />
          <Row>
            <Col fraction={1}>
              <Subtitle color="secondary">
                Web Developement
              </Subtitle>
              <H1>Caraga Region Crop Production Map</H1>
              <Button
                href='#'
                color="secondaryOutline"
              >
                <span>Next Project</span>
                <HiChevronRight />
              </Button>
            </Col>
          </Row>
          <Spacing size={3} />
          <Row>
            <hr />
          </Row>
        </Container>
      </Section>
      <Footer />
      <CSSTransition
        in={pageLoading}
        timeout={300}
        classNames="opacity-transition"
        unmountOnExit
      >
        <LoadingScreen />
      </CSSTransition>
    </Root>
  );
}
