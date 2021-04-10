import { Col, Row, Link, Page, Spacer, GeistUIThemes} from '@geist-ui/react'
import {
  Instagram,
  Github,
  Linkedin,
} from '@geist-ui/react-icons'
import makeStyles from '../makeStyles'

const useStyles = makeStyles((ui: GeistUIThemes) => ({
  footer: {
    width: ui.layout.pageWidthWithMargin,
    maxWidth: '100%',
    margin: '0 auto',
    backgroundColor: ui.palette.background,
    fontSize: 16,
    height: 30,
    zIndex: 15,
    position: 'sticky',
    bottom: 0,
  },
}));

export default function Footer() {
  const classes = useStyles();
  const date = new Date();
  const year = date.getFullYear();
  return (
    <Page.Footer>
      <Row justify="center" className={classes.footer}>
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
      </Row>
    </Page.Footer>
  )
}
