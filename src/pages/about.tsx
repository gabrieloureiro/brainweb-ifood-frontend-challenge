import React, { useEffect } from 'react'
import { useToast } from '@/hooks/useToast'

import Layout from '@/components/Layout'
import { FiGithub, FiLinkedin } from 'react-icons/fi'

import {
  Anchor,
  Image,
  InfoDeveloper,
  LargeText,
  MediumText,
  SmallText
} from '@/styles/screens/about'
import { Row } from '@/components/Row'
import Tag from '@/components/Tag'
import { stackes } from '@/models/aboutMeStackes'
import { CONTAINER_ANIMATION, DEFAULT_TRANSITION } from '@/animations'

const Home: React.FC = () => {
  const { addToast } = useToast()

  useEffect(() => {
    addToast({
      title: 'Esse sou eu!',
      description: 'Espero que gostem do meu trabalho.',
      type: 'info'
    })
  }, [])
  return (
    <Layout
      title="Gabriel Loureiro"
      description="Sobre o desenvolvedor"
      highlightTitle="Sobre o desenvolvedor"
    >
      <InfoDeveloper
        variants={CONTAINER_ANIMATION}
        initial="unMounted"
        animate="mounted"
        exit="unMounted"
        transition={DEFAULT_TRANSITION}
      >
        <Image src="/images/gl-@2x.jpg" alt="avatar-stackes" />
        <LargeText>Gabriel Loureiro</LargeText>
        <MediumText>Frontend Developer</MediumText>
        <SmallText>Brasileiro, solteiro, 22 anos</SmallText>
        <Row wrap justify="center" align="center">
          <Anchor
            aria-label="linkedin"
            target="_blank"
            rel="noopener noreferrer external"
            href="https://www.linkedin.com/in/gabrieloureiro/"
          >
            <FiLinkedin
              color="#0073b1"
              size={24}
              style={{ marginRight: '8px' }}
            />
          </Anchor>
          <Anchor
            aria-label="github"
            target="_blank"
            rel="noopener noreferrer external"
            href="https://github.com/gabrieloureiro"
          >
            <FiGithub color="#a1a1a1" size={24} style={{ marginLeft: '8px' }} />
          </Anchor>
        </Row>
        <MediumText>Possuo conhecimento em</MediumText>
        <Row wrap justify="center" align="center" style={{ maxWidth: '650px' }}>
          {stackes.map((item, index) => {
            return (
              <Tag
                key={`${item.name}_${index}`}
                textColor={item.textColor}
                backgroundColor={item.backgroundColor}
              >
                {item.name}
              </Tag>
            )
          })}
        </Row>
      </InfoDeveloper>
    </Layout>
  )
}

export default Home
