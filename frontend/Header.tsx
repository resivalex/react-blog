import React, { Component } from 'react'
import styled from 'styled-components'
import { Container } from './Thema'
import Modal from 'react-responsive-modal'

const translations = {
  en: {
    resume_owner_name: 'Ivan Reshetnikov'
  },
  ru: {
    resume_owner_name: 'Иван Решетников'
  }
}

const HeaderBlock = styled.div`
  background-color: black;
  margin: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const PhotoPreview = styled.div`
  width: 64px;
  min-width: 64px;
  height: 64px;
  cursor: zoom-in;
  border-radius: 50%;
  display: inline-block;
  background-size: contain;
  background-image: url(/face.jpg);
`

const Spacer = styled.div`
  display: inline-block;
  width: 20px;
`

const Title = styled.div`
  color: white;
  font-size: 40px;
  font-weight: bold;
  display: inline-block;
`

const Photo = styled.img`
  width: 100%;
`

interface Props {
  locale: string
}

interface State {
  isOpen: boolean
}

export default class Header extends Component<Props, State> {
  state = { isOpen: false }

  render() {
    const { locale } = this.props

    return (
      <HeaderBlock>
        <Container>
          <Wrapper>
            <Modal open={this.state.isOpen} onClose={() => this.setState({ isOpen: false })}>
              <Photo src="/photo.jpg" />
            </Modal>
            <PhotoPreview onClick={() => this.setState({ isOpen: true })} />
            <Spacer />
            <Title>
              {locale === 'en'
                ? translations.en.resume_owner_name
                : translations.ru.resume_owner_name}
            </Title>
          </Wrapper>
        </Container>
      </HeaderBlock>
    )
  }
}
