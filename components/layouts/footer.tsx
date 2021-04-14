import { Col, Row, Link, Page, Spacer, GeistUIThemes} from '@geist-ui/react'
import {
  Instagram,
  Github,
  Linkedin,
  Mail,
} from '@geist-ui/react-icons'
import makeStyles from '../../makeStyles'

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
  return (
    <Page.Footer>
      <Row justify="center" className={classes.footer}>
        <Col>
          <Link
            href={'https://www.linkedin.com/in/igorkostyuchenok/'}
            target="_blank"
          >
            <Linkedin />
          </Link><Spacer x={1} inline />
          <Link
            href={'https://www.instagram.com/aplusplayer/'}
            target="_blank"
          >
            <Instagram />
          </Link><Spacer x={1} inline />
          <Link
            href={'https://github.com/igorkosta'}
            target="_blank"
          >
            <Github />
          </Link><Spacer x={1} inline />
          <Link
            href={'mailto:igor.kostyuchenok@gmail.com'}
            target="_blank"
          >
            <Mail />
          </Link>
        </Col>
      </Row>
    </Page.Footer>
  )
}
