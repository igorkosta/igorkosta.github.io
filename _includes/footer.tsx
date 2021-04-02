import { Col, Container, Link, Page, Spacer } from '@geist-ui/react'
import {
  Instagram,
  Github,
  Linkedin,
} from '@geist-ui/react-icons'

export default function Footer() {
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Page.Footer>
      <Container>
        <Col>
          <Link href={'https://www.linkedin.com/in/igorkostyuchenok/'}>
            <Linkedin />
          </Link><Spacer x={1} inline />
          <Link href={'https://www.instagram.com/aplusplayer/'}>
            <Instagram />
          </Link><Spacer x={1} inline />
          <Link href={'https://github.com/igorkosta'}>
            <Github />
          </Link>
        </Col>
        <Spacer x={1}/>
        <Col>
          {year} ©costinha
        </Col>
      </Container>
    </Page.Footer>
  )
}
